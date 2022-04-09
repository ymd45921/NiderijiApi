import chalk from "chalk";

const _logger = console.log;

const logger = {
    log: _logger,
    info: (...args: any[]) => _logger(chalk.blue(args)),
    ok: (...args: any[]) => _logger(chalk.green(args)),
    warn: (...args: any[]) => _logger(chalk.rgb(255, 128, 0)(args)),
    err: (...args: any[]) => _logger(chalk.red(args)),
    hl: (...args: any[]) => _logger(chalk.yellow(args)),
    msg: (...args: any[]) => _logger(chalk.cyan(args))
}

export default logger;
