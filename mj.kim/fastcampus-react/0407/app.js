import "./style.css";

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    console.log('open click');
    modal.style.display = 'flex';
}

close.onclick = () => {
    console.log('close click');
    modal.style.display = 'none';
}

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

// increase.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current + 1;
//     console.log('increase click');
// };
// decrease.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current - 1;
//     console.log('decrease click');
// };

// class Food {
//     constructor(name) {
//         this.name = name;
//         this.brands = [];
//     }
//     addBrand(brand) {
//         this.brands.push(brand)
//     }
//     print() {
//         console.log(`${this.name}을 파는 음식점들 : `);
//         console.log(this.brands.join(', '));
//     }
// }

// const pizza = new Food('피자');
// pizza.addBrand('피자헛');
// pizza.addBrand('도미노 피자');

// const chicken = new Food('치킨');
// chicken.addBrand('굽네치킨');
// chicken.addBrand('BBQ');

// pizza.print();
// chicken.print();