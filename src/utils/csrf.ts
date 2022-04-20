const csrfTokenLength = 32;

const symbols = '~!@#$%^&*()_+{}":?><;.,';

type GenParam = {
    cnt: number;
    off: number;
    after?: (...idx:number[]) => string;
}

const genInteger = (left: number, right: number) => {
    if (left > right) {
        left += right;
        right = left - right;
        left -= right;
    }
    const off = left, cnt = right - left;
    return Math.floor(Math.random() * cnt) + off;
}

const genChar = (conf: GenParam) => {
    return (conf.after ?? String.fromCharCode)(genInteger(conf.off, conf.off + conf.cnt));
};

const genConf: GenParam[] = [
    {cnt: 26, off: 97}, {cnt: 26, off: 65}, {cnt: 10, off: 48},
    {cnt: symbols.length, off: 0, after: idx => (symbols[idx])}
]

const randomToken = () => {
    let ret = "";
    for (let i = csrfTokenLength; i--;) {
        ret += genChar(genConf[genInteger(0, 3)]);
    }
    return ret;
}

export default {
    randomToken
};
