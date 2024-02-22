const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
        respostas: [
            "function: minhaFuncao()",
            "function = minhaFuncao()",
            "function minhaFuncao()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "int",
            "string",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
        respostas: [
            "print()",
            "log()",
            "console()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "&",
            ":",
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "/* Este é um comentário */",
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
        respostas: [
            "getElementByTagName()",
            "selectElementById()",
            "getElementById()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual função JavaScript é usada para converter uma string em um número inteiro?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para comparar se dois valores são iguais em JavaScript?",
        respostas: [
            "==",
            "=",
            "===",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método JavaScript é usado para adicionar um novo elemento HTML?",
        respostas: [
            "createElement()",
            "appendChild()",
            "createNode()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do seguinte código JavaScript: console.log(typeof 'hello');",
        respostas: [
            "'string'",
            "'number'",
            "'undefined'",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


// Coloca a pergunta na tela.
    quiz.appendChild(quizItem)
}