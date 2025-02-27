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

const useTostring = () => {
    arrayNomes.map(jogador=> {
        jogador.nome = jogador.nome.toString
        jogador.time = jogador.time.toString
    })
}

useTostring()

console.log(arrayNomes)