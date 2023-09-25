/**
 * This function render a new app
 * @param {HTMLElement} node 
 */
const render = (node) => {
  const app = document.getElementById("app")

  app.appendChild(node)
}

export default render