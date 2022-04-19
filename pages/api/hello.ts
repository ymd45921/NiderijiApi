// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string;
  desc: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    msg: 'Welcome to nideriji-api-server!',
    desc: 'Because of CORS, the third-party web pages cannot access original services. ' +
      'And this is a proxy to all requests of nideriji-api, powered by Next.js and Vercel.'
  });
}
