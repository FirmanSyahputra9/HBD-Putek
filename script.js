function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function() {
  document.getElementById('animatedNumber').style.backgroundColor = getRandomColor();
}, 1000);

const video = document.querySelector('video');

video.onended = function() {
    this.load();
    this.play();
};