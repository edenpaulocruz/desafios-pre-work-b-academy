const carForm = document.querySelector('[data-js="car-form"]')
const carTable = document.querySelector('[data-js="car-table"')

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName]
}

carForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const getElement = getFormElement(event)

  const elements = [
    { type: 'image', value: getElement('image-url').value },
    { type: 'text', value: getElement('brand-model').value },
    { type: 'text', value: getElement('year').value},
    { type: 'text', value: getElement('plate').value},
    { type: 'color', value: getElement('color').value}
  ]

  console.log(elements)
})

// function printElementNames(form) {
//   Array.from(form.elements).forEach(element => {
//     if (element.type !== 'submit') {
//       console.log(`${element.name}: ${element.value}`)
//     }
//   })
// }
