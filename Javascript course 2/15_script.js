const input = document.getElementById("username");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const name = input.value.trim();

  if (name === "") {
    result.textContent = "Please enter your name.";
    return;
  }

  // Lodash external library function
  result.textContent = _.capitalize(name);
});
