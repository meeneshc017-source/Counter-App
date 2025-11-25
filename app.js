let countElement = document.getElementById('count');
let button = document.getElementById('myButton');
let saveButton = document.getElementById('saveButton');
let previousEntries = document.getElementById('previousEntries');
let count = 0;

function incrementCount() {
    count++;
    countElement.innerText = count;
 
}

function save() {
    saveButton.innerText="Final count: " + count;
     previousEntries.textContent += count + " - ";
     countElement.innerText = 0;
        count = 0;
}
 

button.addEventListener('click', incrementCount);
saveButton.addEventListener('click', save);
// button.addEventListener('click', reset);
// saveButton.addEventListener('click', ()=>{
//     previousEntries.textContent += count + " - ";
// });