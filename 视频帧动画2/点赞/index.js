const heart = document.getElementById("heart");

heart.addEventListener('click', function () {
  this.classList.toggle('clicked');
})