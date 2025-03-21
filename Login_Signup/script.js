const lg = document.getElementById("login")
const sn = document.getElementById("signup")

const sl = document.getElementById("slider")
const pg = document.getElementById("page")

lg.addEventListener("click",loginActive)
sn.addEventListener("click",signupActive)


function loginActive(){
    sl.classList.remove("sliderSlide");
    pg.classList.remove("pageSlide")

}

function signupActive(){
    
    sl.classList.add("sliderSlide");
    pg.classList.add("pageSlide")

}