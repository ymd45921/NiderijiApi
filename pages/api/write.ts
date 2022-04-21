// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Types from "../../utils/Types";
import {createErrResp, processFormBody, proxyErrorHandlerCommon, proxyUpstreamResponseCommon} from "../../utils";
import Err from "../../utils/Err";
import Nideriji from "nideriji-api";
import {IDiaryParams} from "nideriji-api/dist/configs/types";

type Data = Types.ProxyResponseData;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const form = {
    weather: '',
    mood: '',
    title: '',
    ...processFormBody(req.body)
  };
  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  const auth = req.headers['auth'];
  if (!form.content || !form.date)
    return res.status(400).json(createErrResp(Err.reqParamNG));
  try {
    const resp = await Nideriji.diary.write(<IDiaryParams>form, auth);
    proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
  } catch (e) {
    return proxyErrorHandlerCommon(res, e);
  }
}
