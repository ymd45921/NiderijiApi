import {AxiosResponse} from "axios";

namespace Types {

  export type ProxyResponseData = {
    err?: boolean;
    msg?: string;
    error: number;
  }

  export type UpstreamResponse = AxiosResponse<any, any>;
}

export default Types;
