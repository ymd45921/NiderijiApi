import Types from "./Types";
import {NextApiResponse} from "next";
import Err from "./Err";
import * as querystring from "querystring";

export const proxyUpstreamResponseCommon =
  <T extends Types.ProxyResponseData>(
  resp: Types.UpstreamResponse,
  res: NextApiResponse<T>,
  errMsg: T) => {
  if (resp.data.error !== 0)
    res.status(resp.status).json({...errMsg, error: resp.data.error ?? 1});
  else res.status(200).json(resp.data);
}

export const createErrResp = (msg?: string) => {
  return {error: 1, msg} as Types.ProxyResponseData;
}

const formatAxiosErrResponse = (res: any) => {
  const {status, statusText, headers, data} = res;
  console.error(status, statusText);
  console.error('Response headers: ',headers);
  console.error('data: ', data);
}

export const proxyErrorHandlerCommon = (
  res: NextApiResponse, e: unknown) => {
  const {response} = e as any;
  formatAxiosErrResponse(response);
  res.status(500).json(createErrResp(Err.internal));
}

export const processFormBody = (body?: string | object): any => {
  if (typeof body === 'object') return body;
  else if (typeof body === 'string') return querystring.decode(body);
  else return {};
}
