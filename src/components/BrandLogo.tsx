interface BrandLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export function BrandLogo({ variant = 'light', compact = false }: BrandLogoProps) {
  const isDark = variant === 'dark';
  return (
    <a href="#top" aria-label="Karya Jaya Sinergi — Beranda" className="inline-flex items-center gap-3 shrink-0">
      <img src="/logo.svg" alt="" aria-hidden="true" className={compact ? 'w-9 h-9 object-contain' : 'w-11 h-11 object-contain'} />
      <span className="flex flex-col leading-tight">
        <span className={`font-display font-extrabold tracking-tight ${compact ? 'text-sm' : 'text-base sm:text-lg'} ${isDark ? 'text-white' : 'text-[#0B162C]'}`}>KARYA JAYA SINERGI</span>
        {!compact && <span className={`mt-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase ${isDark ? 'text-[#D4A438]' : 'text-[#9A711F]'}`}>Engineering &amp; Electrical Solutions</span>}
      </span>
    </a>
  );
}
