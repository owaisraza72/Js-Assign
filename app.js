
          let btn = document.getElementById('btn')
          let btn2 = document.getElementById('btn2')

          let show = document.getElementById('show')
          
          
          
          


          function add(){

          
            let form = document.getElementById('form');
            form.style.display="block";
            btn.style.display="none";
           
            show.classList.remove('form')
          // show.innerHTML= '';
             

          }

          
function creat()   { 
        form.style.display="none";
            btn.style.display="block";


          
           let name = document.getElementById('name').value
          let taskNo = document.getElementById('num').value     
          let task = document.getElementById('task').value;
            // Naya div banakar style de rahe hain
    let newBox = document.createElement('div');
    newBox.style.border = "1px solid #000";
    newBox.style.padding = "10px";
    newBox.style.marginTop = "10px";
          

    // Content set karte hain
    newBox.innerHTML += `
      <h3>Name: ${name}</h3>
      <h3>Task No: ${taskNo}</h3>
      <h3>Task: ${task}</h3>
      <button onclick="clearTask(this)">Clear</button>
    `;
show.classList.add('form'); 

    // Show container mein add kar dena
show.appendChild(newBox);

    // Form ke input clear 
  document.getElementById('name').value = '';
  document.getElementById('num').value = '';
  document.getElementById('task').value = '';
                           
}

function clearTask(btn) {
    let div = btn.parentElement;
    document.getElementById('show').removeChild(div);
    
  }
