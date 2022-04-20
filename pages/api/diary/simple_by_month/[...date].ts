// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../../../utils/Types";
import Nideriji from "nideriji-api";
import Err from "../../../../utils/Err";
import {createErrResp, proxyUpstreamResponse} from "../../../../utils";

type Data = Types.ProxyResponseData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const date = req.query.date as string[];
  console.log(date);
  if (date.length != 2)
    return res.status(400).json(createErrResp(Err.reqParamNG));
  try {
    const resp = await Nideriji.diary.monthList(date[0], date[1]);
    proxyUpstreamResponse(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    console.error(e);
    res.status(500).json(createErrResp(Err.internal))
  }
}
