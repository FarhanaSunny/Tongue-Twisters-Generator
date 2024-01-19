const animatedText = "This app is called the 'Tongue Twister Generator.' I have a 5-year-old daughter who absolutely loves learning different tongue twisters in various languages. She enjoys googling tongue twisters and repeating them without considering if they are appropriate for her age or too challenging as a non-native speaker of those languages! This inspired me to create this app for her and anyone of any age to have fun—whether solo or in a group setting, taking turns! I hope you enjoy this Tongue Twister App as much as we do!";
const animatedP = document.getElementById("app-info");


animatedText.split(" ").forEach((item, i) => {
  const element = document.createElement("span");
  // element.style.animationDelay = `${i * 0.2}s`; // Use "s" for seconds in animation-delay
  element.style.animation = `fadeIn 2s cubic-bezier(0.42, 0, 0.58, 1) ${i * 0.1}s`;
  element.textContent = item + " ";
  animatedP.appendChild(element);
//   animatedIntroP.appendChild(element);
});

const animatedIntro = "Hi, I am Farhana! I am an aspiring Software Developer. Originally, I am from Bangladesh, and I hold a bachelor's degree in dentistry. However, I am currently making a career transition to software development. I am enrolled in the 'GetCoding program,' and this project marks my first GetCoding endeavor.";
const animatedIntroP = document.getElementById("self-intro");

animatedIntro.split(" ").forEach((item, i) => {
    const element = document.createElement("span");
    // element.style.animationDelay = `${i * 0.2}s`; // Use "s" for seconds in animation-delay
    element.style.animation = `fadeIn 2s cubic-bezier(0.42, 0, 0.58, 1) ${i * 0.1}s`;
    element.textContent = item + " ";
    animatedIntroP.appendChild(element);
  });