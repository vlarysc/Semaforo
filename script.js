const vermelho = document.getElementById("1");
const amarelo = document.getElementById("0");
const verde = document.getElementById("2");
const cores = {
  0: amarelo,
  1: vermelho,
  2: verde,
};
let corIndex = 0;

setInterval(() => {
  if (corIndex === 0) {
    cores[2].classList.remove("verde");
    cores[1].classList.remove("vermelho");
    cores[0].classList.add("amarelo");
  }
  if (corIndex === 1) {
    cores[2].classList.remove("verde");
    cores[0].classList.remove("amarelo");
    cores[1].classList.add("vermelho");
  }
  if (corIndex === 2) {
    cores[1].classList.remove("vermelho");
    cores[0].classList.remove("amarelo");
    cores[2].classList.add("verde");
  }
  corIndex++;
  if (corIndex === 3) {
    corIndex = 0;
  }
}, 2000);
