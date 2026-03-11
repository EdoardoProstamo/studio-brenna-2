import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, phone, message } = req.body;

        await resend.emails.send({
            from: "Studio Legale Brenna <onboarding@resend.dev>",
            to: "avv.marcobrenna@studiolegalebpr.it",
            subject: "Nuova richiesta dal sito",
            html: `
        <h2>Nuova richiesta dal sito</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || "Non fornito"}</p>

        <h3>Messaggio</h3>
        <p>${message || "Nessun messaggio inserito"}</p>
      `,
        });

        return res.status(200).json({ success: true });

    } catch (error) {
        return res.status(500).json({ error: "Errore invio email" });
    }
}