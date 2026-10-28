import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Etiqueta } from "./ui";

/*
  El circuito — la animación protagonista.
  Una sección sticky con scroll-scrub: el riel se dibuja de proveedores a
  comprador pasando por Jumin → la mina → JuLit, con paquetes que viajan y
  nodos que se encienden. Nomai entra como nodo agente por una arista
  punteada. Dos layouts: horizontal (md+) y vertical (mobile).
  Con prefers-reduced-motion se renderiza el diagrama completo, estático.
*/

type AccentHex = string;

type NodeDef = {
  id: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  titulo: string;
  sub: string;
  accent: AccentHex;
  activaEn: number; // progreso p en que se enciende
  logo?: string; // /logos/*.svg
  glyph?: "caja" | "mina" | "bateria";
};

type LayoutDef = {
  viewBox: string;
  rail: string;
  grad: { x1: number; y1: number; x2: number; y2: number };
  nomaiEdge: string;
  nodes: NodeDef[];
  pkA: { axis: "x" | "y"; c: number; from: number; to: number; range: [number, number] };
  pkB: { axis: "x" | "y"; c: number; from: number; to: number; range: [number, number] };
  pkC: { axis: "x" | "y"; c: number; from: number; to: number; range: [number, number] };
  svgClass: string;
};

const NEUTRO = "#9AA5B8";

const DESKTOP: LayoutDef = {
  viewBox: "0 0 960 480",
  rail: "M 166 280 H 794",
  grad: { x1: 166, y1: 0, x2: 794, y2: 0 },
  nomaiEdge: "M 480 122 V 244",
  svgClass: "mt-8 w-full",
  nodes: [
    {
      id: "prov", cx: 100, cy: 280, w: 132, h: 64, activaEn: 0.05,
      titulo: "Proveedores", sub: "red verificada", accent: NEUTRO, glyph: "caja",
    },
    {
      id: "jumin", cx: 290, cy: 280, w: 132, h: 64, activaEn: 0.134,
      titulo: "Jumin", sub: "compras con IA", accent: "#F5B301", logo: "/logos/jumin.svg",
    },
    {
      id: "mina", cx: 480, cy: 280, w: 144, h: 72, activaEn: 0.368,
      titulo: "La mina", sub: "producción", accent: "#D08A4E", glyph: "mina",
    },
    {
      id: "julit", cx: 670, cy: 280, w: 132, h: 64, activaEn: 0.618,
      titulo: "JuLit", sub: "lote verificado", accent: "#5BE3D4", logo: "/logos/julit.svg",
    },
    {
      id: "compra", cx: 860, cy: 280, w: 132, h: 64, activaEn: 0.86,
      titulo: "Comprador", sub: "baterías", accent: NEUTRO, glyph: "bateria",
    },
    {
      id: "nomai", cx: 480, cy: 92, w: 150, h: 60, activaEn: 0.9,
      titulo: "Nomai", sub: "agente con custodia", accent: "#D97A50", logo: "/logos/nomai.svg",
    },
  ],
  pkA: { axis: "x", c: 280, from: 166, to: 408, range: [0.08, 0.36] },
  pkB: { axis: "x", c: 280, from: 552, to: 794, range: [0.4, 0.8] },
  pkC: { axis: "y", c: 480, from: 122, to: 244, range: [0.84, 0.96] },
};

const MOBILE: LayoutDef = {
  viewBox: "0 0 400 720",
  rail: "M 120 122 V 578",
  grad: { x1: 0, y1: 122, x2: 0, y2: 578 },
  nomaiEdge: "M 192 350 H 232",
  svgClass: "mx-auto mt-4 h-[54vh] w-auto",
  nodes: [
    {
      id: "prov", cx: 120, cy: 90, w: 132, h: 64, activaEn: 0.05,
      titulo: "Proveedores", sub: "red verificada", accent: NEUTRO, glyph: "caja",
    },
    {
      id: "jumin", cx: 120, cy: 220, w: 132, h: 64, activaEn: 0.176,
      titulo: "Jumin", sub: "compras con IA", accent: "#F5B301", logo: "/logos/jumin.svg",
    },
    {
      id: "mina", cx: 120, cy: 350, w: 144, h: 72, activaEn: 0.404,
      titulo: "La mina", sub: "producción", accent: "#D08A4E", glyph: "mina",
    },
    {
      id: "julit", cx: 120, cy: 480, w: 132, h: 64, activaEn: 0.632,
      titulo: "JuLit", sub: "lote verificado", accent: "#5BE3D4", logo: "/logos/julit.svg",
    },
    {
      id: "compra", cx: 120, cy: 610, w: 132, h: 64, activaEn: 0.86,
      titulo: "Comprador", sub: "baterías", accent: NEUTRO, glyph: "bateria",
    },
    {
      id: "nomai", cx: 292, cy: 350, w: 120, h: 60, activaEn: 0.9,
      titulo: "Nomai", sub: "agente", accent: "#D97A50", logo: "/logos/nomai.svg",
    },
  ],
  pkA: { axis: "y", c: 120, from: 122, to: 318, range: [0.08, 0.36] },
  pkB: { axis: "y", c: 120, from: 382, to: 578, range: [0.4, 0.8] },
  pkC: { axis: "x", c: 350, from: 232, to: 192, range: [0.84, 0.96] },
};

