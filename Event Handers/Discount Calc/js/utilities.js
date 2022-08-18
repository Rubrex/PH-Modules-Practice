function getInnerNumberById(id) {
  const stringNumber = document.getElementById(id).innerText;
  const getNumber = parseFloat(stringNumber).toFixed(1);
  return getNumber;
}
function getInputData(id) {
  return document.getElementById(id).value;
}
