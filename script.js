async function getlen() {
  const element = document.querySelector("input");
  const textField = document.querySelector(".textField");
  element.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
    console.log(`User input: ${event.target.value}`);
    const value = event.target.value
    if (event.key === "Enter") {
      text = value.split(' ')
      len = text.filter(text => text != '', text != ',')
      textField.innerHTML = "<p>" + len.length + "</p>";
      element.value = ''
    }
  });
}
getlen()
