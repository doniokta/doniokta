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

  // Show modal
  document.getElementById("contact-btn").addEventListener("click", () => {
    document.getElementById("contact-modal").classList.remove("hidden");
  });

  // Close modal
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("contact-modal").classList.add("hidden");
  });

  // Handle form submission
  const form = document.querySelector("#contact-modal form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    const nameInput = form.querySelector('input[type="text"]');
    const messageInput = form.querySelector('textarea');

    const name = nameInput.value.toUpperCase();
    const message = messageInput.value;

    const telegramToken = '8174696530:AAFWu_EFfiIu0SaocPdgFtGNaMpVQksthfU'; // Replace with your bot token
    const chatId = '1091637339'; // Replace with your chat ID
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const payload = {
      chat_id: chatId,
      text: `Name: ${name}\nMessage: ${message}`
    };

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Show notification
        const notification = document.getElementById("notification");
        notification.classList.remove("hidden");
        setTimeout(() => {
          notification.classList.add("hidden");
        }, 3000); // Hide after 3 seconds

        // Clear form fields
        nameInput.value = '';
        messageInput.value = '';
      } else {
        alert('Sucess sending message.');
      }
    } catch (error) {
      alert('Error sending message.');
    }

    // Close modal
    document.getElementById("contact-modal").classList.add("hidden");
  });
});
