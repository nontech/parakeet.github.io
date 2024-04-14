let audioContext;
let analyser;
let microphone;
let dataArray;
let bufferLength;

function draw() {
    const contentDiv = document.querySelector(".content");
    const canvas = document.getElementById("audioCanvas");
    const ctx = canvas.getContext("2d");

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

export function drawAudioVisual() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

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
    }
}