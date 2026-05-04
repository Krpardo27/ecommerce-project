import { PasswordResetEmailData } from "../types/email.types";

export function renderPasswordResetEmail(data: PasswordResetEmailData): string {
  const brandName = "Ecommerce Project";
  const primaryColor = "#4F46E5";
  const resetUrl = `${data.url}/auth/reset-password`;

  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Restablecer contraseña | ${brandName}</title>
    </head>
    <body style="margin:0; padding:0; background-color:#F9FAFB; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:40px 10px;">
        <tr>
          <td align="center">
            
            <table width="100%" style="max-width:600px; background:#ffffff; border:1px solid #E5E7EB; border-radius:16px; overflow:hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              
              <!-- HEADER -->
              <tr>
                <td style="padding:40px 40px 20px 40px;">
                  <div style="font-size:24px; font-weight:800; color:${primaryColor}; letter-spacing:-0.025em;">
                    ${brandName.toUpperCase()}
                  </div>
                </td>
              </tr>

              <!-- CONTENT -->
              <tr>
                <td style="padding:0 40px 40px 40px;">
                  <h1 style="margin:0 0 16px; color:#1F2937; font-size:26px; font-weight:700; line-height:1.2;">
                    ¿Olvidaste tu contraseña?
                  </h1>

                  <p style="margin:0 0 24px; color:#4B5563; font-size:16px; line-height:1.6;">
                    Hola <strong>${data.name}</strong>,<br><br>
                    Recibimos una solicitud para restablecer la contraseña de tu cuenta. No te preocupes, estas cosas pasan. Haz clic en el botón de abajo para elegir una nueva.
                  </p>

                  <!-- CTA BUTTON -->
                  <div style="margin:32px 0; text-align:left;">
                    <a 
                      href="${resetUrl}" 
                      target="_blank"
                      style="
                        background:${primaryColor};
                        color:#ffffff;
                        text-decoration:none;
                        padding:16px 32px;
                        border-radius:12px;
                        display:inline-block;
                        font-weight:600;
                        font-size:16px;
                      "
                    >
                      Restablecer mi contraseña
                    </a>
                  </div>

                  <p style="margin:0 0 24px; color:#6B7280; font-size:14px; line-height:1.6;">
                    Por seguridad, este enlace es de un solo uso. Si tú no realizaste esta solicitud, puedes ignorar este correo; tu contraseña actual seguirá siendo segura.
                  </p>

                  <!-- FALLBACK -->
                  <div style="border-top:1px solid #F3F4F6; padding-top:24px;">
                    <p style="font-size:12px; color:#9CA3AF; margin-bottom:8px;">
                      Si el botón no funciona, copia y pega este enlace:
                    </p>
                    <p style="font-size:12px; color:${primaryColor}; word-break:break-all; background:#F9FAFB; padding:12px; border-radius:8px;">
                      ${resetUrl}
                    </p>
                  </div>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="padding:32px 40px; background-color:#FBFBFF; text-align:center; border-top:1px solid #E5E7EB;">
                  <p style="margin:0; font-size:12px; color:#9CA3AF;">
                    &copy; ${new Date().getFullYear()} ${brandName}. Centro de Seguridad.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>

    </body>
  </html>
  `;
}

export function renderPasswordResetEmailText(data: PasswordResetEmailData): string {
  const resetUrl = `${data.url}/auth/reset-password`;

  return `
Restablecer contraseña - TuEcommerce

Hola ${data.name},

Recibimos una solicitud para restablecer tu contraseña. Puedes hacerlo a través del siguiente enlace:

${resetUrl}

Si no solicitaste este cambio, ignora este mensaje. Tu contraseña no cambiará hasta que accedas al enlace anterior.

Atentamente,
El equipo de TuEcommerce
  `.trim();
}