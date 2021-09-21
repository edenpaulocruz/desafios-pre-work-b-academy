import './style.css'

const url = 'http://localhost:3333/cars'
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

function showMessage(text, error) {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  td.textContent = text
  td.colSpan = 5;
  tr.dataset.js = ('message')
  tr.appendChild(td)
  carTable.appendChild(tr)

  if (error) {
    td.style.backgroundColor = '#f00'
    td.style.color = '#fff'
    setTimeout(removeMessage, 5000)
  }
}

function removeMessage() {
  const rowMessage = document.querySelector('[data-js="message"]:last-child')
  if (rowMessage) {
    carTable.removeChild(rowMessage)
  }
}

function addRowCar(car) {
  const tr = document.createElement('tr')

  const elements = [
    { type: 'image', value: car.image },
    { type: 'text', value: car.brandModel },
    { type: 'text', value: car.year},
    { type: 'text', value: car.plate},
    { type: 'color', value: car.color}
  ]

  elements.forEach(element => {
    const td = typeOfElements[element.type](element.value)
    tr.appendChild(td)
  })

  carTable.appendChild(tr)
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

function showCars() {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      const cars = result

      if (cars.length === 0) {
        showMessage('Nenhum carro encontrado')
        return
      }

      cars.map(car => {
        return addRowCar(car)
      })
    })
}

function addCar(car) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      image: car.image,
      brandModel: car.brandModel,
      year: car.year,
      plate: car.plate,
      color: car.color,
    })
  })
  .then(response => response.json())
  .then(response => {
    if (!response.error) {
      removeMessage()
      addRowCar(car)
    }
    if (response.error) showMessage(response.message, response.error)
  })
}

showCars()

carForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const getElement = getFormElement(event)

  const data = {
    image: getElement('image').value,
    brandModel: getElement('brand').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value
  }

  addCar(data)

  // const rowMessage = document.querySelector('[data-js="message"')
  // if (rowMessage) {
  //   carTable.removeChild(rowMessage)
  // }

  event.target.reset()
  image.focus()
})

