let entrada = "10 20 20 8 25 3 0 30 1";

// let listaDePontuacao = entrada.split(" "); // separa o retorno por espaços

// let contagemRecord = 0; // quantas vezes bateu o Record, inciando de 0
// let posicaoPior = 0; // posição da pior pontuação, iniciando do 0
// let melhorPontuacao = listaDePontuacao[0]; // começa sendo a posição 0 (é como tirar o primeiro item da lista), para que o primeiro valor seja comparado, percorrendo a lista a partir do primeiro.
// // let piorPontuacao = listaDePontuacao[0]; // começa sendo a posição 0(é como tirar o primeiro item da lista), para que o primeiro valor seja comparado, percorrendo a lista a partir do primeiro.

// for (let ipontuacao = 1; ipontuacao < listaDePontuacao.length; ipontuacao ++) { // ipontuacao = 1, pois o valor do primeiro jogo não conta (posição 0)
    // const pontuacao = listaDePontuacao[ipontuacao];
    // if (parseFloat(pontuacao) > parseFloat(melhorPontuacao)) {
        // contagemRecord = contagemRecord+1; //incremento para acrescentar ao número de vezes em que o Record foi batido.
        // melhorPontuacao = pontuacao; // Se a pontuação for melhor do que a melhor pontuação, a nova melhor pontuação é o valor atual da pontuação.
    // }
    // if (parseFloat(pontuacao) < parseFloat(piorPontuacao)) {
        // posicaoPior = ipontuacao+1; // posição atual dentro da listaDePontuacao (novo pior valor), +1 pois a primeira posição é o número zero e a contagem de jogos começa do 1
        // piorPontuacao = pontuacao; // nova pior pontuação é igual à pontuacao atual.
    // }
// };

let listaDePontuacao = entrada.split(" "); // separa o retorno por espaços

let contagemRecord = 0; // quantas vezes bateu o Record, inciando de 0
let posicaoPior = 0; // posição da pior pontuação, iniciando do 0
let melhorPontuacao = listaDePontuacao[0]; // começa sendo a posição 0 (é como tirar o primeiro item da lista), para que o primeiro valor seja comparado, percorrendo a lista a partir do primeiro.
let piorPontuacao = listaDePontuacao[0]; // começa sendo a posição 0(é como tirar o primeiro item da lista), para que o primeiro valor seja comparado, percorrendo a lista a partir do primeiro.

listaDePontuacao.forEach((pontuacao,ipontuacao) => {
    
    if(ipontuacao>0){ // para desconsiderar a primeira psoição
        if (parseFloat(pontuacao) > parseFloat(melhorPontuacao)) {
            contagemRecord = contagemRecord+1; //incremento para acrescentar ao número de vezes em que o Record foi batido.
            melhorPontuacao = pontuacao; // Se a pontuação for melhor do que a melhor pontuação, a nova melhor pontuação é o valor atual da pontuação.
        }
        if (parseFloat(pontuacao) < parseFloat(piorPontuacao)) {
            posicaoPior = ipontuacao+1; // posição atual dentro da listaDePontuacao (novo pior valor), +1 pois a primeira posição é o número zero e a contagem de jogos começa do 1
            piorPontuacao = pontuacao; // nova pior pontuação é igual à pontuacao atual.
        }    
    }    
});
let resposta = [contagemRecord,posicaoPior];
console.log(resposta)