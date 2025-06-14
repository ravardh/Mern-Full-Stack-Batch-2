function red() {
  document.getElementById("gola").classList.add("red");
  document.getElementById("gola").classList.remove("blue");
  document.getElementById("gola").classList.remove("green");
}

function green() {
  document.getElementById("gola").classList.remove("red");
  document.getElementById("gola").classList.remove("blue");
  document.getElementById("gola").classList.add("green");
}

function blue() {
  document.getElementById("gola").classList.remove("red");
  document.getElementById("gola").classList.add("blue");
  document.getElementById("gola").classList.remove("green");
}

function changecolor(col) {
  document.getElementById("gola").style.backgroundColor = col;
}

function cgred() {
  document.getElementById("gola").classList.add("red");
  document.getElementById("gola").classList.remove("blue");
  document.getElementById("gola").classList.remove("green");
  document.getElementById("gola").classList.remove("yellow");
}

function cgyellow() {
  document.getElementById("gola").classList.remove("red");
  document.getElementById("gola").classList.remove("blue");
  document.getElementById("gola").classList.remove("green");
  document.getElementById("gola").classList.add("yellow");
}

function cggreen() {
  document.getElementById("gola").classList.remove("red");
  document.getElementById("gola").classList.remove("blue");
  document.getElementById("gola").classList.add("green");
  document.getElementById("gola").classList.remove("yellow");
}

function cgblue() {
  document.getElementById("gola").classList.remove("red");
  document.getElementById("gola").classList.add("blue");
  document.getElementById("gola").classList.remove("green");
  document.getElementById("gola").classList.remove("yellow");
}

function reset(){
    document.getElementById("gola").classList.remove("red");
  document.getElementById("gola").classList.remove("blue");
  document.getElementById("gola").classList.remove("green");
  document.getElementById("gola").classList.remove("yellow");
}


document.getElementById("chotagola1").addEventListener("mouseover",cgred)
document.getElementById("chotagola1").addEventListener("mouseout",reset)


document.getElementById("chotagola2").addEventListener("mouseover",cgyellow)
document.getElementById("chotagola2").addEventListener("mouseout",reset)

document.getElementById("chotagola3").addEventListener("mouseover",cggreen)
document.getElementById("chotagola3").addEventListener("mouseout",reset)

document.getElementById("chotagola4").addEventListener("mouseover",cgblue)
document.getElementById("chotagola4").addEventListener("mouseout",reset)    