import { motion, useReducedMotion } from "motion/react";
import { JULIT } from "../data";
import { ACCENT, EstadoBadge, Etiqueta, FlowSteps, JuLitMark, Reveal } from "./ui";

/* Pasaporte del lote: certificado firmado, huella y verificación por QR. */
function PanelPasaporte() {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-xl border border-borde bg-salina p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-micro text-bruma">pasaporte del lote</span>
        <motion.span
          className="inline-flex items-center gap-1.5 rounded-full bg-litio/15 px-2.5 py-0.5 font-mono text-micro text-litio"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        >
          verificado
        </motion.span>
      </div>
      <div className="mt-4 flex items-start gap-4">
        {/* QR simbólico */}
        <svg viewBox="0 0 60 60" className="size-16 shrink-0" aria-hidden>
          <rect width="60" height="60" rx="6" fill="#0A0D13" />
          <g fill="#5BE3D4">
            <rect x="7" y="7" width="16" height="16" rx="2" fill="none" stroke="#5BE3D4" strokeWidth="2" />
            <rect x="11" y="11" width="8" height="8" />
            <rect x="37" y="7" width="16" height="16" rx="2" fill="none" stroke="#5BE3D4" strokeWidth="2" />
            <rect x="41" y="11" width="8" height="8" />
            <rect x="7" y="37" width="16" height="16" rx="2" fill="none" stroke="#5BE3D4" strokeWidth="2" />
            <rect x="11" y="41" width="8" height="8" />
            <rect x="31" y="31" width="6" height="6" />
            <rect x="41" y="31" width="5" height="5" />
            <rect x="50" y="35" width="4" height="4" />
            <rect x="31" y="41" width="5" height="5" />
            <rect x="40" y="46" width="6" height="6" />
            <rect x="50" y="49" width="4" height="4" />
          </g>
        </svg>
        <div className="min-w-0">
          <p className="font-display text-2xl font-semibold text-sal">
            Li₂CO₃ <span className="text-bruma-2">·</span>{" "}
            <span className="text-litio">lote 0042</span>
          </p>
          <p className="mt-1 text-sm text-bruma">Salar de Olaroz · 20 t · 99,5%</p>
          <div className="mt-3 space-y-1.5 font-mono text-micro">
            <p className="text-bruma-2">
              huella <span className="text-bruma">9f2c…a41d</span>
            </p>
            <p className="text-bruma-2">
              firmado por <span className="text-bruma">Laboratorio Andino S.A.</span>
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-litio/10 to-transparent"
        aria-hidden
        initial={false}
        animate={reduce ? undefined : { x: ["-120%", "380%"] }}
        transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
      />
    </div>
  );
}

