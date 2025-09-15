const body = document.querySelector("body");
const blackButtons = document.querySelectorAll(".button-black");
const redButtons = document.querySelectorAll(".button-red");
const yellowButtons = document.querySelectorAll(".button-yellow");
const greenButtons = document.querySelectorAll(".button-green");
const blueButtons = document.querySelectorAll(".button-blue");
const purpleButtons = document.querySelectorAll(".button-purple");
const pinkButtons = document.querySelectorAll(".button-pink");
const brownButtons = document.querySelectorAll(".button-brown")

blackButtons.forEach(function (button) {
  button.addEventListener("dblclick", function () {
    const color = button.getAttribute("data-color");
    body.style.backgroundColor = color;
  });
});

redButtons.forEach((button) => {
  button.addEventListener("dblclick", function (event) {
    const color = event.target.getAttribute("data-color");
    body.style.backgroundColor = color;
  });
});

yellowButtons.forEach(function (button) {
  button.addEventListener("dblclick", function (event) {
    const color = event.target.getAttribute("data-color");
    body.style.backgroundColor = color;
  });
});

greenButtons.forEach((button) => {
  button.addEventListener("dblclick", () => {
    const color = button.getAttribute("data-color");
    body.style.backgroundColor = color;
  });
});

blueButtons.forEach( function(button) {
    button.addEventListener("dblclick", function (event){
        const color = button.getAttribute("data-color");
        body.style.backgroundColor = color;
    })
})

purpleButtons.forEach( function(button) {
    button.addEventListener("dblclick", function (event){
        const color = button.getAttribute("data-color");
        body.style.backgroundColor = color;
    })
})

pinkButtons.forEach( function(button) {
    button.addEventListener("dblclick", function (event){
        const color = button.getAttribute("data-color");
        body.style.backgroundColor = color;
    })
})

brownButtons.forEach( function(button) {
    button.addEventListener("dblclick", function (event){
        const color = button.getAttribute("data-color");
        body.style.backgroundColor = color;
    })
})