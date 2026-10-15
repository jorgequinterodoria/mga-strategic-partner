import { ArrowDown } from "lucide-react";
// Imagen del hero en WebP (q80): 1717 KB → 75 KB sin pérdida visible.
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-secondary/80" />

    <div className="container mx-auto px-4 text-center relative z-10 pt-20">
      <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide backdrop-blur-sm border border-primary/20">
        Consultoría & Capacitación
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
        SOMOS TU ALIADO
        <br />
        <span className="text-primary">ESTRATÉGICO</span>
      </h1>

      <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
        Prestamos servicio de consultoría y capacitaciones en gestión empresarial, calidad, seguridad, medio ambiente y mucho más.
      </p>

      <a
        href="#contacto"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
      >
        Solicita una Consulta
      </a>

      <div className="mt-16 animate-bounce">
        <a 
          href="#servicios" 
          className="text-primary-foreground/40 hover:text-primary transition-colors p-4 block"
          aria-label="Ir a sección de servicios"
        >
          <ArrowDown size={28} className="mx-auto" />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
