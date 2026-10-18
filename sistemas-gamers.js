const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n===========================");
    console.log("------ SISTEMAS GAMERS ------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cálculo da Média da Equipe");
    console.log("5 - Atualizar Pontos");
    console.log("6 - Sair");
}

function mostraEquipe() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadrastarJogador() {
    let nomeJogador = prompt("Digite o nome do Jogador: ");
    let funcaoJogador = prompt("Digite a Função no Time: ");
    let pontuacaoJogador = Number(prompt("Digite a Pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        };

        time.push(recruta);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
    }
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum Jogador encontrado.");
        return;
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador Deletado com Sucesso!");
}

function calculoDaMedia() {
    if (time.length === 0) {
        console.log("Nenhum Jogador encontrado.");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;
    console.log("O time possuí uma pontuação média de:", mediaPontos);
}

function atualizarPontuacao() {
    if (time.length === 0) {
        console.log("Nenhum jogador encontrado.");
        return;
    }

    console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
    let nomeBusca = prompt("Qual jogador deseja atualizar? ");
    let jogadorEncontrado = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome.toLowerCase() === nomeBusca.toLowerCase()) {
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

            if (isNaN(pontosNovos) || pontosNovos < 0) {
                console.log("Pontuação inválida!");
                return;
            }

            jogadorAtual.pontuacao += pontosNovos;

            console.log("SUCESSO! A pontuação de " + jogadorAtual.nome + " subiu para " + jogadorAtual.pontuacao + " pontos!");
            
            jogadorEncontrado = true;
            break;
        }
    }

    if (!jogadorEncontrado) {
        console.log("Jogador não encontrado na equipe.");
    }
}

while (continuar === true) { 
    mostrarMenu();
    let opcao = prompt("Digite a sua opção: ");

    if (opcao === "1") {
        cadrastarJogador();
    } else if (opcao === "2") {
        deletarJogador();
    } else if (opcao === "3") {
        mostraEquipe();
    } else if (opcao === "4") {
        calculoDaMedia();
    } else if (opcao === "5") {
        atualizarPontuacao();
    } else if (opcao === "6") {
        continuar = false;
        console.log("Saindo do sistema... Até logo!");
    } else {
        console.log("Opção inválida, digite outra opção...");
    }
}