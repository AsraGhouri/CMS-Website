// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Active/Downloads/ElatedVigilantDesign/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\src\\pages\\page-2.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\.cache\\json\\layout-index.json"),
  "404.json": require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\.cache\\json\\404.json"),
  "index.json": require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\.cache\\json\\index.json"),
  "page-2.json": require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\.cache\\json\\page-2.json"),
  "404-html.json": require("C:\\Users\\Active\\Downloads\\ElatedVigilantDesign\\.cache\\json\\404-html.json")
}