const counter = document.querySelector('h1');
const button = document.querySelector('button');

let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     counter.textContent = count;
// });


button.onclick = () => {
    count++;
    counter.innerHTML = count;
}
