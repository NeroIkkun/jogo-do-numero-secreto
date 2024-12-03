// função é um corpo do código responsável em fazer uma ação.
let listaDeNumerosSorteados = [];
let numeroLimiteDaLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoEmTela (tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoEmTela('h1', 'Jogo do número secreto');
    exibirTextoEmTela('p', 'Escolha um número entre 1 e 10');

}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {

        exibirTextoEmTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoEmTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if(chute > numeroSecreto) {
            exibirTextoEmTela('p', 'O número do chute é menor.');
        }
        else{
            exibirTextoEmTela('p', 'O número do chute é maior.');
        }
        // tentativas = palavraTentativa + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * numeroLimiteDaLista + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimiteDaLista){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ 
        return gerarNumeroAleatorio(); 
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}