// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Nideriji from "nideriji-api";
import Types from "../../utils/Types";
import Err from "../../utils/Err";
import {createErrResp, processFormBody} from "../../utils";

type Data = Types.ProxyResponseData ;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const form = {
    email: '',
    password: '',
    ...processFormBody(req.body)
  };
  if (form.email === '' || form.password === '')
    return res.status(400).json(createErrResp(Err.reqParamNG));
  try {
    const resp = await Nideriji.login(form.email, form.password);
    if (resp.data.error === 1)
      return res.status(204).json(createErrResp(Err.remoteOpNG));
    else res.status(200).json(resp.data);
  } catch (e) {
    console.error(e);
    return res.status(500).json(createErrResp(Err.loginNG));
  }
}
