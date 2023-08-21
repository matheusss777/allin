function calcular(event){
    event.preventDefault()

    let alcoolInput = document.getElementById('alcool').value 
    let gasolinaInput = document.getElementById('gasolina').value

    let conetntResult = document.getElementById('content-result')

    let textResult = document.getElementById('text-result')
    let gasolinaSpan = document.getElementById('gasolina-result')
    let alcoolSpan = document.getElementById('alcool-result')

    let calculo = alcoolInput / gasolinaInput

    if(calculo < 0.7){
        textResult.innerHTML = 'compensa usar Alcool'
    }
    else{
        textResult.innerHTML = 'Compensa usar Gasolina'

    }
    gasolinaSpan.innerHTML = 'Gasolina R$' + gasolinaInput
    alcoolSpan.innerHTML = 'Alcool R$' + alcoolInput
  
    conetntResult.classList.remove('hide')

    
}