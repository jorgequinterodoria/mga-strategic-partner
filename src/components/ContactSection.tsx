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
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Contáctanos
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl shadow-lg border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nombre" className="sr-only">Nombre</label>
              <input 
                id="nombre"
                name="nombre" 
                placeholder="Nombre *" 
                value={form.nombre} 
                onChange={handleChange} 
                className={inputClass("nombre")} 
                aria-invalid={!!errors.nombre}
                aria-describedby={errors.nombre ? "nombre-error" : undefined}
              />
              {errors.nombre && <p id="nombre-error" className="text-destructive text-xs mt-1" role="alert">{errors.nombre}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email"
                name="email" 
                type="email" 
                placeholder="Email *" 
                value={form.email} 
                onChange={handleChange} 
                className={inputClass("email")} 
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-destructive text-xs mt-1" role="alert">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="telefono" className="sr-only">Teléfono</label>
              <input 
                id="telefono"
                name="telefono" 
                placeholder="Teléfono *" 
                value={form.telefono} 
                onChange={handleChange} 
                className={inputClass("telefono")} 
                aria-invalid={!!errors.telefono}
                aria-describedby={errors.telefono ? "telefono-error" : undefined}
              />
              {errors.telefono && <p id="telefono-error" className="text-destructive text-xs mt-1" role="alert">{errors.telefono}</p>}
            </div>
            <div>
              <label htmlFor="empresa" className="sr-only">Empresa</label>
              <input 
                id="empresa"
                name="empresa" 
                placeholder="Empresa (opcional)" 
                value={form.empresa} 
                onChange={handleChange} 
                className={inputClass("empresa")} 
              />
            </div>
          </div>
          <div>
            <label htmlFor="mensaje" className="sr-only">Mensaje</label>
            <textarea 
              id="mensaje"
              name="mensaje" 
              placeholder="Mensaje *" 
              rows={4} 
              value={form.mensaje} 
              onChange={handleChange} 
              className={inputClass("mensaje")} 
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
            />
            {errors.mensaje && <p id="mensaje-error" className="text-destructive text-xs mt-1" role="alert">{errors.mensaje}</p>}
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
