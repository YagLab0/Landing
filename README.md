# landing-yaglab

Landing de **YagLab** — equipo de desarrollo de San Salvador de Jujuy que
construye software para la minería del Triángulo del Litio. Página única en
español (voseo) que presenta tres proyectos:

- **Jumin** — consultor de compras con IA (prototipo funcional, Hackathon INNOA).
- **JuLit** — pasaporte digital del lote de litio + pago protegido en USDC sobre
  Solana (red de prueba). Demo: https://ju-lit.vercel.app/
- **Nomai** — agente que busca, reserva y paga alojamiento con x402 sobre Celo
  (en desarrollo, turismo). Demo: https://nomaiapp.vercel.app/

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`, tema en `src/index.css` con `@theme`)
- Motion (`motion/react`) para animaciones
- pnpm 12

## Comandos

```bash
pnpm install    # instalar dependencias
pnpm dev        # dev server (http://localhost:5173)
pnpm build      # typecheck (tsc --noEmit) + build a dist/
pnpm preview    # servir dist/ localmente
```

`pnpm-workspace.yaml` habilita el build script de `esbuild` (`allowBuilds`),
requerido por pnpm 12.

## Deploy

Build estático en `dist/` — en Vercel: framework preset **Vite**, sin
configuración adicional.

## Diseño

Paleta "Puna nocturna" (ver tokens en `src/index.css`): noche `#0A0D13`, sal
`#EEEBE0`, litio `#5BE3D4`, cobre `#D08A4E`; acentos por proyecto — señal
`#F5B301` (Jumin), litio (JuLit), terracota `#D97A50` (Nomai). Tipografía:
Saira Semi Condensed (display), Saira (cuerpo), JetBrains Mono (datos).

La animación central (`src/components/Circuito.tsx`) es una sección sticky con
scroll-scrub: el riel se dibuja de proveedores a comprador pasando por
Jumin → la mina → JuLit, con Nomai como nodo agente. Layout horizontal en
desktop y vertical en mobile. Con `prefers-reduced-motion` el diagrama se
renderiza completo y estático.

Los logos de Jumin y Nomai se tomaron de los repositorios de cada proyecto;
el de JuLit es una marca SVG propia (`public/logos/julit.svg`).
