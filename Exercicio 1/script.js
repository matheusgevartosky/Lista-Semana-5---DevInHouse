const button = document.querySelector("button")
let soma = 0

button.addEventListener('click', ()=> {

    const nodelist = document.querySelectorAll('input')
    
    const arrayDeInputs = Array.from(nodelist)

    arrayDeInputs.forEach(input =>{
        input.disabled = true
        const valor = parseInt(input.value)
        if(!isNaN(valor)){
            soma = soma + valor
        }
    })


    const h1 = document.createElement('h1')
    h1.innerText = soma;
    document.body.appendChild(h1)
})