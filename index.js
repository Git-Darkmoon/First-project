let a;
let b;
let c;
let resultTemplate = document.getElementById("result");

const recogerValores = () => {
  a = parseInt(document.getElementById("inputA").value);
  b = parseInt(document.getElementById("inputB").value);
  c = parseInt(document.getElementById("inputC").value);
};

const escribirResultado = (result) => {
  resultTemplate.value = result;
};

const rp = () => {
  recogerValores();
  escribirResultado((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
};

const nr = () => {
  recogerValores();
  escribirResultado((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
};
