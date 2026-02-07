import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Gerente General",
    company: "Industrias del Valle",
    text: "MGA transformó nuestra gestión empresarial. Implementamos un sistema de calidad que nos permitió certificarnos en tiempo récord.",
  },
  {
    name: "Laura Gómez",
    role: "Directora de RRHH",
    company: "Grupo Soluciones",
    text: "La consultoría en gestión humana y riesgo psicosocial fue excepcional. Nuestro clima laboral mejoró notablemente.",
  },
  {
    name: "Andrés Restrepo",
    role: "CEO",
    company: "AgroExport S.A.S",
    text: "Gracias a MGA cumplimos con la normativa de seguridad alimentaria y logramos acceder a nuevos mercados internacionales.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonios</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ fontFamily: 'Montserrat' }}>
          Lo que dicen nuestros clientes
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 shadow-sm border border-border relative group hover:shadow-xl transition-shadow duration-300">
            <Quote size={36} className="text-primary/15 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-bold text-foreground text-sm" style={{ fontFamily: 'Montserrat' }}>{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role} · {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
