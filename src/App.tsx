import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Circuito } from "./components/Circuito";
import { ProyectoJumin } from "./components/ProyectoJumin";
import { ProyectoJulit } from "./components/ProyectoJulit";
import { ProyectoNomai } from "./components/ProyectoNomai";
import { Capacidades } from "./components/Capacidades";
import { Pilotos } from "./components/Pilotos";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#jumin"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-litio focus:px-4 focus:py-2 focus:text-noche"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Circuito />
        <ProyectoJumin />
        <ProyectoJulit />
        <ProyectoNomai />
        <Capacidades />
        <Pilotos />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
