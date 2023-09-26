import render from "./dom/render.js"
import { div } from "./dom/tag.js"

const App = () => {
  // const input = element("input")

  // input.onchange = function(){
  //   console.log(this.value)
  // }

  // input.onchange(() => {
  //   console.log(this)
  // })

  function validation() {
    // this is the "context" for the function.  In this case
    // the element that changed.
    var value = this.value;
    console.log(value)
  }

  function test() {
    alert("works");
  }

  // input = document.createElement("input")

  // el.name = "dName[" + fieldsd + "]";
  // el.id = "dName[" + fieldsd + "]";
  // el.onchange = validation;

  const input = document.createElement("input")
  input.type = "text"

  input.onchange = function(event) {
    event.preventDefault()

    console.log(this.value)
  }

  // input.onchange = function (event) {
  //   event.preventDefault()

  //   console.log(this.value)
  // }

  // var onchangeFunction = new Function("", "var elem = document.getElementById('rec_assign~" + count + "'); saveAssign(elem);");
  // input.onchange = onchangeFunction

  //   e5.setAttribute('onchange', 'Add(this.value, this.name, this.id)');

  // e5.attachEvent("onchange",yourfunction);

  return div(input)
}

render(App())