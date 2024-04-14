// Function to open the modal
function closeModal() {
  startRecognition();
  var modal = document.getElementById("voiceModal");
  modal.style.display = "none";
  var logo = document.getElementById("logo");
  logo.style.background = "none";
}

window.onload = function () {
  // Show the modal when the page loads
  var modal = document.getElementById("voiceModal");
  modal.style.display = "flex";
};

let contentImage1 = document.getElementById("contentImage1");
let contentImage2 = document.getElementById("contentImage2");
let contentImage3 = document.getElementById("contentImage3");
let contentImage4 = document.getElementById("contentImage4");

contentImage1.classList.add("hidden");
contentImage2.classList.add("hidden");
contentImage3.classList.add("hidden");
contentImage4.classList.add("hidden");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const contentDiv = document.querySelector(".content");
const canvas = document.getElementById("audioCanvas");
const ctx = canvas.getContext("2d");

let audioContext;
let analyser;
let microphone;

function setupAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        draw();
      })
      .catch(function (err) {
        console.error("Error accessing the microphone", err);
      });

    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      analyser.getByteTimeDomainData(dataArray);

      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgb(230, 230, 230)";

      let sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      ctx.beginPath();
      for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128.0;
        let y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    }
  }
}

recognition.onresult = function (event) {
  const last = event.results.length - 1;
  const command = event.results[last][0].transcript.trim().toLowerCase();
  let contentImage = document.getElementById("contentImage");
  contentImage.style.display = "none";

  let contentText = document.getElementById("contentText");
  contentText.style.display = "block";

  let contentTitle = document.getElementById("contentTitle");
  let contentBody = document.getElementById("contentBody");

  // Change the image src and details after it has faded out
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
};

recognition.onerror = function (event) {
  // contentDiv.textContent = "Error occurred in recognition: " + event.error;
};

recognition.onend = function () {
  // As soon as the recognition session ends, start a new one
  recognition.start();
};

function startRecognition() {
  recognition.start();
  setupAudioContext(); // Ensure the audio context is set up on first recognition start
}

document.querySelector(".audio-visualization").addEventListener("click", startRecognition);

window.onload = function () {
  canvas.width = document.querySelector(".audio-visualization").clientWidth;
};
