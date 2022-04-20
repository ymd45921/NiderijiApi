import Types from "./Types";
import {NextApiResponse} from "next";

export const proxyUpstreamResponse =
  <T extends Types.ProxyResponseData>(
  resp: Types.UpstreamResponse,
  res: NextApiResponse<T>,
  errMsg: T) => {
  if (resp.data.error === 1)
    res.status(204).json(errMsg);
  else res.status(200).json(resp.data);
}

export const createErrResp = (msg?: string) => {
  return {error: 1, msg} as Types.ProxyResponseData;
}
