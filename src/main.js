import render from "./dom/render.js"
import { div, h1, h2, h3, h4, h5, h6 } from "./dom/tag.js"

render(div(
  h1("h1"),
  h2("h2"),
  h3("h3"),
  h4("h4"),
  h5("h5"),
  h6("h6"),
))