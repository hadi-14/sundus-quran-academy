type Props = { className?: string; opacity?: number; color?: string };

/** SVG tessellation of 8-pointed Islamic stars, tileable. */
export function IslamicPattern({ className, opacity = 0.08, color = "#ffffff" }: Props) {
  return (
    <svg className={className} aria-hidden style={{ opacity }}>
      <defs>
        <pattern id="islamic-stars" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1">
            {/* 8-point star */}
            <path d="M40 8 L48 32 L72 40 L48 48 L40 72 L32 48 L8 40 L32 32 Z" />
            <path d="M40 16 L46 34 L64 40 L46 46 L40 64 L34 46 L16 40 L34 34 Z" />
            <circle cx="40" cy="40" r="3" />
            {/* corner stars */}
            <path d="M0 0 L4 12 L16 16 L4 20 L0 32 M0 0 L-4 12 L-16 16" opacity="0.5" />
            <path d="M80 80 L76 68 L64 64 L76 60 L80 48" opacity="0.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-stars)" />
    </svg>
  );
}
