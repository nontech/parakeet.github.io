import { drawAudioVisual } from "./draw_audio_visual.js";
import { handleVoice } from "./handle_voice.js";

document.addEventListener("DOMContentLoaded", function () {
  // Check if the browser supports the Web Speech API
  if (!("webkitSpeechRecognition" in window)) {
    alert("Your browser does not support speech recognition. Please try using Google Chrome.");
    return;
  }

  const isAndroid = /Android/i.test(navigator.userAgent);
  var isManuallyStopped = false; // Track if stopping is manual

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = !isAndroid;
  recognition.interimResults = true; // Show interim results
  recognition.lang = "en-US"; // Set language

  var isRecognizing = false; // Track if recognition is active

  recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript.trim().toLowerCase();
    console.log("Voice command recognized:", command);
    handleVoice(command);
  };

  recognition.onstart = function () {
    isRecognizing = true;
    console.log("Recognition has started");
  };

  recognition.onaudiostart = function () {
    console.log("Audio capturing started");
  };

  recognition.onsoundstart = function () {
    console.log("Sound has been detected");
  };

  recognition.onspeechstart = function () {
    console.log("Speech has been detected");
  };

  recognition.onresult = function () {
    console.log("Result has been detected");
  };

  recognition.onaudioend = function () {
    console.log("Audio capturing ended");
  };

  recognition.onend = function () {
    isRecognizing = false;
    console.log("Recognition has ended");

    if (isAndroid && !isManuallyStopped) {
      console.log("Restarting recognition for Android.");
      recognition.start();
    }
  };

  recognition.onerror = function (event) {
    console.error("Recognition error:", event.error);
  };

  document.querySelector("#startToBeginButton").addEventListener("click", function () {
    closeModal();
    handleStartRecognition();
  });

  function closeModal() {
    var modal = document.getElementById("voiceModal");
    modal.style.display = "none";
    var logo = document.getElementById("logo");
    logo.style.background = "none";
  }

  function handleStartRecognition() {
    if (!isRecognizing) {
      isManuallyStopped = true;
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
