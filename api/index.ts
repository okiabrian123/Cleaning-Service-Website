import { VercelRequest, VercelResponse } from '@vercel/node';
import { createServer } from '../server';

const app = createServer();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Forward the request to the Express app
  return new Promise((resolve, reject) => {
    app(req, res, (err: any) => {
      if (err) {
        console.error('Error handling request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return resolve(undefined);
      }
      resolve(undefined);
    });
  });
}

// Add health check endpoint
export const config = {
  api: {
    bodyParser: false,
  },
};
