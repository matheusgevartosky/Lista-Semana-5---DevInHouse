const button = document.querySelector('button')

button.addEventListener('click', () =>{
    const inputsCollection = document.querySelectorAll('input')
    const inputs = Array.from(inputsCollection)
    let span
    
    let grupo1 = inputs.filter((inputEmQuestao) => {
        const valor = parseFloat(inputEmQuestao.value)
        if(
            valor >=0 &&
            valor <=1
        ){
            return true
        }else{
            return false
        }
    })
    grupo1 = grupo1.map((inputEmQuestao) => {
        const valor = parseFloat(inputEmQuestao.value)
        document.querySelectorAll('span').forEach((item) => item.remove())
        
        span = document.createElement('span')
            const corDinamica = '#' + Math.floor(valor * 16777215).toString(16);
            span.innerText = corDinamica
            span.style.backgroundColor =corDinamica
            return [span, inputEmQuestao]
    })
    grupo1.forEach((item) => {
        const span = item [0]
        const input = item[1]

        input.insertAdjacentElement('afterend', span)
    })


    const grupo2 = inputs.filter((inputEmQuestao) => {
        if(
            !(parseFloat(inputEmQuestao.value) >= 0 
            && parseFloat(inputEmQuestao.value) <= 1)
        ){
            return inputEmQuestao;
        }
    })
    grupo2.forEach((i) => {
        i.style.border = "3px solid red"
    })



}) 

