// Smooth typing flirting line
const text = "You seem a little dramatic and full of tantrums but honestly… it’s kinda cute 🎀🥰 I think I’m kinda falling for that";

let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
}

typeEffect();

// Go to next page (your friend proposal page)
function goNext() {
  window.location.href = "./friend.html";
}