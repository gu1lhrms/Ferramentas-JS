let botoes = ''
    for(let i=0; i<=10; i++){
        let botao = 
    `<button class="btn btn-outline-dark" onclick="tabuada(${1});">${i}</button>`;
        console.log(i);
        botoes = botoes + '&nbsp;' + botao;
        // botoes+=`&nbps;${botao}`;
        console.log(botoes)
    }

    document.getElementById("valores").innerHTML=botoes;
