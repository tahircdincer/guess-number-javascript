let score = 20;
let highScore = 0;
const number= Math.trunc(Math.random() * 20 + 1);

const showMessage = function (message) {
  document.querySelector(" .message ").textContent = message;
};

document.querySelector( ' .check ' ).addEventListener( ' click ', function {
    const guess= document.querySelector( ' .guess ' ).value;
    if ( guess === number )
})
