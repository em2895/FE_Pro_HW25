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



let counter1 = 0;
bigFingerUp.addEventListener('click', () => {
    counter1++;
    resBigFingerUp.innerText = counter1;
})

let counter2 = 0;
sunglasses.addEventListener('click', () => {
    counter2++;
    resSunglasses.innerText = counter2;
})

let counter3 = 0;
love.addEventListener('click', () => {
    counter3++;
    resLove.innerText = counter3;
})

let counter4 = 0;
think.addEventListener('click', () => {
    counter4++;
    resThink.innerText = counter4;
})

let counter5 = 0;
shock.addEventListener('click', () => {
    counter5++;
    resShock.innerText = counter5;
})
