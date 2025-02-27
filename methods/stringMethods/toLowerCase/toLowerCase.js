console.log("hello word")


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

const transformToLowerCase = () => {
    arrayNomes.map(jogador =>{
        jogador.nome = jogador.nome.toLowerCase()
        jogador.time = jogador.time.toLowerCase()
    })
}

transformToLowerCase() 

console.log(arrayNomes)