// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/src/pages/projects.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/src/pages/experience.js"))
}

exports.json = {
  "layout-index.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/layout-index.json"),
  "pandas-and-bananas.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/pandas-and-bananas.json"),
  "sweet-pandas-eating-sweets.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/sweet-pandas-eating-sweets.json"),
  "dev-404-page.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/about.json"),
  "index.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/index.json"),
  "projects.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/projects.json"),
  "experience.json": require("/Users/vevinatrinh/Documents/repos/partialfractions.github.io/.cache/json/experience.json")
}