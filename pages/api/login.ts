// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {decode} from 'querystring';
import Nideriji from "nideriji-api";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {query, body} = req;
  const form = {
    email: '',
    password: '',
    ...decode(body)
  };
  if (form.email === '' || form.password === '')
    return res.status(400).json({msg: 'Email or password is need.'});
  const resp = await Nideriji.login(form.email, form.password);
  if (resp.data.error === 1)
    return res.status(204).json({msg: 'Login failed.', error: 1});
  else res.status(200).json(resp.data);
}
