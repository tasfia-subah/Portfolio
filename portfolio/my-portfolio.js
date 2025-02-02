function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hours = new Date().getHours();
  let greetingText = "Hello!";

  if (hours < 12) {
    greetingText = "Good Morning!";
  } else if (hours < 18) {
    greetingText = "Good Afternoon!";
  } else {
    greetingText = "Good Evening!";
  }

  greetingElement.textContent = greetingText;
}

updateGreeting();
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_29vpb4n", // Add your EmailJS service ID
      "template_lyu9lgm", // Add your EmailJS template ID
      {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }
    );

    alert("Message sent successfully!");
    e.target.reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message. Please try again.");
  }
});
