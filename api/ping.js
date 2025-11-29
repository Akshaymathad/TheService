export default function handler(request, response) {
    response.status(200).json({
        status: 'ok',
        message: 'The Service is operational',
        timestamp: new Date().toISOString(),
        region: process.env.VERCEL_REGION || 'dev'
    });
}