/* Escrow: la plata bloqueada que se libera con la entrega. */
function PanelEscrow() {
  const reduce = useReducedMotion();
  const etapas = ["depósito", "despacho", "entrega", "cobro"];
  return (
    <div className="relative overflow-hidden rounded-xl border border-borde bg-salina p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-micro text-bruma">pago protegido · usdc</span>
        <span className="font-mono text-micro text-bruma-2">red de prueba</span>
      </div>
      <svg viewBox="0 0 340 120" className="mt-3 block w-full" aria-hidden>
        <path d="M 52 60 H 288" stroke="#2E3A50" strokeWidth="1.6" fill="none" />
        <motion.path
          d="M 52 60 H 288"
          stroke="#5BE3D4"
          strokeWidth="2"
          fill="none"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        {/* comprador */}
        <g transform="translate(30 60)">
          <rect x="-16" y="-18" width="32" height="36" rx="7" fill="#10151E" stroke="#2E3A50" />
          <text y="4" textAnchor="middle" fontSize="12" fill="#9AA5B8" fontFamily="Saira, sans-serif">
            C
          </text>
        </g>
        {/* bóveda */}
        <motion.g
          transform="translate(170 60)"
          initial={reduce ? { opacity: 1 } : { opacity: 0.35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <rect x="-24" y="-24" width="48" height="42" rx="8" fill="#10151E" stroke="#5BE3D4" strokeWidth="1.4" />
          <path
            d="M-8-4v-6a8 8 0 0 1 16 0v6"
            fill="none"
            stroke="#5BE3D4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="-10" y="-4" width="20" height="15" rx="3" fill="#5BE3D4" opacity=".9" />
          <text y="30" textAnchor="middle" fontSize="8.5" fill="#9AA5B8" fontFamily="JetBrains Mono, monospace">
            bloqueado
          </text>
        </motion.g>
        {/* productor */}
        <g transform="translate(310 60)">
          <rect x="-16" y="-18" width="32" height="36" rx="7" fill="#10151E" stroke="#2E3A50" />
          <text y="4" textAnchor="middle" fontSize="12" fill="#9AA5B8" fontFamily="Saira, sans-serif">
            P
          </text>
        </g>
        {/* paquete viajando */}
        <motion.circle
          cy="60"
          r="4"
          fill="#5BE3D4"
          initial={reduce ? { cx: 288, opacity: 0 } : { cx: 52, opacity: 0 }}
          whileInView={reduce ? { opacity: 0 } : { cx: [52, 160, 160, 288, 288], opacity: [0, 1, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.55, 0.9, 1], ease: "easeInOut" }}
        />
      </svg>
      <ol className="mt-1 flex justify-between font-mono text-micro text-bruma-2">
        {etapas.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-bruma">
        Si el productor no despacha, el comprador recupera el 100%. Nadie — ni
        siquiera nosotros — puede mover los fondos por fuera de las reglas.
      </p>
    </div>
  );
}

export function ProyectoJulit() {
  const a = ACCENT.litio;
  return (
    <section id="julit" className="relative border-t border-borde bg-salar/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Etiqueta indice={JULIT.indice} accent="litio">
            {JULIT.kicker}
          </Etiqueta>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <JuLitMark className="size-12" />
            <h2 className="font-display text-5xl font-bold text-sal sm:text-6xl">
              {JULIT.nombre}
            </h2>
            <span className={`font-display text-2xl font-medium ${a.text} sm:text-3xl`}>
              {JULIT.rol}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <EstadoBadge accent="litio">{JULIT.estado}</EstadoBadge>
            <EstadoBadge accent="cobre">{JULIT.estadoExtra}</EstadoBadge>
            <a
              href={JULIT.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-micro text-litio underline decoration-litio/40 underline-offset-4 transition-colors hover:decoration-litio"
            >
              demo en vivo · ju-lit.vercel.app
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <p className="max-w-3xl text-lg leading-relaxed text-bruma text-pretty">
            {JULIT.bajada}
          </p>
          <p className="mt-5 max-w-3xl rounded-lg border border-borde bg-salina/60 p-5 leading-relaxed text-sal/85 text-pretty">
            {JULIT.analogia}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {JULIT.partes.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-borde bg-salina p-6 transition-colors duration-300 hover:border-litio/40">
                <p className={`font-mono text-micro ${a.text}`}>parte {i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-sal">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bruma">{p.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <PanelPasaporte />
          </Reveal>
          <Reveal delay={0.15}>
            <PanelEscrow />
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="mb-6 font-display text-2xl font-semibold text-sal">
              El recorrido de un lote
            </h3>
          </Reveal>
          <FlowSteps pasos={JULIT.flujo} accent="litio" />
        </div>

        <Reveal className="mt-10">
          <p className="max-w-3xl leading-relaxed text-bruma text-pretty">{JULIT.modelo}</p>
          <div className="mt-6 rounded-xl border border-cobre/35 bg-cobre/5 p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-bruma text-pretty">
              <span className="font-semibold text-cobre">Estado honesto. </span>
              {JULIT.honesto.replace(/^Estado honesto: /, "")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
