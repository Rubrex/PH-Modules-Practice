document.getElementById("submit").addEventListener("click", () => {
  const emailField = document.getElementById("email");
  const email = emailField.value;
  const passField = document.getElementById("password");
  const password = passField.value;

  //   DANGER : Verify username and password on Server side
  if (email === "rubrex@gmail.com" && password === "1234") {
    console.log("Valid username and password");
  } else {
    console.log("Invalid username and password");
  }
});
