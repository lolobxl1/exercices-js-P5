//votre code ici

export default printNumbers;

function printNumbers(n) {
  let numbers;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      numbers = i.toString();
    } else {
      numbers += " " + i.toString();
    }
  }
  return numbers;
}
