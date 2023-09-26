/**
 * @typedef {Object} SocializeElement
 * @property {function(string, string): (HTMLElement | SocializeElement)} $attr
 * @property {function(...string): (HTMLElement | SocializeElement)} $class
 * @property {function((this: GlobalEventHandlers, ev: Event) => any)): any} $onchange
*/

/**
 * 
 * @param {string} name 
 * @param  {...(Node | string)} children 
 * @returns {HTMLElement | SocializeElement}
 */
const element = (name, ...children) => {
  const element = document.createElement(name)

  children?.length > 0 && children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child)
    } else {
      if (typeof child === "string") {
        element.appendChild(
          document.createTextNode(child)
        )
      } else if (typeof child === "object") {
        element.appendChild(
          document.createTextNode(JSON.stringify(child, null, 4))
        )
      } else {
        element.appendChild(
          document.createTextNode(String(child))
        )
      }
    }
  })

  element.$class = function (...list) {
    list?.length > 0 && list.forEach((val) => {
      this.classList.add(val)
    })

    return this
  }

  element.$onchange = (cb) => element.onchange = cb

  return element
}

export {
  element,
}