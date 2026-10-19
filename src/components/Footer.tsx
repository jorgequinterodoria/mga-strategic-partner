import { Mail, Phone, MapPin } from "lucide-react";
// Recurso oficial de marca: forma compuesta (isologo MGA + identificador CONSULTOR EMPRESARIAL).
// Derivado de "Logo MGA.svg" recortando únicamente el lienzo vacío del export.
import mgaFormaCompuesta from "@/assets/mga-forma-compuesta.svg";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const Footer = () => (
  <footer className="bg-background text-foreground pt-12 pb-24 md:pb-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* H-04 / H-05: composición oficial completa, mínimo digital 120 px (Manual, numeral 5). */}
        <div className="flex items-center">
          <img
            src={mgaFormaCompuesta}
            alt="MGA Consultor Empresarial"
            width={553}
            height={235}
            className="h-auto w-[200px] sm:w-[240px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> gerencia@mgaconsultor.com.co</span>
          <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> {WHATSAPP_DISPLAY}</span>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Colombia</span>
        </div>
      </div>

      <div className="text-center text-muted-foreground text-xs mt-8 pt-6 border-t border-border">
        © {new Date().getFullYear()} MGA Consultor Empresarial. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
