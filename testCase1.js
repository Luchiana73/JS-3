/*Набор данных с игроками, у которых одинаковое максимальное количество очков.
Ожидаемый результат: "Игрок Ivan, Petr набрал 4500 очков и это лучший результат".*/

const players = [
  { id: 1, name: "Ivan", scorePoints: 4500 },
  { id: 2, name: "Petr", scorePoints: 4500 },
  { id: 3, name: "Vadim", scorePoints: 3433 },
  { id: 4, name: "Olga", scorePoints: 2356 },
];

const allScores = [];
let maxResult;
let bestPlayers = [];

for (let key in players) {
  allScores.push(players[key].scorePoints);
  maxResult = Math.max(...allScores);

  if (players[key].scorePoints === maxResult) {
    bestPlayers.push(players[key].name);
  }
}

if (bestPlayers.length > 1) {
  console.log(
    `Игроки ${bestPlayers.join(
      ", "
    )} набрали ${maxResult} очков и это лучший результат`
  );
} else {
  console.log(
    `Игрок ${bestPlayers.join(
      ", "
    )} набрал ${maxResult} очков и это лучший результат`
  );
}
