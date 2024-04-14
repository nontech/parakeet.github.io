import { drawAudioVisual } from './draw_audio_visual.js';

document.addEventListener('DOMContentLoaded', function () {
    
    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Please try using Google Chrome.');
        return;
    }

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Continuously listen to speech
    recognition.interimResults = true; // Show interim results
    recognition.lang = 'en-US'; // Set language

    var isRecognizing = false; // Track if recognition is active

    
    recognition.onresult = function(event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript.trim().toLowerCase();
        console.log('Voice command recognized:', command);
        navigateToContent(command);
    };

    recognition.onstart = function() {
        isRecognizing = true;
        console.log('Recognition has started');
    };

    recognition.onerror = function(event) {
        console.error('Recognition error:', event.error);
    };


    document.querySelector('#startToBeginButton').addEventListener('click', function() {
        closeModal()
        handleStartRecognition();
    });

    function navigateToContent(command) {
        const contentDiv = document.querySelector(".content");
        switch (command) {
            case "home":
              contentDiv.textContent = "Navigated to Home";
              break;
            case "waiting list":
              contentDiv.textContent = "Navigated to Waiting List";
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

    }

    function closeModal() {
        var modal = document.getElementById('voiceModal');
        modal.style.display = 'none';
    }

    function handleStartRecognition() {
        if (!isRecognizing) {
            recognition.start();
            drawAudioVisual();
        } else {
            console.log('Recognition is already running.');
        }
    }

    // attach functions to the window object to make them accessible globally
    window.closeModal = closeModal;
    window.handleStartRecognition = handleStartRecognition;
});
