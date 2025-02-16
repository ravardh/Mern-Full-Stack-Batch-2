function start() {
  const p1 = document.getElementById("p1").value.trim();
  const p2 = document.getElementById("p2").value.trim();

  if (p1 === "" || p2 === "") {
    alert("Please add the Player Name");
    location.reload();
  }

  document.getElementById("p1nmlb").innerText = p1;
  document.getElementById("p1sclb").innerText = p1;

  document.getElementById("p2nmlb").innerText = p2;
  document.getElementById("p2sclb").innerText = p2;

  document.getElementById("start").disabled = true;
  document.getElementById("restart").disabled = false;
  document.getElementById("rolldice1").disabled = false;
}

function restart() {
  if (confirm("Are you Sure ?")) {
    location.reload();
  }
}
