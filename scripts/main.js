
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
  item.style.background = "#36393e";
}

function normalText(item) {
  item.style.background = "#282b30";
}

function attackPage() {
  alert("this page is under attack!");
}

//https://www.color-hex.com/color-palette/1024702






