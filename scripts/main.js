/*let myHeading = document.querySelector("h1");
myHeading.textContent = "this webpage is currently under construction. stay tuned.";

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
*/

//NEW SECTION BEGINS

let myNavigationItem = document.querySelectorAll(".navitem");
myNavigationItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    hoveredText(item);
  });
  item.addEventListener("mouseout", () => {
    normalText(item);
  });
  item.addEventListener("click", function () {
    hoveredText(item);
  });
});

let hover = false;
  
function hoveredText(item) {
  item.style.background = "#85aad8";
}

function normalText(item) {
  item.style.background = "#284263";
}

function attackPage() {
  alert("this page is under attack!");
}

//https://www.color-hex.com/color-palette/1024702






