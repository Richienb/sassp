import { renderSync, Options, Result, SassException } from "sass"

declare type callbackFn = (exception: SassException, result: Result) => void

declare const sassp: {
    render(options: Options): Promise<Result>
    render(options: Options, callback: callbackFn): void

    renderSync: typeof renderSync

    renderFile(options: Options): Promise<Result>
    renderFile(options: Options, callback: callbackFn): void

    renderFileSync(options: Options): Result
}

export = sassp;
