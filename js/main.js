const noBtn = document.getElementById("noBtn");
const bubu = document.getElementById("bubu");

if (noBtn) {
  document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
      e.clientX - rect.left,
      e.clientY - rect.top
    );

    if (distance < 120) {
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noBtn.style.position = "absolute";
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";

      bubu.src = "assets/bubu-sad.gif";
    }
  });
}

function yesClicked() {
  bubu.src = "assets/bubu-happy.gif";
  document.querySelector("h1").innerText =
    "I knew you love me bubbles 💕";

  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 1500);
}
