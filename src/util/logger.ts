const _logger = console.log;

const logger = {
    log: console.log,
    info: console.info,
    ok: console.debug,
    warn: console.warn,
    err: console.error,
    msg: (...args: any[]) => _logger(args)
}

export default logger;
