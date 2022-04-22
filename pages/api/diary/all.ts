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
  const {latest_date, count} = req.query;
  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  if ((latest_date && typeof latest_date !== 'string') ||
    (count && typeof count !== 'string'))
    return res.status(400).json(createErrResp(Err.reqParamNG));
  const auth = req.headers['auth'];
  try {
    const resp = await (!latest_date && !count ? Nideriji.diary.all(auth)
      : Nideriji.diary.allRange(count as unknown as number, latest_date, auth));
    proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    return proxyErrorHandlerCommon(res, e);
  }
}
