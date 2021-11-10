let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

const changeNumbs = () => {
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  randomNumber2 = Math.floor(Math.random() * 6 + 1);
};

document.querySelector("button").addEventListener("click", function () {
  changeNumbs();
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);
  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").innerHTML =
      "<h1><i class='visible fas fa-trophy'></i>Player1 Wins!</h1>";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".title").innerHTML =
      "<h1>Player2 Wins!<i class='visible fas fa-trophy'></i></h1>";
  } else {
    document.querySelector(".title").innerHTML =
      "<h1>Draw!</h1><i class='invisible fas fa-trophy'></i>";
  }
});

{
  /* <i class="fas fa-trophy"></i>; */
}
