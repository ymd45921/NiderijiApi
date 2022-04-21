// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../../../utils/Types";
import {createErrResp, proxyErrorHandlerCommon, proxyUpstreamResponseCommon} from "../../../../utils";
import Err from "../../../../utils/Err";
import Nideriji from "nideriji-api";

type Data = Types.ProxyResponseData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {id} = req.query;
  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  const auth = req.headers['auth'];
  try {
    if (typeof id !== 'string')
      return res.status(400).json(createErrResp(Err.reqParamNG));
    const resp = await Nideriji.diary.next(id, auth);
    proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    return proxyErrorHandlerCommon(res, e);
  }
}
