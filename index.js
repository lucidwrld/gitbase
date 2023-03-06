let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let number = document.getElementById("number");

export function valid() {
 if (fullname !== "" && email !== "" && number !== "") {
  alert("Successful!!!!!!!!!")
  return true
 } else {
  return false
 }
}