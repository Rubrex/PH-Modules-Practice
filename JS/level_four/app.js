// Get Input Fields
const usernameField = document.getElementById("username-field");
const emailField = document.getElementById("email-field");
const messageField = document.getElementById("message-field");

// Set Initial Value if not set
localStorage.getItem("username") === null
  ? localStorage.setItem("username", "example_username")
  : "";
localStorage.getItem("email") === null
  ? localStorage.setItem("email", "example@gmail.com")
  : "";
localStorage.getItem("message") === null
  ? localStorage.setItem("message", "this is an example message")
  : "";
// set local storage (parse object from localStorage) value to the input fields
// const userString = localStorage.getItem("user");

usernameField.value = localStorage.getItem("username");
emailField.value = localStorage.getItem("email");
messageField.value = localStorage.getItem("message");

const getValuebyInput = (id) => {
  const elemString = id.value;
  return elemString;
};

const delUsername = () => {
  localStorage.removeItem("username");
  //   clear input
  usernameField.value = "";
};
const setUsername = () => {
  // set username from localStorage
  localStorage.setItem("username", getValuebyInput(usernameField));
  //   clear input
  usernameField.value = "";
};
const delEmail = () => {
  // del username from localStorage

  localStorage.removeItem("email");
  //   clear input
  emailField.value = "";
};
const setEmail = () => {
  // set username from localStorage
  localStorage.setItem("email", getValuebyInput(emailField));
  //   clear input
  emailField.value = "";
};
const delMess = () => {
  // del username from localStorage

  localStorage.removeItem("message");
  //   clear input
  messageField.value = "";
};
const setMess = () => {
  // set username from localStorage
  localStorage.setItem("message", getValuebyInput(messageField));
  //   clear input
  messageField.value = "";
};

// Send all Button
const sendAll = () => {
  let finalObj = {
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    message: localStorage.getItem("message"),
  };
  finalObj = JSON.stringify(finalObj);
  localStorage.setItem("user", finalObj);
};
// Clear / Reset Button
document.getElementById("reset-btn").addEventListener("click", () => {
  localStorage.clear();
  usernameField.value = "";
  emailField.value = "";
  messageField.value = "";
});
