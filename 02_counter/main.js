const counter = document.querySelector('h1');
const button = document.querySelector('button');
const H1result = document.getElementById('H1result');
const plusButton = document.getElementsByClassName('plusButton')[0];
// const plusButton = document.querySelector('.plusButton')[0];

let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     counter.textContent = count;
// });


button.onclick = () => {
    count++;
    counter.innerHTML = count;
}
