// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../../utils/Types";
import {createErrResp, proxyErrorHandlerCommon, proxyUpstreamResponseCommon} from "../../../utils";
import Err from "../../../utils/Err";
import Nideriji from "nideriji-api";

type Data = Types.ProxyResponseData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const param = req.query.param as string[];
  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  const auth = req.headers['auth'];
  try {
    if (param.length === 1) {
      const command = param[0];
      let call: (auth: string) => ReturnType<typeof Nideriji.diary.byId>;
      if (command === 'random') call = Nideriji.diary.random;
      else if (command === 'all') call = Nideriji.diary.all;
      else call = (auth) => (Nideriji.diary.byId(command, auth));
      const resp = await call(auth);
      proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
    } else if (param.length === 2) {
      const [y, m] = param;
      const resp = await Nideriji.diary.byMonth(y, m, auth);
      proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
    } else res.status(400).json(createErrResp(Err.reqParamNG));
  } catch (e) {
    return proxyErrorHandlerCommon(res, e);
  }
}
