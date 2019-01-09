// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/index.json")
}