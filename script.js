const button1 = document.getElementById("button1");
let westwayAudio = new Audio();
westwayAudio.src = "westwayAudio.wav";
button1.addEventListener("click", function () {
  westwayAudio.play();
  console.log("click");
});
