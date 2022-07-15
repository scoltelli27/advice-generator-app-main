const adviceId = document.getElementById("advice-id");
const adviceTxt = document.getElementById("advice-text");
const dice = document.getElementById("dice");

fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => {
    adviceId.textContent = `ADVICE #${data.slip.id}`;
    adviceTxt.textContent = `"${data.slip.advice}"`;
  });

dice.addEventListener("click", () => {
  window.location.reload();
});
