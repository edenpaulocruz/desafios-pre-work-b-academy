const inputName = document.querySelector('[data-js="name"]')
const prepositions = ["de", "da", "do", "dos"]

inputName.addEventListener('input', (event) => {
  const arrayInputName = event.target.value
    .split(' ')
    .map(item => {
      return prepositions.includes(item)
        ? item.toLowerCase()
        : item.charAt(0).toUpperCase() + item.slice(1)
  })
  console.log(arrayInputName)
  event.target.value = arrayInputName.join(' ')
})
