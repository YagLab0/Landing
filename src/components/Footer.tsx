import { CONTACTO, JULIT, NOMAI } from "../data";
import { YagLabMark } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-borde bg-salar/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <YagLabMark className="size-8" />
            <span className="font-display text-xl font-bold">YagLab</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-bruma">
            Software para la minería, hecho en el Triángulo del Litio.
            San Salvador de Jujuy, Argentina.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-micro text-bruma-2">proyectos</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#jumin" className="text-bruma transition-colors hover:text-sal">Jumin</a></li>
              <li><a href="#julit" className="text-bruma transition-colors hover:text-sal">JuLit</a></li>
              <li><a href="#nomai" className="text-bruma transition-colors hover:text-sal">Nomai</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-micro text-bruma-2">demos</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={JULIT.demo} target="_blank" rel="noreferrer" className="text-bruma transition-colors hover:text-sal">
                  ju-lit.vercel.app
                </a>
              </li>
              <li>
                <a href={NOMAI.demo} target="_blank" rel="noreferrer" className="text-bruma transition-colors hover:text-sal">
                  nomaiapp.vercel.app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-micro text-bruma-2">contacto</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACTO.email}`} className="text-bruma transition-colors hover:text-sal">
                  {CONTACTO.email}
                </a>
              </li>
              <li>
                <a href={CONTACTO.linkedin} target="_blank" rel="noreferrer" className="text-bruma transition-colors hover:text-sal">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-borde px-5 pt-6 sm:px-8">
        <p className="font-mono text-micro text-bruma-2">
          YagLab · Octubre 2026 · JuLit opera en red de prueba; Nomai está en desarrollo.
        </p>
      </div>
    </footer>
  );
}
