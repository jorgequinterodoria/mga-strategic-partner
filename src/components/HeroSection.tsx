import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary blur-[100px]" />
    </div>

    <div className="container mx-auto px-4 text-center relative z-10 pt-20">
      <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
        Consultoría & Capacitación
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-6" style={{ fontFamily: 'Montserrat' }}>
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
        <a href="#servicios" className="text-primary-foreground/40 hover:text-primary transition-colors">
          <ArrowDown size={28} className="mx-auto" />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
