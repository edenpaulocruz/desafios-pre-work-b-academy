import './style.css'

const url = 'http://localhost:3333/cars'
const carTable = document.querySelector('[data-js="car-table"')

fetch(url)
  .then(result => result.json())
  .then(result => {
    const cars = result
    if (cars.length === 0) {
      const tr = document.createElement('tr')
      const td = document.createElement('td')
      td.textContent = 'Nenhum carro encontrado'
      td.colSpan = 5;
      tr.appendChild(td)
      carTable.appendChild(tr)
      return
    }
    return cars.map(function (car) {
      console.log(car)
    })
  })
