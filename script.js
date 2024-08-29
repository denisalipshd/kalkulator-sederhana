function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.textContent === "0" && value !== ".") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  document.getElementById("display").textContent = "0";
}

function deleteLastCharacter() {
  const display = document.getElementById("display");
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.textContent = eval(display.textContent) || "0";
  } catch {
    display.textContent = "Error";
  }
}
