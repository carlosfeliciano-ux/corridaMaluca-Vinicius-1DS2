const car1 = document.getElementById('carro1');
const car2 = document.getElementById('carro2');

const buttonC1 = document.getElementById('botao1');
const buttonC2 = document.getElementById('botao2');

const poder1 = document.getElementById('poder1');
const poder2 = document.getElementById('poder2');

const reiniciar = document.getElementById('reiniciar');

const mensagem = document.getElementById('mensagem');
const chegada = document.querySelector('.chegada');

let positionCar1 = 0;
let positionCar2 = 0;
let terminou = false;


function acelerar(jogador) {
    if (terminou) return;

    const pistaWidth = car1.offsetParent.clienteWidth;
    const limite = pistaWidth - (chegada.offsetLeft + chegada);
    
    if (jogador === 1) {
        positionCar1 = Math.min(positionCar1 + 15, limite);
        car1.style.right = `${positionCar1}px`;

        if (positionCar1 >= limite) {
            mensagem.textContent = "🏆 Jogador 1 venceu!";
            terminou = true;
        }
    }

    if (jogador === 2) {
        positionCar2 = Math.min(positionCar2 + 15, limite);
        car2.style.right = `${positionCar2}px`;

        if (positionCar2 >= limite) {
            mensagem.textContent = "🏆 Jogador 2 venceu!";
            terminou = true;
        }
    }
}

//function acelerar acaba aqui

function boost(){
    if(terminou) return;
    
    if(jogador === 1){
        positionCar1 = Math.min(positionCar1 + 40, limite);
        car1.style.right = `${positionCar1}px`;

        if (positionCar1 >= limite) {
            mensagem.textContent = "🏆 Jogador 1 venceu!";
            terminou = true;
        }
    }

    if(jogador === 2){
        positionCar2 = Math.min(positionCar1 + 40, limite);
        car2.style.right = `${positionCar2}px`;

        if (positionCar2 >= limite) {
            mensagem.textContent = "🏆 Jogador 2 venceu!";
            terminou = true;
        }
    }
}


buttonC1.addEventListener("click", function () { acelerar(1) });
buttonC2.addEventListener("click", function () { acelerar(2) });

document.addEventListener("keydown", function (evento) {
    if (evento.repeat) return;

    const tecla = evento.key.toLowerCase();

    if (tecla === "a") {
        acelerar(1);
    }

    if (tecla === "l") {
        acelerar(2);
    }

    if(tecla === "d"){
        turbo(1);
    }
    
    if(tecla === "j"){
        turbo(2);
    }
});

reiniciar.addEventListener("click", function(){
    positionCar1 = 0;
    positionCar2 = 0;
    terminou = false;

    car1.style.right = "0px";
    car2.style.right = "0px";
})

