const arrayNumbers = [1, 2, 3, 4, 6, 7, 8, 9, 10]

const searchMissingNumbers = () => {
     arrayNumbers.splice(4,0,5) // splice tem 3 etapas indice, quantos itens remover e valor agregado
     //nesse caso indice? 4, quantos itens remove?  0 e valor? 5 
}

searchMissingNumbers()
console.log(arrayNumbers)