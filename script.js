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
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = "rgb(200, 200, 200)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 0)";

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

  switch (command) {
    case "waiting list":
      contentDiv.textContent = "Navigated to Waiting List";
      break;
    case "home":
      contentDiv.textContent = "Navigated to Home";
      break;
    case "contact":
      contentDiv.textContent = "Navigated to Contact";
      break;
    case "who we are":
      contentDiv.textContent = "Navigated to Who We Are";
      break;
    default:
      // contentDiv.textContent = "Command not recognized";
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
  canvas.height = 500; // Set the height as defined in your CSS
  startRecognition();
};

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.continuous = false;
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// const contentDiv = document.querySelector(".content");

// recognition.onresult = function (event) {
//   const last = event.results.length - 1;
//   const command = event.results[last][0].transcript.trim().toLowerCase();

//   switch (command) {
//     case "waiting list":
//       contentDiv.textContent = "Navigated to Waiting List";
//       break;
//     case "home":
//       contentDiv.textContent = "Navigated to Home";
//       break;
//     case "contact":
//       contentDiv.textContent = "Navigated to Contact";
//       break;
//     case "who we are":
//       contentDiv.textContent = "Navigated to Who We Are";
//       break;
//     default:
//       //   contentDiv.textContent = "Command not recognized";
//       break;
//   }
// };

// recognition.onerror = function (event) {
//   //   contentDiv.textContent = "Error occurred in recognition: " + event.error;
//   recognition.start();
// };

// recognition.onend = function () {
//   // As soon as the recognition session ends, start a new one
//   recognition.start();
// };

// function startRecognition() {
//   recognition.start();
// }

// document.querySelector(".audio-visualization").addEventListener("click", startRecognition);

// // Start recognition automatically when the page loads
// window.onload = (event) => {
//   startRecognition();
// };
