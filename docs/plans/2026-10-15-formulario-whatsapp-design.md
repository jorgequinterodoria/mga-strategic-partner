# Diseño — Formulario de contacto vía WhatsApp

**Fecha:** 15 de octubre de 2026
**Repositorio:** mga-strategic-partner (https://mgaconsultor.com.co/)
**Estado:** Validado con Gerencia/-desarrollo

## Problema

El formulario de contacto (`src/components/ContactSection.tsx`) valida los campos con
Zod y muestra `toast.success("¡Mensaje enviado!")`, pero no envía la información a
ninguna parte: no hay backend, ni EmailJS, ni endpoint. Es un envío simulado.

Se requiere que el envío entregue los campos del formulario como mensaje de texto por
WhatsApp al mismo número publicado en el pie de página y en el botón flotante
(`573007923166`).

## Alcance

- Enviar los campos del formulario por WhatsApp al número oficial.
- Eliminar la duplicación del número, hoy hardcodeado en `WhatsAppButton.tsx` y
  `Footer.tsx`.
- Corregir el mensaje del toast para que no declare un envío que no ocurrió.

Fuera de alcance: backend, almacenamiento de leads, validación de número, cambios
visuales, el mensaje por defecto del botón flotante.

## Diseño

### Fuente única del número — `src/lib/whatsapp.ts` (nuevo)

```ts
export const WHATSAPP_NUMBER = "573007923166";      // formato E.164 sin "+"
export const WHATSAPP_DISPLAY = "+57 300 792 3166"; // como se muestra al usuario
export const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
```

`WhatsAppButton.tsx` y `Footer.tsx` pasan a importar estas constantes. El número se
modifica en un solo lugar.

### Constructor del mensaje — también en `src/lib/whatsapp.ts`

`buildContactWhatsAppMessage(datos)` produce una línea por campo:

```
Nuevo contacto desde mgaconsultor.com.co
Nombre: Ana Pérez
Empresa: ACME S.A.S.
Teléfono: 300 123 4567
Email: ana@acme.com

Mensaje: Quiero información sobre el SG-SST.
```

- `empresa` se omite si está vacía (es opcional en el formulario).
- Saltos de línea reales (`\n`), que WhatsApp respeta.
- Se ubica en `lib/` y no en el componente para que sea puro y testeable.

### Cambios en `ContactSection.tsx`

Después de superar `contactSchema.safeParse`:

1. `window.open(buildWhatsAppUrl(mensaje), "_blank", "noopener,noreferrer")`.
2. **No se limpia el formulario.** El mensaje se prepara, no se envía; si el navegador
   bloquea la pestaña o WhatsApp no abre, el usuario conserva lo escrito.
3. El toast informa con exactitud: «Se abrió WhatsApp. Completa el envío desde la
   aplicación.»

Se mantiene intacta la validación Zod y todos los `aria-*` existentes.

## Manejo de errores

| Caso | Comportamiento |
|---|---|
| Validación falla | Se muestran los errores por campo; no se abre WhatsApp |
| Navegador bloquea la pestaña | El formulario conserva los datos; el usuario puede usar el botón flotante |
| Campo `empresa` vacío | Se omite del mensaje |

## Pruebas

Vitest (ya configurado) sobre `src/lib/whatsapp.test.ts`:

- `buildContactWhatsAppMessage` con y sin `empresa`.
- Orden y presencia de cada campo.
- `buildWhatsAppUrl` codificando acentos, `&`, `?` y emojis.

## Riesgos

- **La ventana puede ser bloqueada** por algunos navegadores. Mitigación: no limpiar el
  formulario y conservar el botón flotante como vía alternativa.
- **No hay persistencia.** Si el usuario cierra WhatsApp sin enviar, el mensaje se
  pierde. Aceptado: fuera de alcance, y coherente con no tener backend.
