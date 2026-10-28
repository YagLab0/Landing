import { CAPACIDADES } from "../data";
import { Etiqueta, Reveal } from "./ui";

export function Capacidades() {
  return (
    <section id="capacidades" className="border-t border-borde bg-salar/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Etiqueta>el equipo</Etiqueta>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-sal text-balance sm:text-5xl">
            Lo que el equipo ya sabe hacer
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {CAPACIDADES.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.1}>
              <div className="border-t-2 border-litio/50 pt-5">
                <h3 className="font-display text-2xl font-semibold text-sal">{c.titulo}</h3>
                <p className="mt-3 leading-relaxed text-bruma text-pretty">{c.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
