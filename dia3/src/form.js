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

const form = document.querySelector('[data-js="form')
const select = document.createElement('select')
const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"]

function createOption(color) {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  return option
}

colors.forEach(color => {
  const option = createOption(color)
  select.appendChild(option)
})

select.classList.add('select')
form.appendChild(select)
