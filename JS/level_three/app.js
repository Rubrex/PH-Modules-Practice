// Get Input Fields
const usernameField = document.getElementById("username-field");
const emailField = document.getElementById("email-field");
const messageField = document.getElementById("message-field");

const getValuebyInput = (id) => {
  //   const elem = document.getElementById(id);
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

document.getElementById("reset-btn").addEventListener("click", () => {
  localStorage.clear();
});
