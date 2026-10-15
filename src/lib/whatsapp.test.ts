import { describe, it, expect } from "vitest";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
  buildContactWhatsAppMessage,
} from "./whatsapp";

describe("buildWhatsAppUrl", () => {
  it("apunta al número oficial en formato wa.me", () => {
    const url = buildWhatsAppUrl("hola");
    expect(url.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`)).toBe(true);
    expect(WHATSAPP_NUMBER).toBe("573007923166");
    expect(WHATSAPP_DISPLAY).toBe("+57 300 792 3166");
  });

  it("codifica acentos, ampersands, signos y emojis", () => {
    const url = buildWhatsAppUrl("¿Hola? & ¿Cómo estás? 🇨🇴 #calidad");
    expect(url).toContain(encodeURIComponent("¿Hola? & ¿Cómo estás? 🇨🇴 #calidad"));
    expect(url).not.toContain(" ");
    expect(url).not.toContain("& ¿");
  });
});

describe("buildContactWhatsAppMessage", () => {
  const datos = {
    nombre: "Ana Pérez",
    email: "ana@acme.com",
    telefono: "300 123 4567",
    empresa: "ACME S.A.S.",
    mensaje: "Quiero información sobre el SG-SST.",
  };

  it("incluye una línea por campo, en orden", () => {
    const texto = buildContactWhatsAppMessage(datos);
    const lineas = texto.split("\n");
    expect(lineas[0]).toBe("Nuevo contacto desde mgaconsultor.com.co");
    expect(texto).toContain("Nombre: Ana Pérez");
    expect(texto).toContain("Empresa: ACME S.A.S.");
    expect(texto).toContain("Teléfono: 300 123 4567");
    expect(texto).toContain("Email: ana@acme.com");
    expect(texto).toContain("Mensaje: Quiero información sobre el SG-SST.");
    expect(lineas).toHaveLength(7);
    expect(lineas[5]).toBe(""); // separación antes del mensaje
  });

  it("omite la empresa cuando está vacía o solo con espacios", () => {
    expect(buildContactWhatsAppMessage({ ...datos, empresa: "" })).not.toContain("Empresa:");
    expect(buildContactWhatsAppMessage({ ...datos, empresa: "   " })).not.toContain("Empresa:");
    expect(buildContactWhatsAppMessage({ ...datos, empresa: undefined })).not.toContain("Empresa:");
  });

  it("usa saltos de línea reales que WhatsApp respeta", () => {
    const texto = buildContactWhatsAppMessage(datos);
    expect(texto).toContain("\n");
    expect(texto).not.toContain("\\n");
  });

  it("refleja los saltos de línea en la URL codificada", () => {
    const texto = buildContactWhatsAppMessage(datos);
    expect(buildWhatsAppUrl(texto)).toContain(encodeURIComponent("\n"));
  });
});
