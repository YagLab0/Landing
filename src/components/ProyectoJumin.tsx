import { motion, useReducedMotion } from "motion/react";
import { JUMIN } from "../data";
import { ACCENT, EstadoBadge, Etiqueta, FlowSteps, JuminMark, Reveal } from "./ui";

/* Panel de stock: la línea baja, cruza el punto de reorden y salta la alerta. */
function PanelStock() {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-xl border border-borde bg-salina">
      <div className="flex items-center justify-between border-b border-borde px-4 py-2.5">
        <span className="font-mono text-micro text-bruma">stock · bolas de acero para molino</span>
        <motion.span
          className="inline-flex items-center gap-1.5 rounded-full bg-senal/15 px-2.5 py-0.5 font-mono text-micro text-senal"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <span className="size-1.5 rounded-full bg-senal animate-pulse-soft" />
          bajo el punto de reorden
        </motion.span>
      </div>
      <svg viewBox="0 0 360 160" className="block w-full" aria-hidden>
        {/* grilla */}
        {[40, 80, 120].map((y) => (
          <line key={y} x1="16" y1={y} x2="344" y2={y} stroke="#232D3F" strokeWidth="1" />
        ))}
        {/* punto de reorden */}
        <line x1="16" y1="92" x2="344" y2="92" stroke="#F5B301" strokeWidth="1.4" strokeDasharray="5 6" />
        <text x="20" y="86" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill="#F5B301">
          punto de reorden
        </text>
        {/* nivel de stock */}
        <motion.path
          d="M 20 34 C 70 40 110 44 150 58 S 230 88 268 104 S 320 122 340 128"
          fill="none"
          stroke="#9AA5B8"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {/* punto de cruce */}
        <motion.circle
          cx="243"
          cy="92"
          r="4.5"
          fill="#F5B301"
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.15, type: "spring", stiffness: 300, damping: 14 }}
        />
        <motion.circle
          cx="243"
          cy="92"
          r="10"
          fill="none"
          stroke="#F5B301"
          strokeWidth="1.2"
          initial={reduce ? { opacity: 0.6 } : { opacity: 0 }}
          whileInView={{ opacity: [0, 0.7, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 1.6, repeat: reduce ? 0 : Infinity }}
        />
        {/* proyección de días */}
        <motion.g
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7 }}
        >
          <text
            x="320"
            y="146"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            fill="#9AA5B8"
            textAnchor="end"
          >
            ~9 días de margen
          </text>
        </motion.g>
      </svg>
      {/* respuesta del agente */}
      <motion.div
        className="mx-4 mb-4 rounded-lg border border-senal/30 bg-noche/70 p-3.5"
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.9, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-micro text-bruma-2">Jumin recomienda</p>
        <p className="mt-1 text-sm font-semibold text-sal">Minera Andes S.A. — San Salvador de Jujuy</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-micro text-bruma">
          <span>$ 0,31 /kg</span>
          <span>entrega en 6 días</span>
          <span className="text-senal">confianza 92/100</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-bruma">
          IRAM de EPP vigente · 14 entregas a tiempo · habilitación de alta montaña al día.
          <span className="text-sal"> Falta tu aprobación.</span>
        </p>
      </motion.div>
    </div>
  );
}

export function ProyectoJumin() {
  const a = ACCENT.senal;
  return (
    <section id="jumin" className="relative border-t border-borde py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Etiqueta indice={JUMIN.indice} accent="senal">
            {JUMIN.kicker}
          </Etiqueta>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <JuminMark className="size-12" />
            <h2 className="font-display text-5xl font-bold text-sal sm:text-6xl">
              {JUMIN.nombre}
            </h2>
            <span className={`font-display text-2xl font-medium ${a.text} sm:text-3xl`}>
              {JUMIN.rol}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <EstadoBadge accent="senal">{JUMIN.estado}</EstadoBadge>
            <span className="font-mono text-micro text-bruma-2">{JUMIN.estadoExtra}</span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <blockquote className="border-l-2 border-senal/60 pl-5 text-xl leading-relaxed text-sal/90 text-pretty">
                “{JUMIN.cita}”
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-bruma text-pretty">
                {JUMIN.bajada}
              </p>
            </Reveal>
            <div className="mt-10 space-y-6">
              {JUMIN.pilares.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className={`mt-1.5 font-mono text-micro ${a.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-sal">
                        {p.titulo}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-bruma">
                        {p.detalle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="lg:sticky lg:top-24">
            <PanelStock />
          </Reveal>
        </div>

        {/* números */}
        <Reveal className="mt-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-borde bg-borde md:grid-cols-4">
            {JUMIN.stats.map((s) => (
              <div key={s.etiqueta} className="flex flex-col bg-salar px-6 py-7">
                <dt className="order-2 mt-2 text-sm leading-snug text-bruma">
                  {s.etiqueta}
                  {s.nota && <span className="block text-xs text-bruma-2">{s.nota}</span>}
                </dt>
                <dd className={`order-1 font-display text-4xl font-bold ${a.text} sm:text-5xl`}>
                  {s.valor}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* reglas */}
        <Reveal className="mt-10">
          <div className="rounded-xl border border-borde bg-salina p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-sal">
              {JUMIN.reglas.titulo}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-bruma text-pretty">
              {JUMIN.reglas.detalle}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {JUMIN.reglas.ejemplos.map((r) => (
                <span
                  key={r.categoria}
                  className="inline-flex items-center gap-2 rounded-md border border-borde bg-noche/60 px-3.5 py-2 text-sm"
                >
                  <span className="text-bruma">{r.categoria}</span>
                  <span className="text-borde-2" aria-hidden>→</span>
                  <span className={`font-mono text-sm ${a.text}`}>{r.exige}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <h3 className="mb-6 font-display text-2xl font-semibold text-sal">
              Cómo funciona
            </h3>
          </Reveal>
          <FlowSteps pasos={JUMIN.flujo} accent="senal" />
        </div>
      </div>
    </section>
  );
}
