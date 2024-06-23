const topics = ["Ordering at a restaurant...", "Booking a hotel room...", "Asking for directions...", "Shopping for groceries..."];
const keywords = ["menu, bill, water...", "reservation, check-in, amenities...", "map, location, near...", "vegetables, price, fresh..."];
let topicIndex = 0;
let keywordIndex = 0;

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
