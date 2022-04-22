import {AuthConfig, DiaryDate} from "../configs/types";
import TypeAlias from "../configs/typeAlias";

export const genAuthConfig = (
    auth?: AuthConfig): TypeAlias.RequestConfig => {
    if (typeof auth === 'string')
        return { headers: {auth} };
    else return auth ?? {};
}

export const genDiaryDate = (
    y: string | number,
    m: string | number,
    d: string | number
): DiaryDate => {
    return `${y}-${<number>m < 10 ? '0' + m : m}-${<number>d < 10 ? '0' + d : d}`;
}

// TODO: experimental currying function
export const withAuth = (
    auth: AuthConfig,
    method: ((...args: any[]) => TypeAlias.Response)) => {
    return method;
}
