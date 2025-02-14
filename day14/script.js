function login() {
  const em = document.getElementById("usrname").value;
  const ps = document.getElementById("passwrd").value;

  console.log(em, ps);
}

function signup() {
  const nm = document.getElementById("name").value;
  const em = document.getElementById("email").value;
  const crp = document.getElementById("crpass").value;
  const cfp = document.getElementById("cfpass").value;

  if (crp !== cfp) {
    alert("password mis-smatch");
    return;
  }

  console.log(nm, em, crp);

  document.getElementById("print").innerText = nm + " " + em + " " + crp;
}
