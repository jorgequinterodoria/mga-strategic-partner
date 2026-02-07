import {
  Briefcase, Users, Heart, Award, Leaf, Equal,
  UtensilsCrossed, Car, ShieldCheck, Brain, FolderKanban,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Gestión Empresarial", desc: "Estrategias para el crecimiento y la competitividad." },
  { icon: Users, title: "Gestión Humana", desc: "Desarrollo del talento y clima organizacional." },
  { icon: Heart, title: "Responsabilidad Social", desc: "RSE alineada a estándares internacionales." },
  { icon: Award, title: "Gestión de Calidad", desc: "Sistemas ISO y mejora continua." },
  { icon: Leaf, title: "Gestión Ambiental", desc: "Cumplimiento ambiental y sostenibilidad." },
  { icon: Equal, title: "Igualdad de Género", desc: "Políticas de equidad e inclusión." },
  { icon: UtensilsCrossed, title: "Seguridad Alimentaria", desc: "HACCP, BPM y normativas sanitarias." },
  { icon: Car, title: "Seguridad Vial", desc: "PESV y prevención de accidentes." },
  { icon: ShieldCheck, title: "Seguridad y Salud en el Trabajo", desc: "SG-SST y bienestar laboral." },
  { icon: Brain, title: "Riesgo Psicosocial", desc: "Identificación y prevención de riesgos." },
  { icon: FolderKanban, title: "Gerencia de Proyectos", desc: "Planificación, ejecución y control." },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Lo que hacemos</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ fontFamily: 'Montserrat' }}>
          Nuestros Servicios
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2" style={{ fontFamily: 'Montserrat' }}>{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
