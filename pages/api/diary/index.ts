// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../../utils/Types";
import {createErrResp, proxyUpstreamResponse} from "../../../utils";
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
  try {
    const resp = await Nideriji.diary.byDate(y, m, d);
    proxyUpstreamResponse(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    console.error(e);
    res.status(500).json(createErrResp(Err.internal));
  }
}
