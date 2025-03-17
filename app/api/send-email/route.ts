import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact <contact@cabinet-mriviere.fr>",
      to: ["contact@cabinet-mriviere.fr"],
      replyTo: email,
      subject: `Nouveau message: ${subject || "Demande de contact"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouveau message de contact</title>
            <style>
              body {
                font-family: 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f9f9f9;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              }
              .header {
                background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
                padding: 20px;
                text-align: center;
              }
              .logo-container {
                width: 150px;
                height: 150px;
                margin: 0 auto;
                background-color: white;
                border-radius: 50%;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .logo-text {
                text-align: center;
                font-weight: bold;
                color: #1e40af;
                font-size: 24px;
                line-height: 1.2;
              }
              .content {
                padding: 30px;
              }
              .message-info {
                background-color: #f0f9ff;
                border-left: 4px solid #3b82f6;
                padding: 15px;
                margin-bottom: 20px;
                border-radius: 0 4px 4px 0;
              }
              .message-body {
                background-color: #f9fafb;
                padding: 20px;
                border-radius: 4px;
                margin-top: 20px;
              }
              h1 {
                color: #1e3a8a;
                font-size: 24px;
                margin-top: 0;
                margin-bottom: 20px;
              }
              h2 {
                color: #1e3a8a;
                font-size: 18px;
                margin-top: 0;
              }
              .label {
                font-weight: bold;
                color: #4b5563;
              }
              .footer {
                text-align: center;
                padding: 20px;
                font-size: 12px;
                color: #6b7280;
                background-color: #f3f4f6;
              }
              .button {
                display: inline-block;
                background-color: #3b82f6;
                color: white;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 4px;
                margin-top: 15px;
                font-weight: 500;
              }
              hr {
                border: none;
                height: 1px;
                background-color: #e5e7eb;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo-container">
                  <div class="logo-text">
                    RIVIÈRE<br>SANTÉ
                  </div>
                </div>
              </div>
              <div class="content">
                <h1>Nouveau message de contact</h1>
                <div class="message-info">
                  <p><span class="label">Nom:</span> ${name}</p>
                  <p><span class="label">Email:</span> ${email}</p>
                  <p><span class="label">Téléphone:</span> ${
                    phone || "Non renseigné"
                  }</p>
                  <p><span class="label">Sujet:</span> ${
                    subject || "Demande de contact"
                  }</p>
                </div>
                <h2>Message:</h2>
                <div class="message-body">
                  ${message.replace(/\n/g, "<br />")}
                </div>
                <hr>
                <p>Vous pouvez répondre directement à cet email pour contacter ${name}.</p>
                <a href="mailto:${email}" class="button">Répondre</a>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Cabinet Infirmier Marina RIVIÈRE</p>
                <p>130 route de Bischwiller, 67300 Schiltigheim</p>
                <p>Du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30</p>
                <p>Tél: 07 66 72 07 66</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json(
      { error: "Erreur lors du traitement de la demande" },
      { status: 500 }
    );
  }
}
