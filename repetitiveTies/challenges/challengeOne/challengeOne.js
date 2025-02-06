//o que sao numeros primos
// imprimir o 2,3,5,7
// criar uma funçao que vai saber quais os nuemros primos
// um numero for considerado primo se ele for divisivel por 1 e por ele mesmo

const numbersPrimes = (numero) => {
    if (numero < 2) return false; // numeros menores que 2 nao sao primos
 
    for (let i = 2; i < numero; i++) {
    if (numero % i === 0){ // traduzindo: se o resultado da divisao for equivalente a um resto, false ou seja nao eh primo
        return false 
    }
      
 }      
        return true  
}

const response = () => {
    const arrayNumbers = [0,1,2,3,4,5,6,7,8,9,10] 
    
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
       
        if(numbersPrimes(element)){
            console.log(arrayNumbers[index])
        }
    }
    
}

response ()

console.log(Math.sqrt(9))


