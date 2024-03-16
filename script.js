// selected all html id
const inputBox = document.getElementById("input-box");
const copyBtn = document.getElementById("copyBtn");
const generatorBtn = document.getElementById("generator");
const audioSound = new Audio("./audio/shooting-sound-fx-159024.mp3");
const audioSound2 = new Audio("./Audio/multi-pop-1-188165.mp3");

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  // password Length
  const passLength = 12;
  // passWord Data
  const toUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const toLower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = ",<.>/?:;'{}[]`~!@#$%^&*()-_+=|";
  const allCharter = toUpper + toLower + number + symbol;

  // passwordFunction
  function passwordFunction() {
    let password = "";
    password += toUpper[Math.floor(Math.random() * toUpper.length)];
    password += toLower[Math.floor(Math.random() * toLower.length)];
    password += number[Math.floor(Math.random() * password.length)];
    password += symbol[Math.floor(Math.random() * number.length)];

    while (passLength > password.length) {
      password += allCharter[Math.floor(Math.random() * allCharter.length)];
    }
    inputBox.value = password;
    audioSound2.play();
    audioSound2.volume = 0.5;
  }

  // generatorBtn addEventListener
  generatorBtn.addEventListener("click", passwordFunction);

  // copyBtn addEventListener
  copyBtn.addEventListener("click", function () {
    if (inputBox.value === "") {
      alert("Please generated password!");
    } else {
      navigator.clipboard.writeText(inputBox.value);
      inputBox.value = "";
      audioSound.play();
      audioSound.volume = 0.5;
    }
  });
}
