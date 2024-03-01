const button = document.getElementById('submit')

const globalMessege = document.getElementById('globalMessege')

const  form = document.getElementById('form')

function validaInputs(inputA,inputB){
    if(inputA < inputB){
        return true
    }else{
        return false
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    button.addEventListener('click', () => {
        const inputA = document.getElementById('inputA').value
        const inputB = document.getElementById('inputB').value
        
        
        if(inputA < inputB){
            globalMessege.style.display = 'block'
            globalMessege.style.backgroundColor = 'green'
            globalMessege.innerText = 'Válido'
        }else{
            globalMessege.style.backgroundColor = 'red'
            globalMessege.style.display = 'block'
            globalMessege.innerText = 'Inválido'
        }
    })
})

