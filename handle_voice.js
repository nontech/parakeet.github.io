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
        <div>
          <div>No screens, No grammar drills, No rote memorization & No endless repetition without context</div>

          <div>
            Learn Languages Like You Learned Your First
          </div>
      
          <div>Immerse yourself in practical, everyday conversations, just like a native speaker would.</div>
      
          <div>Parakeet uses advanced AI to simulate real-life conversations, so you learn to speak by actually speaking.</div>
        </div>
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
      contentBody.innerHTML = `
        <div>
          <div>Parakeet creates personalized learning experiences that adapt to your pace and style using advanced AI.</div>

          <div>Subscribers gain early access to our beta, special launch promotions, and insights into our AI-driven approach.</div>

          <div>Join Our Exclusive Waiting List</div>

          <div>Ready to change how you learn languages? Join our waiting list</div>

          <br>
          <form id="subscriptionForm" action="https://docs.google.com/forms/u/5/d/e/1FAIpQLSdDx3ou_lS9Q7VIXvBfXF1qEmU4SUlPpdKVWaksdy3_QTmn7g/formResponse">
          <label for="email">Your email:</label><br>
          <input class="form-element" type="email" id="emailSubscription" name="emailAddress" required><br>
          <input class="form-element" type="submit" value="Subscribe">
        </form>
        </div>
      `;

      document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the form from submitting the traditional way

        var formData = new FormData(this);

        fetch(this.action, {
          method: "POST",
          body: formData,
          mode: "no-cors", // Google Forms require no-cors mode for cross-origin requests
        })
          .then((response) => {
            alert("You have been added to the waiting list! We will notify you when we are ready to launch.");
          })
          .then((data) => {
            document.getElementById("emailSubscription").value = "";
          })
          .catch((error) => console.error("Error:", error));
      });

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

        <div>Have questions, suggestions or want to know more?</div>
        
        <div>Or just want to chat about your language journey, we’re all ears.</div>

        <div>Drop us a message anytime.</div>

        <br>
        <form id = "contactForm" action="https://docs.google.com/forms/u/5/d/182IvO9Cf05t-krEHsBKH9eBuM7D5ZX9b_qsNi4NhC1M/formResponse">
          <label for="email">Your email:</label><br>
          <input class="form-element" type="email" id="email" name="emailAddress" required><br>
          <label for="message">Message:</label><br>
          <textarea class="form-element" id="message" name="entry.785871569" required></textarea><br>
          <input class="form-element" type="submit" value="Send message">
        </form>
      `;

      document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the form from submitting the traditional way

        var formData = new FormData(this);

        fetch(this.action, {
          method: "POST",
          body: formData,
          mode: "no-cors", // Google Forms require no-cors mode for cross-origin requests
        })
          .then((response) => {
            alert("Your message has been sent! We will get back to you soon.");
          })
          .then((data) => {
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          })
          .catch((error) => console.error("Error:", error));
      });

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
      contentBody.innerHTML = `
        <div>Our mission is to recreate the natural way of learning languages through advanced AI.</div>

        <div>We believe in empowering people to speak any language confidently.</div>

        <div>Founded on the principles of cognitive science and AI, Parakeet is designed to make you fluent by leveraging the natural methods that helped you learn your mother tongue.</div>

        <div class="founders">
          <div class="founder">
            <img src="img/founders/alejh.png" alt="Founder 1" class="founder-image">
            <div class="founder-name">Alejandro</div>
            <div class="languages-known">Languages I know: Spanish, English, some German</div>
            <div class="languages-wishlist">Wants to learn: German (C1), Tamil, Bengali</div>
            <a href = "https://www.linkedin.com/in/alejandrocamus/" target = "_blank"> 
              <img src="img/linkedin.png" alt="Linkedin">
            </a>
          </div>
          <div class="founder">
            <img src="img/founders/mukesh.jpeg" alt="Founder 2" class="founder-image">
            <div class="founder-name">Mukesh</div>
            <div class="languages-known">Languages I know: Nepali, Hindi, Bhojpuri, English</div>
            <div class="languages-wishlist">Wants to learn: German, Russian, Spanish</div>
            <a href = "https://www.linkedin.com/in/mukesh-jaiswal-23b5b0a9/" target = "_blank">
              <img src="img/linkedin.png" alt="Linkedin">
            </a>
          </div>
          <div class="founder">
            <img src="img/founders/burcu.jpeg" alt="Founder 3" class="founder-image">
            <div class="founder-name">Burcu</div>
            <div class="languages-known">Languages I know: Turkish, English</div>
            <div class="languages-wishlist">Wants to learn: German, Spanish</div>
            <a href = "https://www.linkedin.com/in/burcu-baycan-900926176/" target = "_blank">
              <img src="img/linkedin.png" alt="Linkedin">
            </a>
          </div>
          <div class="founder">
            <img src="img/founders/aman.png" alt="Founder 4" class="founder-image">
            <div class="founder-name">Aman</div>
            <div class="languages-known">Languages I know: Nepali, Hindi, Bhojpuri, English</div>
            <div class="languages-wishlist">Wants to learn: German, Spanish</div>
            <a href = "https://www.linkedin.com/in/aman-jaiswal-5b3354178/" target = "_blank">
              <img src="img/linkedin.png" alt="Linkedin">
            </a>
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
