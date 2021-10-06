var sorteio = Math.round(Math.random()*10);

var input = document.querySelector('#number');

function verificarSorteio(){
    if (input.value == sorteio){
        alert(`Parabéns você acertou o número sorteado foi ${sorteio}`);
    }
    else{
        alert("Você Errou tente novamente :( !");
    }
};

var verificar = document.querySelector(".verificar");

verificar.addEventListener("click",verificarSorteio);