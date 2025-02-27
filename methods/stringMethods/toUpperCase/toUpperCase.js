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

console.log(arrayNomes)

const transformUpperCase = () => {
    arrayNomes.map(jogador => {
      jogador.nome = jogador.nome.toUpperCase()
      jogador.time = jogador.time.toUpperCase() //lembra jogador.time vc declara o objeto q quer manipular e dps o que voce quer fazer com o objeto capturado
    })
}

transformUpperCase()

console.log(arrayNomes)


