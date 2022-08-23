import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport, TransportOptions } from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL } = process.env;

const transporter = createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    tls: true,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
} as TransportOptions);

type Data = {
    message: string;
};

interface RequestData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface MailData {
    subject: string;
    text: string;
}

function getMailBody({ name, email, subject, message }: RequestData): string {
    return `
    Contact Form Request
    --------------------
    From: ${name} <${email}>
    Subject: ${subject}
    Message:
    ${message}
    `
        .split('\n')
        .map((str) => str.trim())
        .join('\n');
}

async function sendMail({ subject, text }: MailData) {
    await transporter.sendMail({
        from: SMTP_USER,
        to: CONTACT_EMAIL,
        subject: `Contact Form Request - ${subject}`,
        text,
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const body: RequestData = req.body;
        if (!body.name || !body.email || !body.message || !body.subject) {
            return res.status(400).json({ message: 'Please fill out all fields' });
        }
        const mailBody = getMailBody({ ...body });
        await sendMail({ subject: body.subject, text: mailBody });
        return res.status(200).json({ message: 'Your message has been sent successfully' });
    } else {
        return res.status(405);
    }
}
