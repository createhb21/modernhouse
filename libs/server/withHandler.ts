import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export default function withHandler(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  fn: (req: NextApiRequest, res: NextApiResponse) => void,
) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  };
}
