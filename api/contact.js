// api/contact.js
// Example of a pure Node.js handler for Vercel/Netlify (Optional)
// No external dependencies, no paid APIs.

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email, message } = req.body;

    // In a real OSS setup, you might write to a database or trigger a webhook.
    // Here we just log it (server-side logs) and return success.
    console.log(`Received contact from ${email}: ${message}`);

    return res.status(200).json({ status: 'received' });
}
