import { element } from "./element.js"

/**
 * 
 * @param  {...(Node | string)} children 
 */
const div = (...children) => {
  return element("div", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const h1 = (...children) => {
  return element("h1", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const h2 = (...children) => {
  return element("h2", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const h3 = (...children) => {
  return element("h3", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const h4 = (...children) => {
  return element("h4", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const h5 = (...children) => {
  return element("h5", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const h6 = (...children) => {
  return element("h6", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 */
const p = (...children) => {
  return element("p", ...children)
}

export {
  div,
  h1, h2, h3, h4, h5, h6,
  p,
}