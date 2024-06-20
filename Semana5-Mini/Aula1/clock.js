const horasElemento = document.querySelector(".hour");
const minutosElemento = document.querySelector(".minutes");

const relogioInterval = setInterval(() => {
  const date = new Date();
  console.log(date);
}, 1000);

