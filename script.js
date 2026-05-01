// Smooth typing flirting line
const text = "soo well from what we've taked so far, you seem a little sassy and a little lovely and i genuinely like that hope you also feeling the same otherwise i might be the only one enjoying this a little too much👉👈 ";

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