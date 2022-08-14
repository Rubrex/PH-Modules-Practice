// Collect comment from Textarea and push it to li and clear
// the textarea when clicked on post btn
document.getElementById("postBtn").addEventListener("click", function () {
  const textArea = document.getElementById("floatingTextarea2");
  const newPost = document.createElement("li");
  newPost.setAttribute("class", "list-group-item");
  if (textArea.value !== "") {
    newPost.innerText = textArea.value;
    const ul = document.getElementById("listContainer");
    ul.appendChild(newPost);
    textArea.value = "";
    console.log(textArea.value);
  }
});
