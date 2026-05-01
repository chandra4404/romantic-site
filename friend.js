const msg = `I didn’t plan on doing this
but you made it kind of hard to stay normal.

There’s something about you your vibe your way of talking
it’s just really attractive in a quiet way.

Not the loud kind, not the obvious kind
but the type that stays in someone’s mind without trying.

And I caught myself noticing you more than I expected.

I’m not here to complicate things or rush anything.
I just thought maybe we could start simple.

Maybe just talking more
maybe just being friends for now 🙂

And honestly. I’d like that.`;

let i = 0;

function typeMessage() {
  const el = document.getElementById("typingMessage");

  if (i < msg.length) {
    const char = msg.charAt(i);

    el.innerHTML += char === "\n" ? "<br>" : char;
    i++;

    const speed = char === "." ? 200 : Math.random() * 40 + 20;

    setTimeout(typeMessage, speed);
  }
}

window.onload = typeMessage;


// ===== FLOATING ELEMENT ENGINE (OPTIMIZED) =====
function createFloating(type) {
  const el = document.createElement("div");

  if (type === "heart") {
    el.className = "heart";
    el.innerHTML = "💖";
  } else {
    el.className = "flower";
    el.innerHTML = "🌸";
  }

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (Math.random() * 12 + 14) + "px";
  el.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 7000);
}

// 💖 hearts (slower + smoother)
setInterval(() => createFloating("heart"), 400);

// 🌸 flowers (lighter feel)
setInterval(() => createFloating("flower"), 700);


// ===== NO BUTTON (SMART ESCAPE) =====
function moveNo() {
  const btn = document.querySelector(".no");

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";

  btn.style.transition = "0.3s";
}
const btn = document.querySelector(".no");

document.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();

  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const distX = e.clientX - btnX;
  const distY = e.clientY - btnY;

  const distance = Math.sqrt(distX * distX + distY * distY);

  if (distance < 100) {
    const angle = Math.atan2(distY, distX);

    const moveX = -Math.cos(angle) * 40;
    const moveY = -Math.sin(angle) * 40;

    let newX = btn.offsetLeft + moveX;
    let newY = btn.offsetTop + moveY;

    // ✅ keep inside screen (this automatically makes it go UP at bottom)
    if (newX < 0) newX = 10;
    if (newX > window.innerWidth - btn.offsetWidth)
      newX = window.innerWidth - btn.offsetWidth - 10;

    if (newY < 0) newY = 10;
    if (newY > window.innerHeight - btn.offsetHeight)
      newY = window.innerHeight - btn.offsetHeight - 10;

    btn.style.position = "fixed";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
    btn.style.transition = "0.1s ease";
  }
});

// ===== PAGE TRANSITION (CINEMATIC) =====
function goNext() {
  const container = document.querySelector(".container");

  // zoom + blur effect
  container.style.transform = "scale(1.1)";
  container.style.filter = "blur(4px)";

  setTimeout(() => {
    container.classList.add("fade-out");
  }, 200);

  setTimeout(() => {
    window.location.href = "friend.html";
  }, 1200);
}
function goFinal() {
  window.location.href = "final.html";
}