// o exercicio pede pra eu fazer uma percorreção do numero 1 até o numero inteiro que eu escolher
// passo 1: criar o Array
//mostrar com do wile os numeros de 1 até o 20
// com For mostrar os numeros pares
const arrayNumbers = [0,1,2,3,4,5,6,7,8,9,10]

let indiceWile = 1

while (indiceWile < arrayNumbers.length) {
    const element = arrayNumbers[indiceWile] 
    indiceWile ++  
    
    console.log(element)
}






// 2 pasasos aqui: logica e percorreção
const evenNumbers = (numero) => {
     if(numero <2) return false 
     
    for (let i = 2; i < numero ; index++) {
        if(numero % 2){
            return false
        }
        
            return true
    }
    
}

const numbersToFor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const response = () => {
    for (let index = 0; index < numbersToFor.length; index++) {
        const elementToFor = numbersToFor [index];
            if(evenNumbers(elementToFor)){
                console.log(numbersToFor[index])
            }    
    }
}



response()


//numeros pares (se for divisivel por 2)
