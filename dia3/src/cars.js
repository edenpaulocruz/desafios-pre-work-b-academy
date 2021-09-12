const carForm = document.querySelector('[data-js="car-form"]')
const carTable = document.querySelector('[data-js="car-table"')

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName]
}

const typeOfElements = {
  image: insertImage,
  text: insertText,
  color: insertColor
}

function insertImage (value) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = value
  img.style.width = '200px'
  td.appendChild(img)
  return td
}

function insertText (value) {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

function insertColor (value) {
  const td = document.createElement('td')
  const div = document.createElement('div')
  div.style.width = '50px',
  div.style.height = '50px',
  div.style.borderRadius = '50%',
  div.style.backgroundColor = value
  div.style.border = '1px solid #000'
  td.appendChild(div)
  return td
}

carForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const getElement = getFormElement(event)

  const elements = [
    { type: 'image', value: getElement('image').value },
    { type: 'text', value: getElement('brand').value },
    { type: 'text', value: getElement('year').value},
    { type: 'text', value: getElement('plate').value},
    { type: 'color', value: getElement('color').value}
  ]

  const tr = document.createElement('tr')
  elements.forEach(element => {
    const td = typeOfElements[element.type](element.value)
    tr.appendChild(td)
  })

  carTable.appendChild(tr)

  event.target.reset()
  image.focus()
})
