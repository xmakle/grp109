 document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    formMessage.innerHTML = ""; // reset messages

    if (!name || !email || !message) {
      formMessage.innerHTML = "<p class='error'>Please fill out all fields.</p>";
      return;
    }

    if (!validateEmail(email)) {
      formMessage.innerHTML = "<p class='error'>Please enter a valid email address.</p>";
      return;
    }
    // Completely block any input containing html tags
    const tagPattern = /<[^>]*>/g;
    if (tagPattern.test(name) || tagPattern.test(message)) {
      formMessage.innerHTML = "<p class='error'>HTML tags are not allowed in Name or Message fields.</p>";
      return;
    }
    // Simulate sending
    formMessage.innerHTML = "<p class='success'>Thank you! Your message has been sent.</p>";
    document.getElementById("contactForm").reset();
    });

    function validateEmail(email) {
      // Regex for email validation
      const re = /^[^@]+@[^@]+\.[^@]+$/;
      return re.test(email.toLowerCase());
    }

