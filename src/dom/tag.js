import { element } from "./element.js"

/**
 * @typedef {Object} CustomElement
 * @property {function(string, string): (HTMLElement | CustomElement)} $attr
 * @property {function(...string): (HTMLElement | CustomElement)} $class
*/

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const div = (...children) => {
  return element("div", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const h1 = (...children) => {
  return element("h1", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const h2 = (...children) => {
  return element("h2", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const h3 = (...children) => {
  return element("h3", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const h4 = (...children) => {
  return element("h4", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const h5 = (...children) => {
  return element("h5", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const h6 = (...children) => {
  return element("h6", ...children)
}

/**
 * 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | CustomElement}
 */
const p = (...children) => {
  return element("p", ...children)
}

export {
  div,
  h1, h2, h3, h4, h5, h6,
  p,
}