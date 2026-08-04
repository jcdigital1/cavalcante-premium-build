import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Blocks,
  Boxes,
  Brush,
  ChevronUp,
  DoorOpen,
  Droplets,
  Hammer,
  HardHat,
  Home,
  Instagram,
  Layers,
  MapPin,
  MessageCircle,
  Mountain,
  Package,
  PaintRoller,
  Pipette,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Tag,
  Toilet,
  Trees,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import logo from "@/assets/logo-cavalcante.png.asset.json";
import banner from "@/assets/banner-materiais.jpg";
import gMadeiras from "@/assets/g-madeiras.jpg";
import gTijolos from "@/assets/g-tijolos.jpg";
import gTintas from "@/assets/g-tintas.jpg";
import gCimento from "@/assets/g-cimento.jpg";
import gTelhas from "@/assets/g-telhas.jpg";
import gCaixaAgua from "@/assets/g-caixa-agua.jpg";
import gFerramentas from "@/assets/g-ferramentas.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SiteBackground } from "@/components/site/SiteBackground";
import {
  DebitoMark,
  EloMark,
  HipercardMark,
  MastercardMark,
  ParcelasMark,
  PixMark,
  VisaMark,
} from "@/components/site/PaymentMarks";
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_URL } from "@/components/site/links";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Depósito Cavalcante | Materiais de Construção — Palmácia" },
      {
        name: "description",
        content:
          "Do básico ao acabamento: tijolos, cimento, areia, brita, telhas, tintas, madeiras, hidráulica e elétrica. Atendimento especializado e entrega rápida em Palmácia.",
      },
      { property: "og:title", content: "Depósito Cavalcante | Materiais de Construção" },
      {
        property: "og:description",
        content: "Tudo para sua construção em um só lugar. Qualidade, variedade e preços justos.",
      },
    ],
  }),
  component: Index,
});

/* ---------------- data ---------------- */

const PRODUTOS = [
  { icon: Blocks, label: "Tijolos" },
  { icon: Package, label: "Cimento" },
  { icon: Mountain, label: "Areia" },
  { icon: Layers, label: "Brita" },
  { icon: Home, label: "Telhas" },
  { icon: DoorOpen, label: "Portas" },
  { icon: Ruler, label: "Janelas" },
  { icon: Trees, label: "Madeiras" },
  { icon: Pipette, label: "Cano PVC" },
  { icon: Droplets, label: "Caixa d'água" },
  { icon: Toilet, label: "Vasos sanitários" },
  { icon: PaintRoller, label: "Tintas acrílicas" },
  { icon: ShoppingCart, label: "Carrinho de mão" },
  { icon: Wrench, label: "Ferramentas" },
  { icon: Hammer, label: "Ferragens" },
  { icon: Droplets, label: "Hidráulica" },
  { icon: Zap, label: "Elétrica" },
  { icon: Boxes, label: "Madeira em geral" },
];

const DIFERENCIAIS = [
  { icon: HardHat, label: "Atendimento especializado" },
  { icon: BadgeCheck, label: "Produtos de qualidade" },
  { icon: Tag, label: "Preços competitivos" },
  { icon: Boxes, label: "Grande variedade" },
  { icon: Truck, label: "Entrega rápida" },
  { icon: ShieldCheck, label: "Tudo para sua obra" },
  { icon: Brush, label: "Do básico ao acabamento" },
  { icon: Package, label: "Estoque completo" },
];

const PAGAMENTOS = [
  { mark: VisaMark, label: "Visa", note: "Crédito" },
  { mark: MastercardMark, label: "Mastercard", note: "Crédito" },
  { mark: EloMark, label: "Elo", note: "Crédito" },
  { mark: HipercardMark, label: "Hipercard", note: "Crédito" },
  { mark: DebitoMark, label: "Débito", note: "À vista" },
  { mark: PixMark, label: "PIX", note: "Na hora" },
  { mark: ParcelasMark, label: "Parcelamos", note: "Consulte as condições" },
];

const BANNER_TAGS = [
  { icon: Home, label: "Casas modernas" },
  { icon: HardHat, label: "Obras" },
  { icon: Blocks, label: "Tijolos" },
  { icon: Trees, label: "Madeiras" },
  { icon: PaintRoller, label: "Tintas" },
  { icon: Truck, label: "Materiais de construção" },
];

const GALERIA = [
  { img: gMadeiras, label: "Madeiras" },
  { img: gTijolos, label: "Tijolos" },
  { img: gCimento, label: "Cimento" },
  { img: gTintas, label: "Tintas e Ferragens" },
  { img: gTelhas, label: "Telhas, Portas e Janelas" },
  { img: gCaixaAgua, label: "Caixa d'água e Tubulações" },
  { img: gFerramentas, label: "Ferramentas e Carrinhos de mão" },
];


const NAV = [
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#pagamento", label: "Pagamento" },
  { href: "#galeria", label: "Galeria" },
  { href: "#endereco", label: "Endereço" },
];

