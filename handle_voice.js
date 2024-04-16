//containers to show the content
let contentImage = document.getElementById("contentImage");
let contentImage1 = document.getElementById("contentImage1");
let contentImage2 = document.getElementById("contentImage2");
let contentImage3 = document.getElementById("contentImage3");
let contentImage4 = document.getElementById("contentImage4");

//navigation buttons
let homeButton = document.getElementById("homeButton");
let waitingListButton = document.getElementById("waitingListButton");
let contactButton = document.getElementById("contactButton");
let whoWeAreButton = document.getElementById("whoWeAreButton");

let first_command = true;

//linking clicking on the buttons to the voice commands
document.getElementById("homeButton").addEventListener("click", function () {
  handleVoice("home");
});

document.getElementById("waitingListButton").addEventListener("click", function () {
  handleVoice("waiting list");
});

document.getElementById("contactButton").addEventListener("click", function () {
  handleVoice("contact");
});

document.getElementById("whoWeAreButton").addEventListener("click", function () {
  handleVoice("who we are");
});

export function handleVoice(command) {
  let contentText = document.getElementById("contentText");
  contentText.style.display = "block";

  let contentTitle = document.getElementById("contentTitle");
  let contentBody = document.getElementById("contentBody");

  if (command.includes("home")) {
    command = "home";
  }

  if (command.includes("we are")) {
    command = "who we are";
  }

  switch (command) {
    case "home":
      contentTitle.textContent = "Unlock the Natural Way of Language Learning";
      contentBody.innerHTML = `
            At parakeet, we revolutionize language learning by mimicking the natural learning process.
            <ul>
                <li>Learn in the same way you became a native speaker of your mother tongue.</li>
                <li>Experience the power of learning a language organically through engaging, AI-generated scenarios tailored to your interests and needs.</li>
                <li>Forget about screens, tedious grammar drills, and endless repetition without context.</li>
                <li>Immerse yourself in practical, everyday conversations, just like a native speaker would.</li>
            </ul>
            `;
      homeButton.classList.add("active");
      waitingListButton.classList.remove("active");
      contactButton.classList.remove("active");
      whoWeAreButton.classList.remove("active");

      contentImage1.classList.remove("hidden");
      contentImage2.classList.add("hidden");
      contentImage3.classList.add("hidden");
      contentImage4.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    case "waiting list":
      contentTitle.textContent = "Get Early Access";
      contentBody.textContent = "Ready to change how you learn languages? Join our waiting list";

      homeButton.classList.remove("active");
      waitingListButton.classList.add("active");
      contactButton.classList.remove("active");
      whoWeAreButton.classList.remove("active");

      contentImage2.classList.remove("hidden");
      contentImage1.classList.add("hidden");
      contentImage3.classList.add("hidden");
      contentImage4.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    case "contact":
      contentTitle.textContent = "Connect With Us";
      contentBody.innerHTML = `
      Have questions or want to know more? Our team is just a message away. Contact us via the form
        <br>
        <form id = "contactForm" action="https://docs.google.com/forms/u/5/d/182IvO9Cf05t-krEHsBKH9eBuM7D5ZX9b_qsNi4NhC1M/formResponse">
          <label for="email">Your email:</label><br>
          <input class="form-element" type="email" id="email" name="entry.2089760214" required><br>
          <label for="message">Message:</label><br>
          <textarea class="form-element" id="message" name="entry.785871569" required></textarea><br>
          <input class="form-element" type="submit" value="Send message">
        </form>
      `;
      document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Create an iframe
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.name = "hidden_iframe"; // Set a name for the iframe
        document.body.appendChild(iframe);

        // Set the iframe's name as the form's target
        this.target = "hidden_iframe"; // Use the iframe's name as the form's target

        // Submit the form
        this.submit();

        // Reset the form
        this.reset();

        // Display the message
        displayMessage();

        // Remove the iframe after a delay to ensure the form submission is complete
        setTimeout(function () {
          document.body.removeChild(iframe);
        }, 1000);
      });

      function displayMessage() {
        alert("Your message has been sent. We will get back to you soon!");
      }

      homeButton.classList.remove("active");
      waitingListButton.classList.remove("active");
      contactButton.classList.add("active");
      whoWeAreButton.classList.remove("active");

      contentImage3.classList.remove("hidden");
      contentImage1.classList.add("hidden");
      contentImage2.classList.add("hidden");
      contentImage4.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    case "who we are":
      contentTitle.textContent = "Our Story";
      contentBody.innerHTML = `We are technologists, and avid learners who believe in a world where language learning is as natural and engaging as conversation itself. Founded on the principles of cognitive science and AI, parakeet is designed to make you fluent by leveraging the natural methods that helped you learn your mother tongue.
        <div class="founders">
          <div class="founder">
            <img src="img/founders/alejh.png" alt="Founder 1" class="founder-image">
            <a href = "https://www.linkedin.com/in/alejandrocamus/" target = "_blank"> <p class="founder-name">Alejandro</p> </a>
          </div>
          <div class="founder">
            <img src="img/founders/mukesh.jpeg" alt="Founder 2" class="founder-image">
            <a href = "https://www.linkedin.com/in/mukesh-jaiswal-23b5b0a9/" target = "_blank"><p class="founder-name">Mukesh</p></a>
          </div>
          <div class="founder">
            <img src="img/founders/burcu.jpeg" alt="Founder 3" class="founder-image">
            <a href = "https://www.linkedin.com/in/burcu-baycan-900926176/" target = "_blank"><p class="founder-name">Burcu</p></a>
          </div>
          <div class="founder">
            <img src="img/founders/aman.png" alt="Founder 4" class="founder-image">
            <a href = "https://www.linkedin.com/in/aman-jaiswal-5b3354178/" target = "_blank"><p class="founder-name">Aman</p></a>
          </div>
        </div>
        
        `;

      homeButton.classList.remove("active");
      waitingListButton.classList.remove("active");
      contactButton.classList.remove("active");
      whoWeAreButton.classList.add("active");

      contentImage4.classList.remove("hidden");
      contentImage1.classList.add("hidden");
      contentImage2.classList.add("hidden");
      contentImage3.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    default:
      console.log("Command not recognized");
      if (first_command) {
        contentTitle.textContent = "Unlock the Natural Way of Language Learning";
        contentBody.innerHTML = `
            At parakeet, we revolutionize language learning by mimicking the natural learning process.
            <ul>
                <li>Learn in the same way you became a native speaker of your mother tongue.</li>
                <li>Experience the power of learning a language organically through engaging, AI-generated scenarios tailored to your interests and needs.</li>
                <li>Forget about screens, tedious grammar drills, and endless repetition without context.</li>
                <li>Immerse yourself in practical, everyday conversations, just like a native speaker would.</li>
            </ul>
        `;
        contentImage1.classList.remove("hidden");
        contentImage2.classList.add("hidden");
        contentImage3.classList.add("hidden");
        contentImage4.classList.add("hidden");
        contentImage.style.display = "none";
      }
      break;
  }
  first_command = false;
}
