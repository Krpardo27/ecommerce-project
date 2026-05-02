import { VerificationEmailData } from "../types/email.types";
import { emailConfig } from "../config/config";

export function renderVerificationEmail(data: VerificationEmailData): string {
  // Configuración de branding rápida
  const brandName = "TuEcommerce"; 
  const primaryColor = "#4F46E5"; // Indigo moderno
  const textColor = "#1F2937";

  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <title>Verifica tu cuenta en ${brandName}</title>
    </head>

    <body style="margin:0; padding:0; background-color:#F9FAFB; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:40px 10px;">
        <tr>
          <td align="center">

            <table width="100%" style="max-width:600px; background:#ffffff; border:1px solid #E5E7EB; border-radius:16px; overflow:hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              
              <!-- HEADER / LOGO -->
              <tr>
                <td style="padding:40px 40px 20px 40px; text-align:left;">
                  <div style="font-size:24px; font-weight:800; color:${primaryColor}; letter-spacing:-0.025em;">
                    ${brandName.toUpperCase()}
                  </div>
                </td>
              </tr>

              <!-- MAIN CONTENT -->
              <tr>
                <td style="padding:0 40px 40px 40px;">
                  <h1 style="margin:0 0 16px; color:${textColor}; font-size:28px; font-weight:700; line-height:1.2;">
                    Bienvenido a la comunidad
                  </h1>

                  <p style="margin:0 0 24px; color:#4B5563; font-size:16px; line-height:1.6;">
                    Hola <strong>${data.name}</strong>,<br><br>
                    Estamos emocionados de tenerte con nosotros. Para empezar a explorar nuestros productos y disfrutar de una experiencia personalizada, por favor confirma tu dirección de correo electrónico.
                  </p>

                  <!-- CTA BUTTON -->
                  <div style="margin:32px 0;">
                    <a 
                      href="${data.url}" 
                      style="
                        background:${primaryColor};
                        color:#ffffff;
                        text-decoration:none;
                        padding:16px 32px;
                        border-radius:12px;
                        display:inline-block;
                        font-weight:600;
                        font-size:16px;
                        box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
                      "
                    >
                      Confirmar mi correo electrónico
                    </a>
                  </div>

                  <!-- SECURITY INFO -->
                  <div style="border-top:1px solid #F3F4F6; margin-top:32px; padding-top:24px;">
                    <p style="font-size:14px; color:#6B7280; margin-bottom:8px;">
                      ¿El botón no funciona? Copia este enlace en tu navegador:
                    </p>
                    <p style="font-size:12px; color:${primaryColor}; word-break:break-all; background:#F9FAFB; padding:12px; border-radius:8px;">
                      ${data.url}
                    </p>
                    <p style="font-size:13px; color:#9CA3AF; margin-top:16px; font-style:italic;">
                      * Este enlace de seguridad expirará en ${emailConfig.tokenExpiration}.
                    </p>
                  </div>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="padding:32px 40px; background-color:#FBFBFF; text-align:center; border-top:1px solid #E5E7EB;">
                  <p style="margin:0; font-size:12px; color:#9CA3AF; line-height:1.5;">
                    &copy; 2024 ${brandName}. Todos los derechos reservados.<br>
                    Si no solicitaste esta cuenta, puedes ignorar este correo de forma segura.
                  </p>
                </td>
              </tr>

            </table>

            <!-- SUB-FOOTER -->
            <table width="100%" style="max-width:600px; margin-top:20px;">
              <tr>
                <td style="text-align:center; font-size:12px; color:#9CA3AF;">
                  Recibiste este correo porque te registraste en nuestro sitio web.
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

export function renderVerificationEmailText(data: VerificationEmailData): string {
  return `
Bienvenido a TuEcommerce

Hola ${data.name},

Gracias por registrarte. Por favor, confirma tu cuenta haciendo clic en el siguiente enlace:

${data.url}

Este enlace expirará en ${emailConfig.tokenExpiration}.

Si no creaste esta cuenta, ignora este mensaje.

Atentamente,
El equipo de TuEcommerce
  `.trim();
}