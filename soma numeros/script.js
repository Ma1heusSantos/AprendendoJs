const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const button = document.getElementById('button');
const result = document.getElementById('resultado');

button.addEventListener("click",()=>{
    result.innerHTML = parseInt(n1.value) + parseInt(n2.value)
});



