import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { FlowStep } from "../data";

export type Accent = "litio" | "senal" | "terra" | "cobre";

export const ACCENT: Record<
  Accent,
  { text: string; bg: string; border: string; soft: string; hex: string }
> = {
  litio: {
    text: "text-litio",
    bg: "bg-litio",
    border: "border-litio",
    soft: "bg-litio/10",
    hex: "#5BE3D4",
  },
  senal: {
    text: "text-senal",
    bg: "bg-senal",
    border: "border-senal",
    soft: "bg-senal/10",
    hex: "#F5B301",
  },
  terra: {
    text: "text-terra",
    bg: "bg-terra",
    border: "border-terra",
    soft: "bg-terra/10",
    hex: "#D97A50",
  },
  cobre: {
    text: "text-cobre",
    bg: "bg-cobre",
    border: "border-cobre",
    soft: "bg-cobre/10",
    hex: "#D08A4E",
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = 26,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Etiqueta de sección: índice mono + nombre de la etapa. */
export function Etiqueta({
  indice,
  children,
  accent = "litio",
}: {
  indice?: string;
  children: ReactNode;
  accent?: Accent;
}) {
  return (
    <p className="font-mono text-micro text-bruma flex items-baseline gap-2.5">
      {indice && <span className={ACCENT[accent].text}>{indice}</span>}
      <span className="h-px w-6 self-center bg-borde-2" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

export function SectionHead({
  indice,
  kicker,
  titulo,
  lead,
  accent = "litio",
  className,
}: {
  indice?: string;
  kicker: string;
  titulo: ReactNode;
  lead?: ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Etiqueta indice={indice} accent={accent}>
        {kicker}
      </Etiqueta>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-[1.05] text-balance text-sal">
        {titulo}
      </h2>
      {lead && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bruma text-pretty">
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function EstadoBadge({
  children,
  accent = "litio",
}: {
  children: ReactNode;
  accent?: Accent;
}) {
  const a = ACCENT[accent];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${a.border}/40 ${a.soft} px-3 py-1 font-mono text-micro ${a.text}`}
    >
      <span className={`size-1.5 rounded-full ${a.bg} animate-pulse-soft`} />
      {children}
    </span>
  );
}

/** Tira de pasos animada: se ilumina en cascada al entrar en vista. */
export function FlowSteps({
  pasos,
  accent = "litio",
}: {
  pasos: FlowStep[];
  accent?: Accent;
}) {
  const a = ACCENT[accent];
  const reduce = useReducedMotion();
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {pasos.map((paso, i) => (
        <motion.li
          key={paso.nombre}
          className="relative overflow-hidden rounded-lg border border-borde bg-salina p-4"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            aria-hidden
            className={`absolute inset-x-0 top-0 h-0.5 ${a.bg}`}
            initial={reduce ? { opacity: 1 } : { scaleX: 0, opacity: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.14 }}
            style={{ transformOrigin: "left" }}
          />
          <div className="flex items-baseline gap-2.5">
            <span className={`font-mono text-micro ${a.text}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-display text-xl font-semibold text-sal">
              {paso.nombre}
            </h4>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-bruma">{paso.detalle}</p>
        </motion.li>
      ))}
    </ol>
  );
}

/** Marca YagLab: triángulo del litio — tres nodos, tres proyectos. */
export function YagLabMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="7" fill="#151C28" />
      <path
        d="M16 8.5 24.5 22h-17z"
        stroke="#5BE3D4"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8.5" r="2.4" fill="#5BE3D4" />
      <circle cx="7.5" cy="22" r="2.4" fill="#F5B301" />
      <circle cx="24.5" cy="22" r="2.4" fill="#D97A50" />
    </svg>
  );
}

/** Marca JuLit: prisma/cristal de litio con sello de verificación. */
export function JuLitMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="7" fill="#101B24" />
      <g
        stroke="#5BE3D4"
        strokeWidth="1.7"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M16 6.5 23.5 11v10L16 25.5 8.5 21V11z" />
        <path d="M8.5 11 16 15.5 23.5 11M16 15.5v10" opacity=".55" />
      </g>
      <circle cx="22.6" cy="22.8" r="4.6" fill="#101B24" stroke="#5BE3D4" strokeWidth="1.5" />
      <path
        d="m20.6 22.8 1.5 1.5 2.6-2.9"
        stroke="#5BE3D4"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NomaiMark({ className = "size-8" }: { className?: string }) {
  return (
    <img src="/logos/nomai.svg" alt="" className={`${className} rounded-[24%]`} />
  );
}

export function JuminMark({ className = "size-8" }: { className?: string }) {
  return (
    <img src="/logos/jumin.svg" alt="" className={`${className} rounded-[22%]`} />
  );
}