/* ---------------- page ---------------- */

function Index() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-hero">
      <Loader done={!loading} />
      <SiteBackground />
      <Header scrolled={scrolled} />

      <main>
        <Hero />
        <BannerPrincipal />
        <Produtos />
        <Diferenciais />
        <Pagamentos />
        <BannerMotivacional />
        <Galeria />
        <Endereco />
        <ChamadaFinal />
      </main>

      <Footer />
      <FloatingWhats />
      <BackToTop visible={scrolled} />
    </div>
  );
}

/* ---------------- pieces ---------------- */

function Loader({ done }: { done: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-navy-deep transition-all duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <img src={logo.url} alt="Depósito Cavalcante" className="h-24 w-24 animate-pulse object-contain" />
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-primary btn-shine" />
        </div>
        <p className="text-xs tracking-[0.3em] text-muted-foreground">CARREGANDO</p>
      </div>
    </div>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-3xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <img src={logo.url} alt="Logo Depósito Cavalcante" className="h-10 w-10 shrink-0 object-contain" />
            <span className="truncate font-display text-sm font-extrabold uppercase tracking-wide sm:text-base">
              Depósito <span className="text-brand-gradient">Cavalcante</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-whats px-4 py-2 text-xs font-bold text-navy-deep shadow-soft transition-transform duration-300 hover:scale-105 md:hidden"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-4 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="mx-auto mb-6 w-full max-w-[420px] animate-float sm:max-w-[520px]">
            <img
              src={logo.url}
              alt="Logomarca Depósito Cavalcante"
              width={800}
              height={800}
              className="h-auto w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">
            Depósito <span className="text-brand-gradient">Cavalcante</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 font-display text-lg font-semibold text-primary sm:text-2xl">
            Tudo para sua construção em um só lugar.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pensou em construir ou reformar? Aqui você encontra qualidade, variedade, preços justos e um
            atendimento que faz a diferença.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex items-center justify-center gap-3 rounded-2xl bg-whats px-7 py-4 font-display text-base font-bold text-navy-deep shadow-soft transition-transform duration-300 hover:scale-[1.04]"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 font-display text-base font-bold transition-transform duration-300 hover:scale-[1.04]"
            >
              <Instagram className="h-5 w-5 text-primary" /> Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {["Do básico ao acabamento", "Entrega rápida", "Estoque completo"].map((t) => (
              <span key={t} className="glass rounded-full px-4 py-2 text-xs font-semibold text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={100}>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={180}>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

function BannerPrincipal() {
  return (
    <section className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass p-2">
            <img
              src={banner}
              alt="Casas modernas, obras, tijolos, madeiras e materiais de construção"
              width={1600}
              height={912}
              loading="lazy"
              className="h-[300px] w-full rounded-[1.6rem] object-cover sm:h-[460px]"
            />
            <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-4xl">
                Qualidade do <span className="text-brand-gradient">básico ao acabamento</span>.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {BANNER_TAGS.map((t) => (
                  <span
                    key={t.label}
                    className="glass-strong inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold"
                  >
                    <t.icon className="h-4 w-4 text-primary" /> {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Produtos() {
  return (
    <section id="produtos" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker="Nossos produtos"
          title={
            <>
              Tudo que sua obra <span className="text-brand-gradient">precisa</span>
            </>
          }
          subtitle="Materiais selecionados para cada etapa da construção."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {PRODUTOS.map((p, i) => (
            <Reveal key={p.label + i} delay={i * 40}>
              <div className="card-3d glass group h-full rounded-2xl p-4 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-bold leading-tight">{p.label}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={PRODUTOS.length * 40}>
            <div className="card-3d glass-strong h-full rounded-2xl p-4 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground animate-glow">
                <Sparkles className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-bold leading-tight text-primary">E muito mais…</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  return (
    <section id="diferenciais" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker="Diferenciais"
          title={
            <>
              Por que comprar <span className="text-brand-gradient">com a gente</span>
            </>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d.label} delay={i * 60}>
              <div className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-5 text-center transition-transform duration-500 hover:-translate-y-1.5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary/15 text-primary animate-glow">
                  <d.icon className="h-7 w-7" />
                </span>
                <p className="text-sm font-bold leading-snug">{d.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pagamentos() {
  return (
    <section id="pagamento" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker="Formas de pagamento"
          title={
            <>
              Facilitamos sua <span className="text-brand-gradient">compra</span>
            </>
          }
          subtitle="Aceitamos diversas formas de pagamento."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {PAGAMENTOS.map((p, i) => (
            <Reveal key={p.label} delay={i * 60}>
              <div className="card-3d glass relative h-full overflow-hidden rounded-2xl p-5">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                <p.mark />
                <p className="mt-4 font-display text-base font-extrabold">{p.label}</p>
                <p className="text-xs text-muted-foreground">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function BannerMotivacional() {
  return (
    <section className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong px-6 py-14 text-center sm:px-14 sm:py-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
            <HardHat className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight sm:text-4xl">
              Construir sonhos começa pelos <span className="text-brand-gradient">materiais certos</span>.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Nós temos tudo o que sua obra precisa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Galeria() {
  const items = [...GALERIA, ...GALERIA];
  return (
    <section id="galeria" className="py-14 sm:py-20">
      <div className="px-4">
        <SectionTitle
          kicker="Galeria"
          title={
            <>
              Nosso <span className="text-brand-gradient">estoque</span>
            </>
          }
          subtitle="Madeiras, cimento, tijolos, ferragens, tintas, telhas, portas, janelas, tubulações e mais."
        />
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 px-4">
          {items.map((g, i) => (
            <figure
              key={i}
              className="glass relative w-[240px] shrink-0 overflow-hidden rounded-2xl p-1.5 sm:w-[320px]"
            >
              <img
                src={g.img}
                alt={g.label}
                loading="lazy"
                className="h-[180px] w-full rounded-xl object-cover sm:h-[220px]"
              />
              <figcaption className="absolute inset-x-1.5 bottom-1.5 rounded-xl bg-navy-deep/70 px-3 py-2 text-xs font-bold backdrop-blur-md">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Endereco() {
  return (
    <section id="endereco" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker="Onde estamos"
          title={
            <>
              Estamos esperando sua <span className="text-brand-gradient">visita!</span>
            </>
          }
        />
        <Reveal delay={140}>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <div className="glass-strong flex flex-col items-center justify-center gap-4 rounded-[1.75rem] p-8 text-center">
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-10 w-10" />
                <span className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-ring" />
              </span>
              <p className="font-display text-xl font-extrabold">{ADDRESS}</p>
              <p className="text-sm text-muted-foreground">Palmácia — Ceará</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-whats px-6 py-3 font-display text-sm font-bold text-navy-deep transition-transform duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </a>
            </div>

            {/* mapa ilustrativo */}
            <div className="glass relative min-h-[280px] overflow-hidden rounded-[1.75rem] p-2">
              <svg viewBox="0 0 400 280" className="h-full w-full rounded-[1.4rem] bg-navy/60">
                <g stroke="currentColor" className="text-white/15" strokeWidth="1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="280" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 56} x2="400" y2={i * 56} />
                  ))}
                </g>
                <path d="M0 190 C90 170 130 120 210 130 C290 140 330 90 400 100" className="stroke-primary/70" strokeWidth="6" fill="none" />
                <path d="M60 0 C70 90 140 130 150 280" className="stroke-white/25" strokeWidth="4" fill="none" />
                <g className="fill-white/10">
                  <rect x="230" y="30" width="60" height="40" rx="6" />
                  <rect x="300" y="180" width="70" height="50" rx="6" />
                  <rect x="40" y="210" width="70" height="40" rx="6" />
                </g>
                <g>
                  <circle cx="210" cy="130" r="26" className="fill-primary/25" />
                  <circle cx="210" cy="130" r="11" className="fill-primary" />
                </g>
              </svg>
              <span className="absolute left-6 top-6 glass-strong rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                Mapa ilustrativo
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChamadaFinal() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-16 text-center shadow-soft sm:px-14 sm:py-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--brand)_28%,transparent),transparent)]" />
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Vai construir ou <span className="text-brand-gradient">reformar?</span>
            </h2>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-base text-muted-foreground sm:text-lg">
              <p>Economize tempo.</p>
              <p>Economize dinheiro.</p>
              <p>Encontre tudo em um só lugar.</p>
            </div>
            <p className="mt-6 font-display text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
              Depósito Cavalcante
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shine mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-whats px-8 py-4 font-display text-base font-bold text-navy-deep shadow-soft transition-transform duration-300 hover:scale-105 sm:text-lg"
            >
              <MessageCircle className="h-5 w-5" /> Solicitar orçamento no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <img
          src={logo.url}
          alt="Logomarca Depósito Cavalcante"
          loading="lazy"
          className="mx-auto h-40 w-40 object-contain sm:h-52 sm:w-52"
        />
        <p className="mt-4 font-display text-xl font-extrabold uppercase tracking-wide">
          Depósito <span className="text-brand-gradient">Cavalcante</span>
        </p>
        <p className="mt-3 inline-flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" /> {ADDRESS}
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold transition-transform duration-300 hover:scale-105"
          >
            <Instagram className="h-4 w-4 text-primary" /> Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-whats px-6 py-3 text-sm font-bold text-navy-deep transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Depósito Cavalcante. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whats text-navy-deep shadow-soft transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full border-2 border-whats animate-pulse-ring" />
    </a>
  );
}

function BackToTop({ visible }: { visible: boolean }) {
  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-4 z-50 grid h-12 w-12 place-items-center rounded-full glass-strong text-primary transition-all duration-500 hover:scale-110 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronUp className="h-6 w-6" />
      <ArrowUp className="hidden" />
    </button>
  );
}
