const a = Number(document.getElementById("age").innerText);

const b = document.getElementById("eleg");

if (a >= 18) {
  b.innerText="you are elegible to Vote";
} else {
   b.innerText="you are not elegible to Vote";
}
