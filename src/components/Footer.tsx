import { Mail, Phone, MapPin } from "lucide-react";
import mgaLogo from "@/assets/mga-logo.jpg";

const Footer = () => (
  <footer className="bg-secondary text-primary-foreground py-12 border-t border-white/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={mgaLogo} alt="MGA" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-bold text-lg" style={{ fontFamily: 'Montserrat' }}>
            MGA <span className="text-primary font-normal">Consultor Empresarial</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 text-sm text-primary-foreground/60">
          <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> info@mgaconsultor.com</span>
          <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +57 300 000 0000</span>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Colombia</span>
        </div>
      </div>

      <div className="text-center text-primary-foreground/40 text-xs mt-8 pt-6 border-t border-white/5">
        © {new Date().getFullYear()} MGA Consultor Empresarial. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
