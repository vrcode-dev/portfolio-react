// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-experience-js": () => import("./../../../src/pages/experience.js" /* webpackChunkName: "component---src-pages-experience-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-resume-js": () => import("./../../../src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */),
  "component---src-pages-work-js": () => import("./../../../src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */)
}

