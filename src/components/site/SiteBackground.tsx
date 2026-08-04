export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* halos */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <div className="absolute top-1/3 -left-32 h-[380px] w-[380px] rounded-full bg-navy-soft/60 blur-[110px]" />
      <div className="absolute bottom-0 -right-24 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[130px]" />

      {/* blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(120% 90% at 50% 0%, black, transparent 75%)",
        }}
      />

      {/* vigas metálicas / linhas de obra */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.13]" viewBox="0 0 400 800" preserveAspectRatio="none">
        <g stroke="currentColor" strokeWidth="0.7" fill="none" className="text-white">
          <path d="M-20 120 L160 40 L340 120 L160 200 Z" />
          <path d="M-20 120 L160 200 M160 40 L160 200 M340 120 L160 40" />
          <path d="M60 520 L240 440 L420 520 L240 600 Z" />
          <path d="M60 520 L240 600 M240 440 L240 600 M420 520 L240 440" />
          <circle cx="330" cy="300" r="70" />
          <circle cx="330" cy="300" r="42" />
          <path d="M0 700 L400 640 M0 740 L400 680" />
        </g>
      </svg>

      {/* partículas discretas */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-brand/50 animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            height: p.s,
            width: p.s,
            animationDelay: `${p.d}s`,
            animationDuration: `${p.t}s`,
          }}
        />
      ))}
    </div>
  );
}

const PARTICLES = [
  { x: 8, y: 18, s: 5, d: 0, t: 8 },
  { x: 24, y: 62, s: 3, d: 1.4, t: 10 },
  { x: 47, y: 30, s: 4, d: 0.6, t: 9 },
  { x: 62, y: 74, s: 6, d: 2.1, t: 11 },
  { x: 78, y: 22, s: 3, d: 1.1, t: 7 },
  { x: 88, y: 55, s: 5, d: 2.6, t: 12 },
  { x: 36, y: 88, s: 4, d: 1.8, t: 10 },
  { x: 70, y: 44, s: 3, d: 0.3, t: 9 },
];
