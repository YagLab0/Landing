import { motion, useReducedMotion } from "motion/react";
import { NOMAI } from "../data";
import { ACCENT, EstadoBadge, Etiqueta, NomaiMark, Reveal } from "./ui";

/* Chat con Nomito + custodia por etapas. */
function PanelChat() {
  const reduce = useReducedMotion();
  const appear = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        };
  return (
    <div className="rounded-xl border border-borde bg-salina p-5">
      <div className="flex items-center gap-2.5 border-b border-borde pb-3">
        <NomaiMark className="size-7" />
        <span className="font-display text-lg font-semibold text-sal">Nomito</span>
        <span className="font-mono text-micro text-bruma-2">agente de viajes</span>
      </div>
      <div className="mt-4 space-y-3">
        <motion.div {...appear(0.2)} className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-salina-2 px-4 py-2.5 text-sm text-sal">
            Buscame algo en Cafayate, 3 noches, para dos.
          </p>
        </motion.div>
        <motion.div {...appear(0.7)} className="flex justify-start">
          <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-borde bg-noche/70 p-4">
            <p className="text-sm text-bruma">
              Encontré esta casa — precio del dueño, con el pago en garantía:
            </p>
            <div className="mt-2.5 flex items-center justify-between gap-3 rounded-lg border border-borde bg-salina px-3.5 py-2.5">
              <div>
                <p className="text-sm font-semibold text-sal">Casa de Adobe</p>
                <p className="font-mono text-micro text-bruma-2">Cafayate · $ 95.000 /noche</p>
              </div>
              <span className="rounded-full bg-terra/15 px-2.5 py-0.5 font-mono text-micro text-terra">
                en garantía
              </span>
            </div>
            <div className="mt-3">
              <div className="flex h-1.5 overflow-hidden rounded-full bg-borde">
                <motion.span
                  className="h-full bg-terra"
                  initial={reduce ? { width: "50%" } : { width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                />
                <motion.span
                  className="h-full bg-terra/40"
                  initial={reduce ? { width: "50%" } : { width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="mt-1.5 flex justify-between font-mono text-micro text-bruma-2">
                <span>50% · plazo de cancelación</span>
                <span>resto · 24 h post check-in</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProyectoNomai() {
  const a = ACCENT.terra;
  return (
    <section id="nomai" className="relative border-t border-borde py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Etiqueta indice={NOMAI.indice} accent="terra">
            {NOMAI.kicker}
          </Etiqueta>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <NomaiMark className="size-12" />
            <h2 className="font-display text-5xl font-bold text-sal sm:text-6xl">
              {NOMAI.nombre}
            </h2>
            <span className={`font-display text-2xl font-medium ${a.text} sm:text-3xl`}>
              {NOMAI.rol}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <EstadoBadge accent="terra">{NOMAI.estado}</EstadoBadge>
            <span className="font-mono text-micro text-bruma-2">{NOMAI.estadoExtra}</span>
            <a
              href={NOMAI.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-micro text-terra underline decoration-terra/40 underline-offset-4 transition-colors hover:decoration-terra"
            >
              demo en vivo · nomaiapp.vercel.app
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-bruma text-pretty">{NOMAI.bajada}</p>
              <p className="mt-5 leading-relaxed text-bruma text-pretty">{NOMAI.queHace}</p>
            </Reveal>
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-sal">Qué demuestra</h3>
              <ul className="mt-4 space-y-3">
                {NOMAI.demuestra.map((d, i) => (
                  <Reveal key={d} delay={i * 0.07}>
                    <li className="flex gap-3 text-sm leading-relaxed text-bruma">
                      <svg viewBox="0 0 16 16" className={`mt-0.5 size-4 shrink-0 ${a.text}`} aria-hidden>
                        <path
                          d="m3 8.5 3.2 3.2L13 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {d}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
          <Reveal delay={0.15} className="lg:sticky lg:top-24">
            <PanelChat />
          </Reveal>
        </div>

        {/* traslado a minería */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-sal">
            Cómo se traslada a la minería
          </h3>
          <div className="mt-6 overflow-hidden rounded-xl border border-borde">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-borde bg-salina font-mono text-micro text-bruma-2">
                  <th className="px-5 py-3.5 font-medium">Pieza de Nomai</th>
                  <th className="hidden px-5 py-3.5 font-medium sm:table-cell" aria-hidden />
                  <th className="px-5 py-3.5 font-medium">Aplicación posible en una mina</th>
                </tr>
              </thead>
              <tbody>
                {NOMAI.traslado.map((t, i) => (
                  <tr
                    key={t.pieza}
                    className={`align-top transition-colors hover:bg-salina/60 ${
                      i % 2 === 0 ? "bg-salar/50" : "bg-salar/20"
                    }`}
                  >
                    <td className="px-5 py-4 text-sal/90">{t.pieza}</td>
                    <td className={`hidden px-5 py-4 ${a.text} sm:table-cell`} aria-hidden>
                      →
                    </td>
                    <td className="px-5 py-4 text-bruma">{t.aplicacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
