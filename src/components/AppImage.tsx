import { useState, type ImgHTMLAttributes } from 'react';
import { asset } from '../lib/assets';
import { Icon } from './Icon';

export function AppImage({ src = '', alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div
        className={`image-fallback ${props.className ?? ''}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        <Icon name="culture" />
      </div>
    );
  return <img src={asset(src)} alt={alt} {...props} onError={() => setFailed(true)} />;
}
