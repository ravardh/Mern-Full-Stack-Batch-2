function addTask() {
  const IpTask = document.getElementById("tsk").value.trim();

  const TI = document.getElementById("taskItems");

  //  TI.innerHTML = `<li class="m-3">
  //                     <label for="task">${IpTask}</label>
  //                     <button type="button" class="btn btn-danger">Delete</button>
  //                 </li>`;

  const a = document.createElement("li");
  a.classList.add("m-3");

  const b = document.createElement("span");
  const c = document.createElement("button");

  b.innerText = IpTask;

  c.classList.add("btn", "btn-danger","mx-3");
  c.innerText = "Delete";

  c.onclick = () => {
    a.remove();
  };

  a.appendChild(b);
  a.appendChild(c);
  TI.appendChild(a);
  document.getElementById("tsk").value = "";
}
