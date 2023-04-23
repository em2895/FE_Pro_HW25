const bigFingerUp = document.getElementById("bigFingerUp");
const resBigFingerUp = document.getElementById("resBigFingerUp");
const sunglasses = document.getElementById("sunglasses");
const resSunglasses = document.getElementById("resSunglasses");
const love = document.getElementById("love");
const resLove = document.getElementById("resLove");
const think = document.getElementById("think");
const resThink = document.getElementById("resThink");
const shock = document.getElementById("shock");
const resShock = document.getElementById("resShock");

function counter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter1 = counter();
bigFingerUp.addEventListener('click', () => {
   resBigFingerUp.innerText = counter1();
})

const counter2 = counter();
sunglasses.addEventListener('click', () => {
    resSunglasses.innerText =  counter2();
})

const counter3 = counter();
love.addEventListener('click', () => {
    resLove.innerText = counter3();
})

const counter4 = counter();
think.addEventListener('click', () => {
    resThink.innerText = counter4();
})

const counter5 = counter();
shock.addEventListener('click', () => {
    resShock.innerText = counter5();
})
