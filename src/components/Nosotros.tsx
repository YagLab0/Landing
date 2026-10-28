import { PREGUNTAS } from "../data";
import { ACCENT, Etiqueta, Reveal } from "./ui";

const TAG_ACCENT: Record<string, "senal" | "litio"> = {
  Jumin: "senal",
  JuLit: "litio",
  "JuLit · pago": "litio",
};

export function Nosotros() {
  return (
    <section id="nosotros" className="border-t border-borde bg-salar/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <Etiqueta>por qué nosotros</Etiqueta>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-sal text-balance sm:text-5xl">
              Estamos acá, al lado de las operaciones
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-7 space-y-5 leading-relaxed text-bruma text-pretty">
            <p>
              Estamos en Jujuy, cerca de las operaciones y de sus proveedores.
              Conocemos el registro provincial y la realidad de la Puna: la
              distancia, la altura y lo que cuesta mover cualquier cosa hasta un
              campamento.
            </p>
            <p>
              Y ya tenemos prototipos funcionando, no solo una idea: una red de
              proveedores armada con datos públicos, un pago protegido corriendo
              en red de prueba y un agente que reserva y paga solo.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-8">
            <div className="rounded-xl border border-borde bg-salina p-5 font-mono text-micro leading-relaxed text-bruma-2">
              <p>
                Los números de Jumin vienen de la base de proveedores construida
                con datos públicos de CAPMIN y del Registro Provincial de
                Proveedores Mineros de Jujuy. Las fuentes de los datos de JuLit
                están citadas en el repositorio del proyecto.
              </p>
            </div>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-sal">
              Preguntas para hacerle a la mina
            </h3>
            <p className="mt-2 text-sm text-bruma">
              Ayudan a saber rápido qué le sirve más.
            </p>
          </Reveal>
          <ul className="mt-6 space-y-2.5">
            {PREGUNTAS.map((p, i) => {
              const acc = ACCENT[TAG_ACCENT[p.producto]];
              return (
                <Reveal key={p.pregunta} delay={Math.min(i * 0.05, 0.3)}>
                  <li className="flex items-start justify-between gap-4 rounded-lg border border-borde bg-salina/60 px-4 py-3.5 transition-colors hover:border-borde-2">
                    <span className="text-sm leading-relaxed text-sal/85">{p.pregunta}</span>
                    <span
                      className={`mt-0.5 shrink-0 rounded-full border ${acc.border}/40 ${acc.soft} px-2.5 py-0.5 font-mono text-micro ${acc.text}`}
                    >
                      {p.producto}
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
