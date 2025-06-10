function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
window.addEventListener("DOMContentLoaded", () => {
  const introText = "Welcome to my CV website!";
  const target = document.querySelector("#intro-text");

  if (target) {
    target.textContent = "";
    let index = 0;
    const type = () => {
      if (index < introText.length) {
        target.textContent += introText.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };
    type();
  }
});