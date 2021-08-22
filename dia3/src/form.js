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
