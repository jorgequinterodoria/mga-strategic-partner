/**
 * Fuente única de verdad del número de WhatsApp de MGA.
 *
 * El número aparece en tres lugares: botón flotante, pie de página y
 * formulario de contacto. Se centraliza aquí para que un cambio de número
 * se realice en un solo archivo.
 */

/** Número en formato internacional sin "+" ni espacios (E.164): 57 (Colombia) + número. */
export const WHATSAPP_NUMBER = "573007923166";

/** Número tal como se muestra al usuario (pie de página y formulario). */
export const WHATSAPP_DISPLAY = "+57 300 792 3166";

/** Mensaje por defecto del botón flotante. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría recibir más información sobre sus servicios de consultoría.";

/** Construye la URL de WhatsApp con el texto prellenado. */
export const buildWhatsAppUrl = (text: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export interface ContactoDatos {
  nombre: string;
  email: string;
  telefono: string;
  empresa?: string;
  mensaje: string;
}

/**
 * Convierte los campos del formulario en un mensaje de texto, una línea por
 * campo. `empresa` es opcional: si está vacía se omite del mensaje.
 */
export const buildContactWhatsAppMessage = (datos: ContactoDatos): string => {
  const lineas = [
    "Nuevo contacto desde mgaconsultor.com.co",
    `Nombre: ${datos.nombre}`,
    ...(datos.empresa?.trim() ? [`Empresa: ${datos.empresa.trim()}`] : []),
    `Teléfono: ${datos.telefono}`,
    `Email: ${datos.email}`,
    "",
    `Mensaje: ${datos.mensaje}`,
  ];
  return lineas.join("\n");
};
