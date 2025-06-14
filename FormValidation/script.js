const btn = document.getElementById("sbmt_btn");

btn.addEventListener("click", submitForm);

function submitForm() {
  console.log("Submit button clicked");

  const fn = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value.trim();

  const edu = document.getElementById("edu").value;

  const shift = [];

  document
    .querySelectorAll("input[name='batchPref']:checked")
    .forEach((element) => {
      shift.push(element.value);
    });

  //reset the error
  resetError();

  console.log(shift);

  console.log(edu);
  if (fn.length < 3) {
    document.getElementById("fullName").classList.add("error");
    document.getElementById("nameError").innerText =
      "must be more than 3 characters";
  } else if (!/^[A-Za-z/s]+$/.test(fn)) {
    document.getElementById("fullName").classList.add("error");
    document.getElementById("nameError").innerText =
      "Only Alphabets and Spaces Allowed";
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phone").classList.add("error");
    document.getElementById("mobileError").innerText =
      "Please enter a Valid 10-digit Mobile Number ";
  }

  if (!/^[A-Za-z\d._]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(em)) {
    document.getElementById("email").classList.add("error");
    document.getElementById("emailError").innerText =
      "Please enter a Valid Email address ";
  }

  if (shift.length <= 0) {
    document.getElementById("shiftArea").classList.add("error");
    document.getElementById("shiftError").innerText =
      "Please at least 1 shift ";
  }


  if(!edu){
    document.getElementById("edu").classList.add("error");
  }
  console.log(fn, em, ph, dob);
}

function resetError() {
  document.querySelectorAll("span").forEach((element) => {
    element.innerText = "";
  });
 
  document.querySelectorAll("input, select, textarea, #shiftArea").forEach((element)=>{
    element.classList.remove("error")
  })

}
