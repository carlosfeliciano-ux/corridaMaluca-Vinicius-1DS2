const car1 = document.getElementById('carro1');
const car2 = document.getElementById('carro2');

const buttonC1 = document.getElementById('botao1');
const buttonC2 = document.getElementById('botao2');
const reiniciar = document.getElementById('reiniciar');

const mensagem = document.getElementById('mensagem');
const chegada = document.querySelector('.chegada');

let car1R = 0;
let car2R = 0;
let terminou = false;

// Funções reutilizáveis para mover cada carro (servem tanto pro teclado quanto pros botões)
function moverCarro1() {
    if (terminou) return;
    car1R += 10;
    car1.style.right = `${car1R}px`;
    verificarVitoria();
}

function moverCarro2() {
    if (terminou) return;
    car2R += 10;
    car2.style.right = `${car2R}px`;
    verificarVitoria();
}

// Verifica se algum carro cruzou a linha de chegada usando a posição real na tela
function verificarVitoria() {
    const posChegada = chegada.getBoundingClientRect();
    const posCar1 = car1.getBoundingClientRect();
    const posCar2 = car2.getBoundingClientRect();

    // Como os carros estão indo para a esquerda (aumentando o 'right'),
    // eles vencem quando a borda esquerda deles alcança a borda direita da chegada
    if (posCar1.left <= posChegada.right) {
        mensagem.textContent = 'Carro 1 venceu!';
        terminou = true;
    } else if (posCar2.left <= posChegada.right) {
        mensagem.textContent = 'Carro 2 venceu!';
        terminou = true;
    }
}

// Controles pelo teclado
document.addEventListener('keydown', (e) => {
    const tecla = e.key.toUpperCase();

    if (tecla === 'A') moverCarro1();
    if (tecla === 'L') moverCarro2();
});

// Controles pelos botões na tela
buttonC1.addEventListener('click', moverCarro1);
buttonC2.addEventListener('click', moverCarro2);

// Botão de reiniciar
reiniciar.addEventListener('click', () => {
    car1R = 0;
    car2R = 0;
    terminou = false;

    car1.style.right = '0px';
    car2.style.right = '0px';
    mensagem.textContent = '';
});

