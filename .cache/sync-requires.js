const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/resume.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/vilasayrathahao/Documents/github/portfolio-react/src/pages/work.js")))
}

