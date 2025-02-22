

setTimeout(() => {
  console.log(3 + 3);
}, 3000);



// Topic callback
function sum(a, b) {
  console.log(a + b);
}

function calc(x, y, sagar) {
  x = x + 1;
  y = y + 1;
  sagar(x,y)
}

calc(5,7,sum);