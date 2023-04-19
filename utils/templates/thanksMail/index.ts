// Mail template to send to user
import { LINKEDIN_URL, WHATSAPP_URL } from "config/constants";

const thanksMail = (name: string, subject: string, language: string) => {
  let thanksTemplate = `
    <p>Hello ${name}, I hope you are doing well!</p>
    <p>Thank you for getting in touch about "${subject}", I will get back to you as soon as possible.</p>
    <p>If you have any questions do not hesitate to contact me through LinkedIn or via WhatsApp.</p>
    <p><strong>LinkedIn:</strong> <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">${LINKEDIN_URL}</a></p>
    <p><strong>WhatsApp:</strong> <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">${WHATSAPP_URL}</a></p>
    <p>Best regards!</p>
    <p>Andrés Siri</p>
  `;

  if (language === "es")
    thanksTemplate = `
      <p>¡Hola ${name}, espero que andes bien!</p>
      <p>Gracias por ponerte en contacto conmigo sobre "${subject}", estaré respondiéndote a la brevedad.</p>
      <p>Ante cualquier pregunta no dudes en consultarme a traves de LinkedIn o via WhatsApp.</p>
      <p><strong>LinkedIn:</strong> <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">${LINKEDIN_URL}</a></p>
      <p><strong>WhatsApp:</strong> <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">${WHATSAPP_URL}</a></p>
      <p>¡Saludos!</p>
      <p>Andrés Siri</p>
    `;

  return thanksTemplate;
};

export default thanksMail;
