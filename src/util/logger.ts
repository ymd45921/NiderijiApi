import chalk from "chalk";

const _logger = console.log;

const _chalk = {
    ...chalk,
    orange: chalk.rgb(255, 128, 0)
}

const logger = {
    log: _logger,
    info: (...args: any[]) => _logger(_chalk.blue(args)),
    ok: (...args: any[]) => _logger(_chalk.green(args)),
    warn: (...args: any[]) => _logger(_chalk.orange(args)),
    err: (...args: any[]) => _logger(_chalk.red(args)),
    hl: (...args: any[]) => _logger(_chalk.yellow(args)),
    msg: (...args: any[]) => _logger(_chalk.cyan(args))
}

export default logger;
