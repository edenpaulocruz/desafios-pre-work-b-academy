const inputName = document.querySelector('[data-js="name"]')
const prepositions = ["de", "da", "do", "dos"]

inputName.addEventListener('input', (event) => {
  const arrayInputName = event.target.value.toLowerCase().split(' ')

  event.target.value = arrayInputName.map(item => {
    return prepositions.includes(item)
      ? item
      : item.charAt(0).toUpperCase() + item.slice(1)
  }).join(' ')
})

const app = document.querySelector('[data-js="app"]')
const form = document.querySelector('[data-js="form')
const select = document.createElement('select')
const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"]
const colorsWrap = document.createElement('div')

function createOption(color) {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  return option
}

function createDivColor(color) {
  const div = document.createElement('div')
  div.style.height = '100px'
  div.style.width = '100%'
  div.style.background = color;
  div.style.border = '2px solid #cecece'
  return div
}

colorsWrap.setAttribute('class', 'colors-wrap')
app.appendChild(colorsWrap)

colors.forEach(color => {
  const option = createOption(color)
  select.appendChild(option)
})

select.classList.add('select')
form.appendChild(select)

select.addEventListener('change', (event) => {
  const div = createDivColor(event.target.value)
  colorsWrap.appendChild(div)
})