const CAPTIONS = [
  "Tres prototipos, un solo circuito.",
  "Jumin vigila el stock: cuando un insumo baja del punto de reorden, recomienda a qué proveedor verificado comprarle — y una persona aprueba.",
  "En el medio, la mina: produce cuando los insumos llegan a tiempo.",
  "JuLit le da a cada lote un pasaporte digital verificable y protege el pago hasta la entrega.",
  "Y Nomai demuestra que el equipo ya construye agentes que mueven dinero con custodia y controles.",
];

const CAP_WINDOWS: [number, number, number, number][] = [
  [0, 0.02, 0.08, 0.11],
  [0.11, 0.14, 0.35, 0.38],
  [0.38, 0.41, 0.56, 0.59],
  [0.59, 0.62, 0.83, 0.86],
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const fn = () => setMatches(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, [query]);
  return matches;
}

function Glyph({ kind, color }: { kind: "caja" | "mina" | "bateria"; color: string }) {
  const common = {
    stroke: color,
    strokeWidth: 1.8,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "caja")
    return (
      <g {...common}>
        <path d="M0-9 9-4.5v9L0 9l-9-4.5v-9z" />
        <path d="M-9-4.5 0 0l9-4.5M0 0v9" opacity=".55" />
      </g>
    );
  if (kind === "mina")
    return (
      <g {...common}>
        <path d="M-11 9 0-10 11 9z" />
        <path d="M-6.5 2h13M-3-3.5h6" opacity=".55" />
      </g>
    );
  return (
    <g {...common}>
      <rect x="-11" y="-6" width="19" height="12" rx="2.5" />
      <path d="M11-2v4" />
      <path d="M-7.5-2.5h7v5h-7z" fill={color} stroke="none" opacity=".8" />
    </g>
  );
}

function Nodo({
  def,
  prog,
}: {
  def: NodeDef;
  prog: MotionValue<number>;
}) {
  const on = useTransform(prog, [def.activaEn - 0.02, def.activaEn + 0.03], [0, 1], {
    clamp: true,
  });
  const glow = useTransform(on, (v) => v * 0.13);
  const contenido = useTransform(prog, [def.activaEn - 0.05, def.activaEn], [0.4, 1], {
    clamp: true,
  });
  const x = def.cx - def.w / 2;
  const y = def.cy - def.h / 2;
  return (
    <g>
      <motion.circle
        cx={def.cx}
        cy={def.cy}
        r={Math.max(def.w, def.h) * 0.62}
        fill={def.accent}
        style={{ opacity: glow }}
      />
      <rect
        x={x}
        y={y}
        width={def.w}
        height={def.h}
        rx={12}
        fill="#10151E"
        stroke="#2E3A50"
        strokeWidth={1.2}
      />
      <motion.rect
        x={x}
        y={y}
        width={def.w}
        height={def.h}
        rx={12}
        fill="none"
        stroke={def.accent}
        strokeWidth={1.4}
        style={{ opacity: on }}
      />
      <motion.g style={{ opacity: contenido }}>
        {def.logo ? (
          <image
            href={def.logo}
            x={x + 14}
            y={def.cy - 12}
            width={24}
            height={24}
          />
        ) : (
          <g transform={`translate(${x + 26} ${def.cy})`}>
            <Glyph kind={def.glyph!} color={def.accent} />
          </g>
        )}
        <text
          x={x + (def.logo ? 48 : 50)}
          y={def.cy - 2}
          fontFamily="Saira Semi Condensed, Arial Narrow, sans-serif"
          fontWeight={600}
          fontSize={16}
          fill="#EEEBE0"
        >
          {def.titulo}
        </text>
        <text
          x={x + (def.logo ? 48 : 50)}
          y={def.cy + 15}
          fontFamily="JetBrains Mono, monospace"
          fontSize={9}
          fill="#9AA5B8"
        >
          {def.sub}
        </text>
      </motion.g>
    </g>
  );
}

function Paquete({
  def,
  prog,
  color,
}: {
  def: LayoutDef["pkA"];
  prog: MotionValue<number>;
  color: string;
}) {
  const pos = useTransform(prog, def.range, [def.from, def.to], { clamp: true });
  const [a, b] = def.range;
  const op = useTransform(prog, [a - 0.005, a + 0.01, b - 0.02, b], [0, 1, 1, 0], {
    clamp: true,
  });
  const inner =
    def.axis === "x" ? (
      <motion.g style={{ x: pos, opacity: op }}>
        <circle cx={0} cy={def.c} r={8} fill={color} opacity={0.18} />
        <circle cx={0} cy={def.c} r={3.6} fill={color} />
      </motion.g>
    ) : (
      <motion.g style={{ y: pos, opacity: op }}>
        <circle cx={def.c} cy={0} r={8} fill={color} opacity={0.18} />
        <circle cx={def.c} cy={0} r={3.6} fill={color} />
      </motion.g>
    );
  return inner;
}

