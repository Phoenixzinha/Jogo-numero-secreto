let numeroMax = 300;
let numeroSecreto;
let numeroTentativas;

const mensagemEl = document.getElementById("mensagem");
const catEl = document.getElementById("cat-img");
const trophyEl = document.getElementById("trophy-img");
const parabensEl = document.getElementById("parabens-texto");
const ruidoEl = document.getElementById("ruido");
const inputChute = document.getElementById("input-chute");
const btnChutar = document.getElementById("btn-chutar");
const btnJogarNovamente = document.getElementById("jogar-novamente");

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * numeroMax) + 1;
    numeroTentativas = 0;
    mensagemEl.textContent = `Escolha um número entre 1 e ${numeroMax}!`;
    catEl.classList.add("hidden");
    trophyEl.classList.add("hidden");
    parabensEl.classList.add("hidden");
    ruidoEl.classList.add("hidden");
    btnJogarNovamente.classList.add("hidden");
    inputChute.classList.remove("hidden");
    btnChutar.classList.remove("hidden");
    inputChute.value = "";
    inputChute.disabled = false;
    btnChutar.disabled = false;
    inputChute.focus();
    console.log("Novo número secreto:", numeroSecreto);
}

function jogar() {
    let chute = parseInt(inputChute.value);
    numeroTentativas++;

    if (chute < 1 || chute > numeroMax || isNaN(chute)) {
        mensagemEl.textContent = "Por favor, insira um número válido!";
        return;
    }

    if (chute === numeroSecreto) {
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemEl.textContent = `Parabéns, você acertou!! O número secreto é ${numeroSecreto} e você precisou de ${numeroTentativas} ${palavraTentativa}.`;
        catEl.classList.remove("hidden");
        trophyEl.classList.remove("hidden");
        parabensEl.classList.remove("hidden");
        ruidoEl.classList.remove("hidden");
        btnJogarNovamente.classList.remove("hidden");
        inputChute.classList.add("hidden");
        btnChutar.classList.add("hidden");
    } else if (chute > numeroSecreto) {
        mensagemEl.textContent = `O número secreto é menor que ${chute}. Tente novamente!`;
    } else {
        mensagemEl.textContent = `O número secreto é maior que ${chute}. Tente novamente!`;
    }

    inputChute.value = "";
    inputChute.focus();
}

inputChute.addEventListener("input", () => {
    if (inputChute.value.length > 0) {
        inputChute.placeholder = "";
    } else {
        inputChute.placeholder = "Digite seu número";
    }
});

btnChutar.addEventListener("click", jogar);
inputChute.addEventListener("keyup", (e) => {
    if (e.key === "Enter") jogar();
});
btnJogarNovamente.addEventListener("click", iniciarJogo);

iniciarJogo();
