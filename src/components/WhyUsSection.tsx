import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Sistemas conectados", desc: "Soluciones integradas y siempre actualizadas para tu empresa." },
  { title: "Información confiable", desc: "Datos precisos y verificados al alcance de un clic." },
  { title: "Menos reprocesos", desc: "Optimización de procesos para mayor control y eficiencia." },
  { title: "Experiencia comprobada", desc: "Años de trayectoria en consultoría empresarial." },
];

const WhyUsSection = () => (
  <section id="nosotros" className="py-24 bg-secondary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Nuestra propuesta</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          ¿Por qué elegirnos?
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 items-start bg-white/5 rounded-xl p-6 border border-white/10">
            <CheckCircle2 size={32} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">{r.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
