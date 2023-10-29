'use strict'

const esportes = [
    {
        nome: 'Futsal',
        imagem: 'futsal.jpg'
    },
    {
        nome: 'Vôlei',
        imagem: 'volei.jpg'
    },
    {
        nome: 'Ultimate Frisbee',
        imagem: 'frisbee.jpg'
    },
    {
        nome: 'Corrida em revezamento',
        imagem: 'corrida.jpg'
    },
    {
        nome: 'Arremesso de peso',
        imagem: 'arremesso.jpg'
    },
    {
        nome: 'Embaixadinha',
        imagem: 'embaixadinha.jpg'
    },
    {
        nome: 'Pula corda ',
        imagem: 'corda.png'
    },
    {
        nome: 'Cabo de garra',
        imagem: 'caboDeGarra.jpg'
    },
    {
        nome: 'Xadrez',
        imagem: 'xadrez.jpg'
    },
    {
        nome: 'UNO',
        imagem: 'uno.jpg'
    },
    {
        nome: 'Tênis de mesa',
        imagem: 'tenis.jpg'
    }

]
function mostrarCards (esportes){
    const cardContainer = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')
    const imagem = document.createElement('img')
    imagem.src = `./img/${esportes.imagem}`
    imagem.alt = esportes.nome
    const cardDescription = document.createElement('div')
    cardDescription.classList.add('card-description')

    const nome = document.createElement('h2')
    nome.textContent = esportes.nome

    cardDescription.replaceChildren(nome)
    card.replaceChildren(imagem, cardDescription)
    cardContainer.appendChild(card)
}

function redirecionarParaPagina() {
    const selectedValue = document.getElementById("classes").value;

    if (selectedValue === "oitavoA") {
        window.location.href = "./oitoA.html"
   
    } else if (selectedValue === "oitavoB") {
        window.location.href = "./oitoB.html"
    } else if (selectedValue === "nonoA") {
        window.location.href = "./nonoA.html"
    } else if (selectedValue === "nonoB") {
        window.location.href = "./nonoB.html"
    }
}
const classes = document.getElementById("classes")
esportes.forEach(mostrarCards)
classes.addEventListener('click', redirecionarParaPagina)
