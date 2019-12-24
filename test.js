import test from "ava"
import fs from "fs-extra"
import sassp from "."

const css = `body {
  background-color: white;
}`
const sourcemapped = `body {
  background-color: white;
}

/*# sourceMappingURL=index.css.map */`
const mappings = "AAAA;EACI"

test("main", async (t) => {
    t.is((await sassp.render({ file: "test/index.sass" })).css.toString(), css)

    await fs.remove("test/index.css")
    await fs.remove("test/index.css.map")

    await sassp.renderFile({ file: "test/index.sass", outFile: "test/index.css", sourceMap: true })

    t.is(await fs.readFile("test/index.css", "utf8"), sourcemapped)
    t.is((await fs.readJSON("test/index.css.map")).mappings, mappings)
})
