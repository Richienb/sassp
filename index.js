"use strict"

const { render, renderSync } = require("sass")
const { fromCallback, fromPromise } = require("universalify")
const fs = require("fs-extra")
const replaceExt = require("replace-ext")

const sassP = {
    render: fromCallback(render),
    renderSync,
    renderFile: fromPromise(async (options) => {
        if (!options.outFile) throw new ReferenceError("`outFile` must be specified!")
        const res = await sassP.render(options)
        await fs.writeFile(options.outFile, res.css)
        if (options.sourceMap && !options.sourceMapEmbed) await fs.writeFile(options.sourceMap === true ? replaceExt(options.outFile, ".css.map") : options.sourceMap, res.map)
        return res
    }),
    renderFileSync: (options) => {
        if (!options.outFile) throw new ReferenceError("`outFile` must be specified!")
        const res = sassP.renderSync(options)
        fs.writeFileSync(options.outFile, res.css)
        if (options.sourceMap && !options.sourceMapEmbed) fs.writeFileSync(options.sourceMap === true ? replaceExt(options.outFile, ".css.map") : options.sourceMap, res.map)
        return res
    },
}

module.exports = sassP
