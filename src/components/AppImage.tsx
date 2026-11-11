import { useCallback, useState, type ImgHTMLAttributes } from 'react';
import { asset } from '../lib/assets';
import { Icon } from './Icon';

export function AppImage({ src = '', alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  const observeImage = useCallback((image: HTMLImageElement | null) => {
    // A static image can fail before hydration attaches the error handler.
    if (image?.complete && image.naturalWidth === 0) setFailed(true);
  }, []);
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
  return (
    <img ref={observeImage} src={asset(src)} alt={alt} {...props} onError={() => setFailed(true)} />
  );
}
