"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random() * 10) + 1;

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum == 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker == player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Mitch", "Chris", "100", "100");

const getGrade = (number) => {
  return number >= 90
    ? "A"
    : number >= 80
    ? "B"
    : number >= 70
    ? "C"
    : number >= 60
    ? "D"
    : "F";
};

console.log(getGrade(49));

const prioritize = (urgent, important) => {
  return urgent && important ? 1 : important ? 2 : urgent ? 3 : 4;
};

console.log(prioritize(false, false));

const calculatePay = (hours, wages) => {
  return hours <= 40 && hours > 0
    ? hours * wages
    : hours > 40
    ? 40 * wages + (hours - 40) * wages * 1.5
    : "Did you even work?";
};

console.log(calculatePay(60, 12));
