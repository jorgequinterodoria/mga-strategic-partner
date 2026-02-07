import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "573300792316"; 
  const message = "Hola, me gustaría recibir más información sobre sus servicios de consultoría.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="sr-only">WhatsApp</span>
      
      {/* Pulse effect ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;
