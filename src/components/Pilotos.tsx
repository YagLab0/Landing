import { PILOTOS } from "../data";
import { ACCENT, Etiqueta, Reveal } from "./ui";

export function Pilotos() {
  return (
    <section id="pilotos" className="border-t border-borde py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Etiqueta>próximos pasos</Etiqueta>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-sal text-balance sm:text-5xl">
            Pilotos chicos, con datos reales
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bruma text-pretty">
            No pedimos un contrato grande. Proponemos un piloto para medir si la
            herramienta ahorra tiempo o dinero antes de escalar.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILOTOS.map((p, i) => {
            const a = ACCENT[p.accent];
            return (
              <Reveal key={p.proyecto} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col rounded-xl border border-borde bg-salina p-6 transition-all duration-300 hover:-translate-y-1 hover:border-borde-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-sal">
                      {p.proyecto}
                    </h3>
                  </div>
                  <p className="mt-1.5 font-mono text-micro text-bruma-2">
                    {p.area} · <span className={a.text}>{p.plazo}</span>
                  </p>
                  <ul className="mt-5 space-y-3">
                    {p.puntos.map((punto) => (
                      <li key={punto} className="flex gap-3 text-sm leading-relaxed text-bruma">
                        <span className={`mt-2 size-1.5 shrink-0 rounded-full ${a.bg}`} aria-hidden />
                        {punto}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
