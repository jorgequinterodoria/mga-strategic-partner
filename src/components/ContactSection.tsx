import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(7, "Teléfono inválido").max(20),
  empresa: z.string().trim().max(100).optional(),
  mensaje: z.string().trim().min(1, "El mensaje es requerido").max(1000),
});

type FormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
    setErrors({});
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-muted border ${errors[field] ? "border-destructive" : "border-border"} rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors text-sm`;

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Hablemos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ fontFamily: 'Montserrat' }}>
            Contáctanos
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl shadow-lg border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input name="nombre" placeholder="Nombre *" value={form.nombre} onChange={handleChange} className={inputClass("nombre")} />
              {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
            </div>
            <div>
              <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} className={inputClass("email")} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input name="telefono" placeholder="Teléfono *" value={form.telefono} onChange={handleChange} className={inputClass("telefono")} />
              {errors.telefono && <p className="text-destructive text-xs mt-1">{errors.telefono}</p>}
            </div>
            <div>
              <input name="empresa" placeholder="Empresa (opcional)" value={form.empresa} onChange={handleChange} className={inputClass("empresa")} />
            </div>
          </div>
          <div>
            <textarea name="mensaje" placeholder="Mensaje *" rows={4} value={form.mensaje} onChange={handleChange} className={inputClass("mensaje")} />
            {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>}
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md shadow-primary/20">
            <Send size={18} /> Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
