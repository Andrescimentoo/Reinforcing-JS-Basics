const arrayNomes = [
    
    { nome:"Messi",
      time:"Barcelona"
    },
    
    { nome:"Suarez",
      time:"Barcelona"
    },
    
    { nome:"Neymar",
      time:"Barcelona"
    }
]

const useSlice = () => {
    arrayNomes.map(jogador => {
        jogador.nome = jogador.nome.slice()
        jogador.time = jogador.time.slice()
    })
}

useSlice()

console.log(arrayNomes)