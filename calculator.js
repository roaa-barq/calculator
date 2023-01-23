let display = document.getElementById("screen");

const clearText = () => {
  display.value = "";
};

const clearDig = () => {
  if (display.value) {
    display.value = display.value.slice(0, -1);
  }
};

const show = (x) => {
  display.value += x;
};

const calc = () => {
  display.value = eval(display.value);
};
