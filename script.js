const car1 = Document.getElementByID('carro1');
const car2 = Document.getElementByID('carro2');

let car1Right = 0;
let car2Right = 0;

car1.addEventListener('keyup', (e) => {
    if(toUpperCase(e.key) === 'A'){
        car1.style.right += `${car1Right += 10}px`;
    }
})

car2.addEventListener('keyup', (e) => {
    if(toUpperCase(e.key) === 'L'){
        car2.style.right += `${car2Right += 10}px`;
    }
})