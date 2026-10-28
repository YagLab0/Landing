import { useEffect, useState } from "react";
import { YagLabMark } from "./ui";

const LINKS = [
  { href: "#jumin", label: "Jumin" },
  { href: "#julit", label: "JuLit" },
  { href: "#nomai", label: "Nomai" },
  { href: "#pilotos", label: "Pilotos" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-borde bg-noche/85 backdrop-blur-md" : ""
      }`}
      aria-label="Principal"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <YagLabMark className="size-8" />
          <span className="font-display text-xl font-bold tracking-tight">YagLab</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-bruma transition-colors hover:text-sal"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="rounded-md border border-litio/50 px-4 py-1.5 font-display text-base font-semibold text-litio transition-colors hover:bg-litio hover:text-noche"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
