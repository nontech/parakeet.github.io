import { drawAudioVisual } from "./draw_audio_visual.js";

document.addEventListener("DOMContentLoaded", function () {
  // Check if the browser supports the Web Speech API
  if (!("webkitSpeechRecognition" in window)) {
    alert("Your browser does not support speech recognition. Please try using Google Chrome.");
    return;
  }

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true; // Continuously listen to speech
  recognition.interimResults = true; // Show interim results
  recognition.lang = "en-US"; // Set language

  var isRecognizing = false; // Track if recognition is active

  recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript.trim().toLowerCase();
    console.log("Voice command recognized:", command);
    navigateToContent(command);
  };

  recognition.onstart = function () {
    isRecognizing = true;
    console.log("Recognition has started");
  };

  recognition.onerror = function (event) {
    console.error("Recognition error:", event.error);
  };

  document.querySelector("#startToBeginButton").addEventListener("click", function () {
    closeModal();
    handleStartRecognition();
  });

  function navigateToContent(command) {
    const contentDiv = document.querySelector(".content");

    let contentImage = document.getElementById("contentImage");
    contentImage.style.display = "none";

    let contentText = document.getElementById("contentText");
    contentText.style.display = "block";

    let contentTitle = document.getElementById("contentTitle");
    let contentBody = document.getElementById("contentBody");

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
        contentImage1.classList.remove("hidden");
        contentImage2.classList.add("hidden");
        contentImage3.classList.add("hidden");
        contentImage4.classList.add("hidden");
        break;
      case "waiting list":
        contentTitle.textContent = "Get Early Access";
        contentBody.textContent = "Ready to change how you learn languages? Join our waiting list";
        contentImage2.classList.remove("hidden");
        contentImage1.classList.add("hidden");
        contentImage3.classList.add("hidden");
        contentImage4.classList.add("hidden");
        break;
      case "contact":
        contentTitle.textContent = "Connect With Us";
        contentBody.textContent = "Have questions or want to know more? Our team is just a message away. Contact us via [contact@email.com]";
        contentImage3.classList.remove("hidden");
        contentImage1.classList.add("hidden");
        contentImage2.classList.add("hidden");
        contentImage4.classList.add("hidden");
        break;
      case "who we are":
        contentTitle.textContent = "Our Story";
        contentBody.textContent =
          "We are technologists, and avid learners who believe in a world where language learning is as natural and engaging as conversation itself. Founded on the principles of cognitive science and AI, parakeet is designed to make you fluent by leveraging the natural methods that helped you learn your mother tongue.";
        contentImage4.classList.remove("hidden");
        contentImage1.classList.add("hidden");
        contentImage2.classList.add("hidden");
        contentImage3.classList.add("hidden");
        break;
      default:
        console.log("Command not recognized");
        break;
    }
  }

  function closeModal() {
    var modal = document.getElementById("voiceModal");
    modal.style.display = "none";
    var logo = document.getElementById("logo");
    logo.style.background = "none";
  }

  function handleStartRecognition() {
    if (!isRecognizing) {
      recognition.start();
      drawAudioVisual();
    } else {
      console.log("Recognition is already running.");
    }
  }

  // attach functions to the window object to make them accessible globally
  window.closeModal = closeModal;
  window.handleStartRecognition = handleStartRecognition;
});
