// Greet when clicked on Button
function greetings() {
  const targetText = document.getElementById("greetMeText");
  targetText.innerText = "Hola Amigos! You Found it";
}
// Write Name on Header after CLicking Submit Button
document.getElementById("basic-addon2").addEventListener("click", function () {
  const inputText = document.getElementById("nameInput");
  const targetText = document.getElementById("recipientName");

  //   console.log(typeof inputText.value, inputText.value.length, inputText.value);
  if (inputText.value !== "") {
    //Check if input field has a value
    targetText.innerText = inputText.value;
    inputText.value = "";
  }
});
// Add Background Color to each Section
const sections = document.getElementsByTagName("section");
for (let section of sections) {
  section.style.backgroundColor = "#E8F9FD";
  section.style.padding = "50px";
  section.style.marginBottom = "50px";
}
