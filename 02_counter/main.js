const button = document.querySelector('button');
const resultH1 = document.getElementById('resultH1');
// const plusButton = document.getElementsByClassName('plusButton')[0];
// const plusButton = document.querySelector('.plusButton')[0];

let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     counter.textContent = count;
// });


// button.onclick = () => {
//     count++;
//     counter.innerHTML = count;
// }

resultH1.innerHTML = count;

function plus(number=1) {
    count+=number;
    resultH1.innerHTML = count;
}

// function plus2() {
//     count += 2;
//     resultH1.innerHTML = count;
// }

// function minus() {
//     count--;
//     resultH1.innerHTML = count;
// }