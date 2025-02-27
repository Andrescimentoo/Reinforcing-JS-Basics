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
const transformCharCodeAt = () => {
    arrayNomes.map(jogador => {
        jogador.nome = jogador.nome.charCodeAt
        jogador.time = jogador.time.charCodeAt
    })
}

transformCharCodeAt()
console.log(arrayNomes)


