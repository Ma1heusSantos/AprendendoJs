const p = document.getElementById('contador');
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
let cont = 0;

p.innerHTML = cont;

btn.addEventListener('click',function contar(){
  p.innerHTML = ++cont;
});
reset.addEventListener('click',function resetar(){
      p.innerHTML = 0;
      cont = 0;
});