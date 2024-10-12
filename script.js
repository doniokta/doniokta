<p id="typing-text" class="text-lg md:text-xl mb-4"></p>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-text");
    const text = "IT Support and IT Technician";
    let index = 0;

    function type() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      }
    }

    type();
  });
</script>
