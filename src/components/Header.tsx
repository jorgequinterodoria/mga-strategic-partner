import { useState } from "react";
import { Menu, X } from "lucide-react";
// Recurso oficial de marca: forma compuesta (isologo MGA + identificador CONSULTOR EMPRESARIAL).
// Derivado de "Logo MGA.svg" recortando únicamente el lienzo vacío del export.
import mgaFormaCompuesta from "@/assets/mga-forma-compuesta.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between gap-4 py-3 px-4">
        {/* H-04 / H-05: composición oficial completa (no reconstruida con texto independiente).
            Ancho mínimo digital: 120 px para la forma compuesta (Manual V002, numeral 5). */}
        <a href="#inicio" className="flex items-center shrink-0" aria-label="MGA Consultor Empresarial - Inicio">
          <img
            src={mgaFormaCompuesta}
            alt="MGA Consultor Empresarial"
            width={553}
            height={235}
            className="h-auto w-[150px] sm:w-[180px]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Contáctanos
          </a>
        </nav>

        <button 
          className="md:hidden text-primary-foreground p-3 -mr-3" 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-secondary border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="block mt-3 bg-primary text-primary-foreground text-center px-5 py-2 rounded-lg text-sm font-semibold">
            Contáctanos
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
