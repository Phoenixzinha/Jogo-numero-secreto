alert('Seja bem-vindo(a) ao jogo do número secreto!');

let numeroMax = 300;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log('Novo número secreto:', numeroSecreto);
let chute;
let numeroTentativas = 1;

while (true) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}:`);

    if (chute === null) {
        alert("Jogo cancelado");
        break; 
    }

    chute = parseInt(chute);

    if (isNaN(chute) || chute < 1 || chute > numeroMax) {
        alert("Por favor, insira um número válido!");
        continue; 
    }

    if (chute === numeroSecreto) {
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Parabéns, você acertou!! O número secreto é ${numeroSecreto} e você precisou de ${numeroTentativas} ${palavraTentativa}.`);
        break;  
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        numeroTentativas++;
    }
}
