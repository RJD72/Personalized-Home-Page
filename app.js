let timeOfDay = new Date();
let hour = timeOfDay.getHours();
let time = document.querySelector(".timeOfDay");

const quotes = [
  "Whatever the mind of man can conceive and believe, it can achieve - Napoleon Hill",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Every strike brings me closer to the next home run. – Babe Ruth",
  "We become what we think about. – Earl Nightingale",
  "Life is 10% what happens to me and 90% of how I react to it. – Charles Swindoll",
  "The mind is everything. What you think you become.– Buddha",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "Fall seven times and stand up eight. – Japanese Proverb",
  "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. – Jamie Paolinetti",
  "A person who never made a mistake never tried anything new. – Albert Einstein",
  "It is never too late to be what you might have been. – George Eliot",
  "If you do what you’ve always done, you’ll get what you’ve always gotten. – Tony Robbins",
  "Remember no one can make you feel inferior without your consent. – Eleanor Roosevelt",
  "Change your thoughts and you change your world. – Norman Vincent Peale",
  "Nothing is impossible, the word itself says, “I’m possible!” – Audrey Hepburn",
  "You can't control what happens, only what happens next",
  "You are always responsible for what you say and how you act, no matter how you feel.",
  "Self-discipline begins with mastering your own thoughts. If you don't control what you think, you can't control what you do.",
  "You don't need a new day to start over. You only need a new mindset.",
];

const background = [
 
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
  "img/image5.jpg",
  "img/image6.jpg",
  "img/image7.jpg",
  "img/image8.jpg",
  "img/image9.jpg",
  "img/image10.jpg",
];

function newImage() {
  let randomImage = Math.floor(Math.random() * background.length);
  document.querySelector(".background").style.backgroundImage =
    "url(" + background[randomImage] + ")";
}

function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.querySelector(".quoteDisplay").textContent = quotes[randomNumber];
}

if (hour < 12) {
  time.textContent = "Good Morning Rob";
} else if (hour >= 12 && hour < 16) {
  time.textContent = "Good Afternoon Rob";
} else {
  time.textContent = "Good Evening Rob";
}
