import { motion, useReducedMotion } from "motion/react";
import { JuminMark, JuLitMark, NomaiMark, YagLabMark } from "./ui";

/* Estrellas fijas de la Puna: posiciones deterministas, parpadeo suave. */
const ESTRELLAS = [
  [8, 12], [16, 30], [24, 9], [33, 22], [42, 14], [51, 28], [60, 10],
  [68, 24], [76, 8], [84, 20], [91, 13], [97, 26], [13, 44], [88, 40],
] as const;

function Cielo() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 trama-sal opacity-60 [mask-image:radial-gradient(120%_90%_at_50%_0%,black_30%,transparent_78%)]" />
      <div className="absolute inset-0 pozas" />
      {ESTRELLAS.map(([x, y], i) => (
        <span
          key={i}
          className="absolute size-[3px] rounded-full bg-sal animate-pulse-soft"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${(i * 0.47) % 3}s`,
            opacity: 0.5,
          }}
        />
      ))}
      {/* horizonte del salar */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-noche via-noche/70 to-transparent" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const up = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden" id="inicio">
      <Cielo />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <motion.p
          {...up(0)}
          className="flex items-center gap-3 font-mono text-micro text-bruma"
        >
          <svg viewBox="0 0 26 22" className="size-5" aria-hidden>
            <path
              d="M13 2.5 23.5 19.5h-21z"
              fill="none"
              stroke="#5BE3D4"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="13" cy="2.5" r="1.8" fill="#5BE3D4" />
            <circle cx="2.5" cy="19.5" r="1.8" fill="#F5B301" />
            <circle cx="23.5" cy="19.5" r="1.8" fill="#D97A50" />
          </svg>
          San Salvador de Jujuy · Argentina
        </motion.p>

        <motion.h1
          {...up(0.12)}
          className="mt-6 font-display text-[2.9rem] font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl"
        >
          Software para la minería,
          <br />
          <span className="bg-gradient-to-r from-litio via-litio to-salmuera bg-clip-text text-transparent">
            hecho en el Triángulo del Litio.
          </span>
        </motion.h1>

        <motion.p
          {...up(0.26)}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-bruma text-pretty sm:text-xl"
        >
          Somos un equipo de desarrolladores de Jujuy. Construimos herramientas
          con inteligencia artificial y registros digitales verificables para dos
          momentos clave de una mina: lo que compra para producir y lo que vende.
        </motion.p>

        <motion.div {...up(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#jumin"
            className="rounded-md bg-litio px-6 py-3 font-display text-lg font-semibold text-noche transition-transform duration-200 hover:-translate-y-0.5"
          >
            Conocer los proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-md border border-borde-2 px-6 py-3 font-display text-lg font-semibold text-sal transition-colors duration-200 hover:border-litio/60 hover:text-litio"
          >
            Pedir una reunión
          </a>
        </motion.div>

        <motion.div
          {...up(0.55)}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-borde pt-6"
        >
          <span className="font-mono text-micro text-bruma-2">
            tres prototipos funcionando
          </span>
          <span className="flex items-center gap-4">
            <JuminMark className="size-7 opacity-80" />
            <JuLitMark className="size-7 opacity-80" />
            <NomaiMark className="size-7 opacity-80" />
          </span>
          <span className="hidden items-center gap-2 font-mono text-micro text-bruma-2 sm:flex">
            <YagLabMark className="size-5 opacity-70" /> YagLab
          </span>
        </motion.div>
      </div>

      {/* indicador de scroll */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        {...up(0.9)}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-micro text-bruma-2">deslizá</span>
          <motion.span
            className="block h-8 w-px bg-gradient-to-b from-litio to-transparent"
            animate={reduce ? undefined : { scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </header>
  );
}
