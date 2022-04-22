// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../../../utils/Types";
import Nideriji from "nideriji-api";
import Err from "../../../../utils/Err";
import {createErrResp, proxyUpstreamResponseCommon} from "../../../../utils";

type Data = Types.ProxyResponseData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const date = req.query.date as string[];
  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  const auth = req.headers['auth'];
  if (date.length != 2)
    return res.status(400).json(createErrResp(Err.reqParamNG));
  try {
    const resp = await Nideriji.diary.monthList(date[0], date[1], auth);
    proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    console.error(e);
    res.status(500).json(createErrResp(Err.internal))
  }
}