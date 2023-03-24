const btn = document.querySelector('button')
const input = document.getElementById('name')
const radios = document.querySelectorAll('input[type="radio"]')
const errorType = document.querySelector('.error-type')
const errorPick = document.querySelector('.error-pick')
const activation = document.querySelector('.act')



radios.forEach(radio => {
    radio.addEventListener('input', () => {
      errorPick.textContent = '';
    })
  })
input.addEventListener('input', () => {
    errorType.textContent = ''
})
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let status = 0

    if (input.value.length < 5) {
        errorType.textContent = 'Имя должно быть не менее 5 символов'
    } else if ( !(input.value[0] >= 'a' && input.value[0] <= 'z') && !(input.value[0] >= '0' && input.value[0] <= '9') ) {
        errorType.textContent = 'Имя должно начинаться с маленькой буквы или цифры'
    } 
    else if (input.value.includes(' ')) {
        errorType.textContent = 'Имя не должно содержать пробелы'
    } 
    else {
        errorType.textContent = ''
        status += 1
    }
    let selectedRadio = null
    radios.forEach(function (radio) {
        if (radio.checked) {
            selectedRadio = radio
            status += 1
        }
    })
    if (!selectedRadio) {
        errorPick.textContent = 'Обязательно нужно сделать выбор'
        return
    }
    for (let i = 0; i < status; i++){
        if (status === 2) {
            activation.textContent = 'Активация успешна'
        }
        else {
            activation.textContent = ''   
        }
    }

})



