let button = 0;

function increase(){
  button++;
}

setInterval(function update(){
  document.getElementById('button').innerHTML = button;
});
