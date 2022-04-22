const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputText.style.fontSize = `${inputRange.value}px`;

const handleInput = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener("input", handleInput);

