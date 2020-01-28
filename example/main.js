var isValidHostname = require('../')

var hostname = document.querySelector('#hostname')
var submit = document.querySelector('#submit')
var output = document.querySelector('#output')

submit.addEventListener('click', update)
hostname.addEventListener('input', update)

update()

function update(event) {
  if (event) event.preventDefault()
  output.innerHTML = String(isValidHostname(hostname.value))
}
