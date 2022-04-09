import * as fs from "fs";
import * as util from "util";

type FsOption = Parameters<typeof fs.createWriteStream>[1];

const filestream = {
    create: (path: string, options?: FsOption) => {
        return {
            stream: fs.createWriteStream(path, options ?? {flags: 'a'}),
            log: function(...args: any[]) {
                this.stream.write(util.format.apply(null, args) + '\n');
            }
        }
    }
};

export default filestream;
