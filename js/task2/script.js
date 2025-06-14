const b = document.getElementById("btn");

const i = document.getElementById("top");
b.addEventListener("click",move);

i.addEventListener("change",move)

function move(){
    const a = document.getElementById("masterbox")
    const val = i.value;

    a.style.top=val+"px";
}