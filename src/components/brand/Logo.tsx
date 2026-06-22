import logoAsset from "@/assets/sundus-logo.png.asset.json";

type Props = { variant?: "dark" | "light"; size?: number; showText?: boolean };

export function Logo({ variant = "dark", size = 52, showText = true }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={
          variant === "light"
            ? "rounded-full bg-white/95 p-1.5 shadow-sm"
            : ""
        }
        style={{ width: size, height: size }}
      >
        <img
          src={logoAsset.url}
          alt="Sundus Quran Academy"
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div className="leading-tight hidden sm:block">
          <div
            className="font-display text-[17px] font-bold tracking-wide"
            style={{ color: variant === "dark" ? "var(--primary)" : "white" }}
          >
            Sundus
          </div>
          <div
            className="text-[10px] font-semibold tracking-[0.18em]"
            style={{ color: "var(--gold)" }}
          >
            QURAN ACADEMY
          </div>
        </div>
      )}
    </div>
  );
}
