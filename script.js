const button1 = document.getElementById("button1");
const audioCtx = new AudioContext();
console.log(audioCtx);
let westwayAudio = new Audio();
let bootlegAudio = new Audio();
let HyperAudio = new Audio();
HyperAudio.src = "Sticky Fingers - Hyper.wav";
bootlegAudio.src = "bootlegAudio.wav";
WillowTreeAudio.src = "WillowTreeAudio.wav";
westwayAudio.src = "westwayAudio.wav";
button1.addEventListener("click", function () {
  westwayAudio.play();
  westwayAudio.addEventListener("playing", function () {
    console.log("No Divide- Sticky Fingers: started playing...");
  });
  westwayAudio.addEventListener("ended", function () {
    console.log("Finshed playing");
  });
});
button2.addEventListener("click", function () {
  bootlegAudio.play();
});
button3.addEventListener("click", function () {
  console.log("playing Hyper");
  HyperAudio.play();
});
button4.addEventListener("click", function () {
  console.log("playing Willow Tree");
  WillowTreeAudio.play();
});
