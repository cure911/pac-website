var arrow1Button = document.querySelector(".arrow1-button");
var statiscButton = document.querySelector(".statisc-button");
var mainPageButton = document.querySelector(".main-page-button");
var fınctionsButton = document.querySelector(".fınctions-button");
var priBtton = document.querySelector(".pri-btton");
var statButtpn = document.querySelector(".stat-buttpn");
var disBtn = document.querySelector(".dis-btn");
var goPriceSon = document.querySelector(".go-priceng-son");

var container1 = document.querySelector(".container-1");
var container2 = document.querySelector(".container-2");
var container3 = document.querySelector(".container-3");
var container4 = document.querySelector(".container-4");
var container5 = document.querySelector(".container-5");

var seeThePrice = document.querySelector(".see-the-price");

var functionTop = document.querySelector(".function-top");
var priceTop = document.querySelector(".price-top");
var statisticTop = document.querySelector(".statistic-top");

function hepsiYok(){
  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
}

functionTop.onclick = function () {
  hepsiYok()
  container2.style.animation = "left 0.5s"
  container2.style.display = "block"
}

priceTop.onclick = function () {
  hepsiYok()
  container4.style.animation = "left 0.5s"
  container4.style.display = "block"

}

statisticTop.onclick = function () {
  hepsiYok()
  container3.style.animation = "left 0.5s"
  container3.style.display = "block"
}


seeThePrice.onclick = function () {
  container1.style.display = "none";
  container1.style.animation = "right 0.5s"
  container1.style.display = "flex";
  setTimeout(function () {
    container4.style.animation = "left 0.5s"
    container1.style.display = "none"
    container4.style.display = "block"
  },500)
}

arrow1Button.onclick = function () { //
  container1.style.display = "none";
  container1.style.animation = "right 0.5s"
  container1.style.display = "flex";
  setTimeout(function () {
    container2.style.animation = "left 0.5s"
    container1.style.display = "none"
    container2.style.display = "flex"
  },500)
}
statiscButton.onclick = function () { //
  container2.style.display = "none";
  container2.style.animation = "right 0.5s"
  container2.style.display = "flex";
  setTimeout(function () {
    container3.style.animation = "left 0.5s"
    container2.style.display = "none"
    container3.style.display = "flex"
  },500)
}
mainPageButton.onclick = function () { 
  container2.style.display = "none";
  container2.style.animation = "rightreverse 0.5s"
  container2.style.display = "flex";
  setTimeout(function () {
    container1.style.animation = "leftreverse 0.5s"
    container2.style.display = "none"
    container1.style.display = "flex"
  },500)
}
fınctionsButton.onclick = function () { 
  container3.style.display = "none";
  container3.style.animation = "rightreverse 0.5s"
  container3.style.display = "flex";
  setTimeout(function () {
    container2.style.animation = "leftreverse 0.5s"
    container3.style.display = "none"
    container2.style.display = "flex"
  },500)
}
priBtton.onclick = function () { //
  container3.style.display = "none";
  container3.style.animation = "right 0.5s"
  container3.style.display = "flex";
  setTimeout(function () {
    container4.style.animation = "left 0.5s"
    container3.style.display = "none"
    container4.style.display = "block"
  },500)
}
statButtpn.onclick = function () {
  container4.style.display = "none";
  container4.style.animation = "rightreverse 0.5s"
  container4.style.display = "block";
  setTimeout(function () {
    container3.style.animation = "leftreverse 0.5s"
    container4.style.display = "none"
    container3.style.display = "flex"
  },500)
}
disBtn.onclick = function () { //
  container4.style.display = "none";
  container4.style.animation = "right 0.5s"
  container4.style.display = "block";
  setTimeout(function () {
    container5.style.animation = "left 0.5s"
    container4.style.display = "none"
    container5.style.display = "flex"
  },500)
}
goPriceSon.onclick = function () {
  container5.style.display = "none";
  container5.style.animation = "rightreverse 0.5s"
  container5.style.display = "flex";
  setTimeout(function () {
    container4.style.animation = "leftreverse 0.5s"
    container5.style.display = "none"
    container4.style.display = "block"
  },500)
}