// Mail template for code verification

const codeMail = (
  name: string,
  email: string,
  subject: string,
  message: string,
  language: string
) => {
  let contactTemplate = `
    <h1>Contact from portfolio</h1>
    <p>
      <strong>Name:</strong><br>
      ${name}
    </p>
    <p>
      <strong>Email:</strong><br>
      ${email}
    </p>
    <p>
      <strong>Subject:</strong><br>
      ${subject}
    </p>
    <p>
      <strong>Message:</strong><br>
      ${message}
    </p>
    <p>
      <strong>Date:</strong><br>
      ${new Date()}</
    p>
  `;

  if (language === "es")
    contactTemplate = `
      <h1>Contacto desde el portfolio</h1>
      <p>
        <strong>Nombre:</strong><br>
        ${name}
      </p>
      <p>
        <strong>Email:</strong><br>
        ${email}
      </p>
      <p>
        <strong>Asunto:</strong><br>
        ${subject}
      </p>
      <p>
        <strong>Mensaje:</strong><br>
        ${message}
      </p>
      <p>
        <strong>Fecha:</strong><br>
        ${new Date()}</
      p>
    `;

  return contactTemplate;
};

export default codeMail;
