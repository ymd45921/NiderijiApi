// noinspection JSUnusedLocalSymbols,ES6UnusedImports

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

  if (!req.headers['auth'] || typeof req.headers['auth'] !== 'string')
    return res.status(403).json(createErrResp(Err.authMiss));
  const auth = req.headers['auth'];

  // try {
  //
  //   proxyUpstreamResponseCommon(resp, res, createErrResp(Err.remoteOpNG));
  // } catch (e) {
  //   return proxyErrorHandlerCommon(res, e);
  // }

  console.log(Nideriji.instance.defaults.headers);
  res.status(405).json({error: 1, msg: Err.notAllow})
}
