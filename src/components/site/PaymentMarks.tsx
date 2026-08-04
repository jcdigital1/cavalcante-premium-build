/**
 * Marcas de pagamento desenhadas em SVG (representação simplificada,
 * sem uso de arquivos de logo de terceiros).
 */

function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-11 w-[74px] place-items-center rounded-lg bg-white/95 px-2 shadow-soft">
      {children}
    </span>
  );
}

export function VisaMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 26" className="h-4 w-full" role="img" aria-label="Visa">
        <text
          x="40"
          y="21"
          textAnchor="middle"
          fontFamily="Sora, sans-serif"
          fontSize="22"
          fontWeight="800"
          fontStyle="italic"
          letterSpacing="1"
          fill="#1A1F71"
        >
          VISA
        </text>
      </svg>
    </Wrap>
  );
}

export function MastercardMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 34" className="h-7 w-full" role="img" aria-label="Mastercard">
        <circle cx="32" cy="14" r="12" fill="#EB001B" />
        <circle cx="48" cy="14" r="12" fill="#F79E1B" fillOpacity="0.9" />
        <path d="M40 4a12 12 0 000 20 12 12 0 000-20z" fill="#FF5F00" />
        <text
          x="40"
          y="33"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontSize="8"
          fontWeight="700"
          fill="#1F2937"
        >
          mastercard
        </text>
      </svg>
    </Wrap>
  );
}

export function EloMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 30" className="h-6 w-full" role="img" aria-label="Elo">
        <circle cx="18" cy="15" r="11" fill="#111827" />
        <path d="M18 6a9 9 0 010 18" stroke="#FFCB05" strokeWidth="4" fill="none" />
        <path d="M12 15a6 6 0 016-6" stroke="#EF4444" strokeWidth="4" fill="none" />
        <path d="M12 15a6 6 0 006 6" stroke="#00A4E0" strokeWidth="4" fill="none" />
        <text
          x="54"
          y="21"
          textAnchor="middle"
          fontFamily="Sora, sans-serif"
          fontSize="17"
          fontWeight="800"
          fill="#111827"
        >
          elo
        </text>
      </svg>
    </Wrap>
  );
}

export function HipercardMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 26" className="h-4 w-full" role="img" aria-label="Hipercard">
        <text
          x="40"
          y="19"
          textAnchor="middle"
          fontFamily="Sora, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill="#B3131B"
        >
          Hipercard
        </text>
      </svg>
    </Wrap>
  );
}

export function PixMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 30" className="h-6 w-full" role="img" aria-label="PIX">
        <g transform="translate(16 15)" fill="#32BCAD">
          <rect x="-8" y="-8" width="16" height="16" rx="3" transform="rotate(45)" />
        </g>
        <text
          x="52"
          y="21"
          textAnchor="middle"
          fontFamily="Sora, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#32BCAD"
        >
          pix
        </text>
      </svg>
    </Wrap>
  );
}

export function DebitoMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 30" className="h-6 w-full" role="img" aria-label="Cartão de débito">
        <rect x="10" y="6" width="34" height="20" rx="4" fill="#1F2937" />
        <rect x="10" y="11" width="34" height="4" fill="#9CA3AF" />
        <rect x="14" y="19" width="12" height="3" rx="1.5" fill="#F97316" />
        <text
          x="62"
          y="20"
          textAnchor="middle"
          fontFamily="Sora, sans-serif"
          fontSize="11"
          fontWeight="800"
          fill="#1F2937"
        >
          déb
        </text>
      </svg>
    </Wrap>
  );
}

export function ParcelasMark() {
  return (
    <Wrap>
      <svg viewBox="0 0 80 30" className="h-6 w-full" role="img" aria-label="Parcelamos">
        <text
          x="40"
          y="21"
          textAnchor="middle"
          fontFamily="Sora, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#1F2937"
        >
          12x
        </text>
      </svg>
    </Wrap>
  );
}
