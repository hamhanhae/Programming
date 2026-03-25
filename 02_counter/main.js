const counter = document.querySelector('h1');
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

function plus() {
    count++;
    resultH1.innerHTML = count;
}
