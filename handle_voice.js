let contentImage = document.getElementById("contentImage");
let contentImage1 = document.getElementById("contentImage1");
let contentImage2 = document.getElementById("contentImage2");
let contentImage3 = document.getElementById("contentImage3");
let contentImage4 = document.getElementById("contentImage4");

let first_command = true;

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
            `
      ;
      contentImage1.classList.remove("hidden");
      contentImage2.classList.add("hidden");
      contentImage3.classList.add("hidden");
      contentImage4.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    case "waiting list":
      contentTitle.textContent = "Get Early Access";
      contentBody.textContent = "Ready to change how you learn languages? Join our waiting list";
      contentImage2.classList.remove("hidden");
      contentImage1.classList.add("hidden");
      contentImage3.classList.add("hidden");
      contentImage4.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    case "contact":
      contentTitle.textContent = "Connect With Us";
      contentBody.textContent = "Have questions or want to know more? Our team is just a message away. Contact us via parakeet.lang@gmail.com";
      contentImage3.classList.remove("hidden");
      contentImage1.classList.add("hidden");
      contentImage2.classList.add("hidden");
      contentImage4.classList.add("hidden");
      contentImage.style.display = "none";
      break;
    case "who we are":
      contentTitle.textContent = "Our Story";
      contentBody.innerHTML =
        `We are technologists, and avid learners who believe in a world where language learning is as natural and engaging as conversation itself. Founded on the principles of cognitive science and AI, parakeet is designed to make you fluent by leveraging the natural methods that helped you learn your mother tongue.
        <div class="founders">
          <div class="founder">
            <img src="img/founders/alejh.png" alt="Founder 1" class="founder-image">
            <a href = "https://www.linkedin.com/in/alejandrocamus/"> <p class="founder-name">Alejandro</p> </a>
          </div>
          <div class="founder">
            <img src="img/founders/mukesh.jpeg" alt="Founder 2" class="founder-image">
            <a href = "https://www.linkedin.com/in/mukesh-jaiswal-23b5b0a9/"><p class="founder-name">Mukesh</p></a>
          </div>
          <div class="founder">
            <img src="img/founders/burcu.jpeg" alt="Founder 3" class="founder-image">
            <a href = "https://www.linkedin.com/in/burcu-baycan-900926176/"><p class="founder-name">Burcu</p></a>
          </div>
          <div class="founder">
            <img src="img/founders/aman.png" alt="Founder 4" class="founder-image">
            <a href = "https://www.linkedin.com/in/aman-jaiswal-5b3354178/"><p class="founder-name">Aman</p></a>
          </div>
        </div>
        
        `;
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
