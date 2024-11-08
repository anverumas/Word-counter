const element = document.querySelector("input");

const textContent = document.querySelector(".textContent");
element.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
  console.log(`User input: ${event.target.value}`);
  const value = event.target.value
  if (event.key === "Enter") {
    text = value.split(' ')
    len = text.filter(text => text != '')
    textContent.innerHTML = "<p>" + len.length + "</p>";
    element.value = ''
  }
});

const inputEl = document.querySelector("input");

const optionsEl = document.querySelector(".options");
const contentEl = document.querySelector(".textContent");
optionsEl.addEventListener("click", function (event) {
  const value = inputEl.value
  text = value.split(' ')
  len = text.filter(text => text != '')
  contentEl.innerHTML = "<p>" + len.length + "</p>";
  inputEl.value = ''

});
