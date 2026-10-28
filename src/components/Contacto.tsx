import { CONTACTO } from "../data";
import { Reveal, YagLabMark } from "./ui";

export function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-borde py-28 sm:py-36">
      <div className="absolute inset-0 pozas opacity-70" aria-hidden />
      <div className="absolute inset-0 trama-sal opacity-40 [mask-image:radial-gradient(90%_80%_at_50%_100%,black,transparent_75%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <YagLabMark className="mx-auto size-14" />
          <h2 className="mt-8 font-display text-5xl font-bold leading-[1.04] text-sal text-balance sm:text-6xl">
            Una reunión de 30 minutos.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bruma text-pretty">
            Con el área de compras, comercial o calidad de la mina, para mostrar
            los prototipos funcionando y definir un piloto chico, con datos
            reales de la operación.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <a
            href={`mailto:${CONTACTO.email}?subject=Reuni%C3%B3n%20con%20YagLab%20%E2%80%94%20piloto%20en%20mina`}
            className="inline-block rounded-md bg-litio px-8 py-4 font-display text-xl font-semibold text-noche transition-transform duration-200 hover:-translate-y-0.5"
          >
            Escribile a {CONTACTO.nombre.split(" ")[0]}
          </a>
          <div className="mt-8 flex flex-col items-center gap-1.5">
            <p className="font-display text-lg font-semibold text-sal">
              {CONTACTO.nombre} <span className="font-normal text-bruma-2">· {CONTACTO.rol}</span>
            </p>
            <a
              href={`mailto:${CONTACTO.email}`}
              className="font-mono text-sm text-litio underline decoration-litio/40 underline-offset-4 transition-colors hover:decoration-litio"
            >
              {CONTACTO.email}
            </a>
            <a
              href={CONTACTO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-bruma underline decoration-borde-2 underline-offset-4 transition-colors hover:text-sal"
            >
              {CONTACTO.linkedinLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
