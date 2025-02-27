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

const transformToLocalLowerCase = () => {
    arrayNomes.map(jogador => {
        jogador.nome = jogador.nome.toLocaleLowerCase()
        jogador.time = jogador.time.toLocaleLowerCase()
    })
}

transformToLocalLowerCase()
console.log(arrayNomes)