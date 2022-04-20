import {AuthConfig, TypeAlias} from "../configs/types";

export const genAuthConfig = (
    auth?: AuthConfig): TypeAlias.RequestConfig => {
    if (typeof auth === 'string')
        return { headers: {auth} };
    else return auth ?? {};
}
