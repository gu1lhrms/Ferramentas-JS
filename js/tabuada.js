let botoes = ''
for (let i = 0; i <= 10; i++) {
    let botao =
        `<button name="botao" class="btn btn-outline-dark fw-semibold" onclick="tabuada(${1});">${i}</button>`;
    // console.log(i);
    botoes = botoes + '&nbsp;' + botao;
    
    // botoes+=`&nbps;${botao}`;
    // console.log(botoes);
}

document.getElementById("valores").innerHTML = botoes;

const arrayBotao = document.getElementsByName("botao");
console.log(typeof arrayBotao);
console.log(arrayBotao);
console.log(arrayBotao.length);
console.log(arrayBotao[10].innerText);

arrayBotao.forEach(function (botaoAtual) {
    // console.log(botaoAtual.innerText);
    botaoAtual.addEventListener("mouseover", function () {
        // alert(`Olá ${botaoAtual.innerText}`);
        let tab = botaoAtual.innerHTML;
        let conjunto = "";
        for (let i = 0; i <= 10; i++) {
            conjunto += `${tab} x ${i} = ${tab * i}<br>`;
        }

        document.getElementById("resultado").innerHTML = conjunto;
    });

    botaoAtual.addEventListener("mouseleave", function () {
        document.getElementById("resultado").innerHTML = "";
    });
})