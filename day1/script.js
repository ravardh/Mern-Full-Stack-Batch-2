function getDOB() {
  const dob = document.getElementById("dob").value;
  let age = new Date().getFullYear() - Number(dob.split("-")[0]);
  console.log("abcde", age);
}

// 2025-03-14  ["2025","03","14"]
// Mon Mar 03 2025 19:27:46 GMT+0530 (India Standard Time)
