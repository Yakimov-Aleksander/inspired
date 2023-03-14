export const countController = (minus, number, plus, input, returnCount) => {
  let n = +input.value;

  minus.addEventListener('click', () => {
    if (n > 1) {
      n -= 1;
    }
    number.textContent = n;
    input.value = n;
    returnCount(n);
  });
  plus.addEventListener('click', () => {
    n += 1;
    number.textContent = n;
    input.value = n;
    returnCount(n);
  });
};
