// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../../utils/Types";
import {createErrResp, proxyErrorHandlerCommon, proxyUpstreamResponseCommon} from "../../../utils";
import Err from "../../../utils/Err";
import Nideriji from "nideriji-api";

type Data = Types.ProxyResponseData;

// TODO: Add complete date validator
const dateRegex = /^(((?:19|20)\d\d)-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]))$/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {date} = req.query;
  if (!date || typeof date !== 'string')
    return res.status(400).json(createErrResp(Err.reqParamNG));
  if (!date.match(dateRegex))
    return res.status(400).json(createErrResp(Err.regMatchNG));
  const [y, m, d] = date.split('-');
  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  try {
    const resp = await Nideriji.diary.byDate(y, m, d, req.headers['auth']);
    proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    return proxyErrorHandlerCommon(res, e);
  }
}