let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

let show = document.getElementById('show')






function add() {


    let form = document.getElementById('form');
    form.style.display = "block";
    btn.style.display = "none";

    document.getElementById('body')
    body.style.backgroundColor = "#8c8989";

    show.classList.remove('form')
    // show.innerHTML= '';


}


function creat() {
    form.style.display = "none";
    btn.style.display = "block";



    let name = document.getElementById('name').value
    let title = document.getElementById('title').value
    let task = document.getElementById('task').value;
    
    
    // Naya div banakar style dya
    let newBox = document.createElement('div');
    newBox.style.border = "1px solid #000";
    newBox.style.padding = "10px";
    newBox.style.marginTop = "10px";
    newBox.style.borderRadius="10px"
    body.style.backgroundColor = "white";



    // Content set hain
    newBox.innerHTML += `
    <h3>Name: ${name}</h3>
    <h3>Titile: ${title}</h3>
    <h3>Task: ${task}</h3>
    <button onclick="remove(this)">Clear</button>
    `;
    show.classList.add('form');

    // Show container mein add kar dena
    show.appendChild(newBox);

    // Form ke input clear
    document.getElementById('name').value = '';
    document.getElementById('title').value = '';
    document.getElementById('task').value = '';

}

function remove(btn) {
    let div = btn.parentElement;
    document.getElementById('show').removeChild(div);

}
