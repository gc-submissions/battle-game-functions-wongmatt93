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
  if (number >= 90) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else if (number < 60) {
    return "F";
  }
};

console.log(getGrade(49));

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (important) {
    return 2;
  } else if (urgent) {
    return 3;
  } else {
    return 4;
  }
};

console.log(prioritize(false, true));

const calculatePay = (hours, wages) => {
  if (hours <= 40 && hours > 0) {
    return hours * wages;
  } else if (hours > 40) {
    return 40 * wages + (hours - 40) * wages * 1.5;
  } else {
    return "Did you even work?";
  }
};

console.log(calculatePay(60, 12));
