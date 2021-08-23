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
const colors = ["#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF"]
const colorsWrap = document.createElement('div')

function createOption(color) {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  return option
}

function createDivColor(color) {
  const div = document.createElement('div')
  div.style.height = '5rem'
  div.style.width = '100%'
  div.style.background = color;
  return div
}

colors.forEach(color => {
  const option = createOption(color)
  select.appendChild(option)
})

select.classList.add('select')
select.setAttribute('multiple', '')
select.setAttribute('size', `${colors.length}`)
form.appendChild(select)

select.addEventListener('change', (event) => {
  colorsWrap.innerHTML = ' '

  Array.from(event.target.selectedOptions).forEach(option => {
    const div = createDivColor(option.value)
    colorsWrap.appendChild(div)
  })
})

colorsWrap.setAttribute('class', 'colors-wrap')
app.appendChild(colorsWrap)
