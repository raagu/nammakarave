import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { SiteApp } from './app/App';
import { routerBasename } from './lib/routing';

export { pagePaths, languages, languagePath, withBasePath } from './lib/routing';
export { pageSeo, structuredData, serializeStructuredData, publicSite } from './content/seo';

export async function render(pathname: string): Promise<string> {
  const errors: unknown[] = [];
  const { prelude, postponed } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter basename={routerBasename} location={pathname}>
        <SiteApp />
      </StaticRouter>
    </StrictMode>,
    {
      signal: AbortSignal.timeout(30_000),
      // Keep large Suspense boundaries inline: static hosts cannot stream completion scripts.
      progressiveChunkSize: Number.MAX_SAFE_INTEGER,
      onError: (error) => {
        errors.push(error);
      },
    },
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  if (errors.length) throw new AggregateError(errors, `Static rendering failed for ${pathname}`);
  if (postponed) throw new Error(`Static rendering did not complete for ${pathname}`);
  return Buffer.concat(chunks).toString('utf8');
}
