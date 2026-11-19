import { useState } from 'react';
import { Cpu } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({ src, alt, className = '', fallbackTitle }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B162C] via-[#132344] to-[#091326] text-slate-300 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Cpu className="w-8 h-8 text-[#D4A438] mb-2 opacity-80" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide text-slate-200 max-w-[200px]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
