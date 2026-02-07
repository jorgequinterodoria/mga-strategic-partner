import { useState } from "react";
import { Menu, X } from "lucide-react";
import mgaLogo from "@/assets/mga-logo.jpg";

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
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={mgaLogo} alt="MGA Consultor Empresarial" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-primary-foreground font-bold text-lg hidden sm:block" style={{ fontFamily: 'Montserrat' }}>
            MGA <span className="font-normal text-primary">Consultor</span>
          </span>
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

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
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
