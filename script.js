// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typing-text");
  const text = "IT Support and IT Technician";
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust speed if needed
    }
  }

  type();
});

// Loading screen hide after load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading");
  loadingScreen.style.display = "none";
});
