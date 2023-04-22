let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("h1").addEventListener("click", function () {
    alert("this page has been attacked by viruses.")
});

//Instead of writing function() we can write () => 

const myImage = document.querySelector("img");
myImage.onclick = function () {
const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/elizabethOfRussia.jpg") {
    myImage.setAttribute("src", "images/chineseyoyo.jpeg");
  } else {
    myImage.setAttribute("src", "images/elizabethOfRussia.jpg");
  }
};

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }

myButton.onclick = () => {
    setUserName();
};