function Diagrama({ prog, layout }: { prog: MotionValue<number>; layout: LayoutDef }) {
  const railDraw = useTransform(prog, [0.06, 0.86], [0, 1], { clamp: true });
  const nomaiDraw = useTransform(prog, [0.84, 0.92], [0, 1], { clamp: true });
  const capOps = [
    useTransform(prog, CAP_WINDOWS[0], [0, 1, 1, 0], { clamp: true }),
    useTransform(prog, CAP_WINDOWS[1], [0, 1, 1, 0], { clamp: true }),
    useTransform(prog, CAP_WINDOWS[2], [0, 1, 1, 0], { clamp: true }),
    useTransform(prog, CAP_WINDOWS[3], [0, 1, 1, 0], { clamp: true }),
    useTransform(prog, [0.86, 0.9], [0, 1], { clamp: true }),
  ];

  return (
    <>
      <svg
        viewBox={layout.viewBox}
        className={layout.svgClass}
        role="img"
        aria-label="Circuito: los insumos entran a la mina a través de Jumin y los lotes salen al comprador a través de JuLit, con Nomai como agente."
      >
        <defs>
          <linearGradient
            id="railGrad"
            gradientUnits="userSpaceOnUse"
            x1={layout.grad.x1}
            y1={layout.grad.y1}
            x2={layout.grad.x2}
            y2={layout.grad.y2}
          >
            <stop offset="0" stopColor="#F5B301" />
            <stop offset="0.42" stopColor="#5BE3D4" />
            <stop offset="1" stopColor="#5BE3D4" />
          </linearGradient>
        </defs>

        {/* riel base + cinta transportadora punteada */}
        <path d={layout.rail} stroke="#2E3A50" strokeWidth={1.4} fill="none" />
        <path
          d={layout.rail}
          stroke="#4a5871"
          strokeWidth={1}
          strokeDasharray="2.5 10"
          fill="none"
          className="animate-flow"
          opacity={0.6}
        />
        {/* riel que se dibuja con el scroll */}
        <motion.path
          d={layout.rail}
          stroke="url(#railGrad)"
          strokeWidth={2.6}
          strokeLinecap="round"
          fill="none"
          style={{ pathLength: railDraw }}
        />
        {/* arista del agente */}
        <path d={layout.nomaiEdge} stroke="#2E3A50" strokeWidth={1.2} strokeDasharray="3 6" fill="none" />
        <motion.path
          d={layout.nomaiEdge}
          stroke="#D97A50"
          strokeWidth={1.8}
          strokeDasharray="3 6"
          fill="none"
          style={{ pathLength: nomaiDraw }}
        />

        <Paquete def={layout.pkA} prog={prog} color="#F5B301" />
        <Paquete def={layout.pkB} prog={prog} color="#5BE3D4" />
        <Paquete def={layout.pkC} prog={prog} color="#D97A50" />

        {layout.nodes.map((n) => (
          <Nodo key={n.id} def={n} prog={prog} />
        ))}
      </svg>

      <div className="relative mt-2 h-24 sm:h-20">
        {CAPTIONS.map((c, i) => (
          <motion.p
            key={i}
            style={{ opacity: capOps[i] }}
            className="absolute inset-x-0 top-0 mx-auto max-w-2xl text-center text-base leading-relaxed text-bruma text-pretty sm:text-lg"
          >
            {c}
          </motion.p>
        ))}
      </div>
    </>
  );
}

function useIsDesktop() {
  return useMediaQuery("(min-width: 768px)");
}

export function Circuito() {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const layout = desktop ? DESKTOP : MOBILE;

  if (reduce) return <CircuitoEstatico layout={layout} />;
  return <CircuitoScroll layout={layout} />;
}

function Cabecera() {
  return (
    <div className="max-w-3xl">
      <Etiqueta>el circuito</Etiqueta>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-sal sm:text-4xl text-balance">
        Lo que la mina compra, lo que la mina vende.
      </h2>
    </div>
  );
}

function CircuitoScroll({ layout }: { layout: LayoutDef }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={ref} className="relative h-[340vh]" id="circuito" aria-label="Circuito de la mina">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Cabecera />
          <Diagrama prog={scrollYProgress} layout={layout} />
        </div>
      </div>
    </section>
  );
}

function CircuitoEstatico({ layout }: { layout: LayoutDef }) {
  const lleno = useMotionValue(1);
  return (
    <section className="border-y border-borde bg-salar/40 py-20" id="circuito">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Cabecera />
        <Diagrama prog={lleno} layout={layout} />
      </div>
    </section>
  );
}
