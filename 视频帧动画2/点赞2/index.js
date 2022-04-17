const image = document.getElementById("heart");
const button = document.getElementById("btn-stop");
   
button.onclick = function() {
  if (this.value == 'pause') {
    image.classList.add('stop');
    this.value = 'paly';
  } else {
    image.classList.remove('stop');
    this.value = 'pause';
  }
};