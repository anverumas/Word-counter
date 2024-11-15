const url = "https://kool.krister.ee/chat/word_counter";
const element = document.querySelector("input");
const textContent = document.querySelector("#lts");
const contentSy = document.querySelector(".textContent");
textContent.addEventListener("click", function (event) {
  console.log(`Key pressed: ${event.key}`);
  console.log(`User input: ${event.target.value}`);
  const value = inputEl.value
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: value,
      num: value.length
    })
  });
  contentEl.innerHTML = "<p>" + value.length + ' symbols' + "</p>";
  inputEl.value = ''
});

const inputEl = document.querySelector("input");

const optionsEl = document.querySelector("#wrds");
const contentEl = document.querySelector(".textContent");
optionsEl.addEventListener("click", function (event) {
  const value = inputEl.value
  text = value.split(' ')
  len = text.filter(text => text != '')
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: value,
      num: len.length
    })
  });
  contentEl.innerHTML = "<p>" + len.length + ' words' + "</p>";
  inputEl.value = ''

});
