const topics = ["Ordering at a restaurant...", "Booking a hotel room...", "Asking for directions...", "Shopping for groceries..."];
const keywords = ["menu, bill, water...", "reservation, check-in, amenities...", "map, location, near...", "vegetables, price, fresh..."];
let topicIndex = 0;
let keywordIndex = 0;

document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
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
      document.getElementById("emailSubscription").value = "";
    })
    .catch((error) => console.error("Error:", error));
});

function typeAnimation(element, text, delay, callback) {
  let i = 0;
  element.value = ""; // Reset the value of the input
  const interval = setInterval(() => {
    element.value += text.charAt(i); // Update the value instead of textContent
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, delay);
}

function startTypingAnimation() {
  typeAnimation(document.getElementById("typing-topic"), topics[topicIndex], 150, () => {
    typeAnimation(document.getElementById("typing-keywords"), keywords[keywordIndex], 150, () => {
      setTimeout(() => {
        document.getElementById("typing-topic").textContent = "";
        document.getElementById("typing-keywords").textContent = "";
        topicIndex = (topicIndex + 1) % topics.length;
        keywordIndex = (keywordIndex + 1) % keywords.length;
        setTimeout(startTypingAnimation, 2000);
      }, 2000);
    });
  });
}

function autoDropDown() {
  const selectElement = document.getElementById("languageSelect");

  setInterval(() => {
    console.log("Randomly selecting an option");
    const options = selectElement.options;
    const randomIndex = Math.floor(Math.random() * options.length);
    options[randomIndex].selected = true;
  }, 4000);
}

document.addEventListener("DOMContentLoaded", startTypingAnimation);
document.addEventListener("DOMContentLoaded", autoDropDown);

// Carousel Functionality for Use Cases
let usecaseIndex = 0;
let lastItemIndex = 0;

function showUsecaseCarousel() {
  const carouselSlide = document.querySelector(".carousel-slide-usecases");
  const carouselItems = document.querySelectorAll(".carousel-item-usecase");
  usecaseIndex++;

  if (usecaseIndex >= carouselItems.length) {
    if (lastItemIndex == 1) {
      usecaseIndex = 0;
      lastItemIndex = 0;
      carouselSlide.style.transform = "translateX(" + -usecaseIndex * 100 + "%)";
    }
    lastItemIndex = 1;
    return;
  }

  carouselSlide.style.transform = "translateX(" + -usecaseIndex * 100 + "%)";
}

// Start the carousel for use cases
setInterval(showUsecaseCarousel, 4000);
