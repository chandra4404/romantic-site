// 💖 Floating hearts (smooth + not spammy)
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 14) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);


// 😏 NO button avoids click
function moveNo() {
  const btn = document.querySelector(".no");

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.style.transition = "0.3s";
}
function option1() {
  window.location.href = "reveal.html";
}

function option2() {
  window.location.href = "reveal.html";
}

// No button (still playful escape)
function moveNo() {
  const btn = document.querySelector(".no");

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.style.transition = "0.3s";
}

// 💖 YES button reaction (mini animation)
function sayYes() {
  const text = document.getElementById("response");

  text.innerHTML = "I knew you wouldn’t say no 😌";

  // heart burst
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }, i * 80);
  }
}