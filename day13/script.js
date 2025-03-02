function addElement() {
  const ele = document.createElement("span");

  ele.innerText = "I am new Span";

  const parent = document.querySelector("body");

  parent.appendChild(ele);
}

function removeElement() {
  const ele = document.querySelectorAll("span");

  console.log(ele)

  ele[0].remove();
}
