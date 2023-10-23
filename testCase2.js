/*Пустой список игроков:
Ожидаемый результат: "Игрок undefined набрал undefined очков и это лучший результат".*/

const players = [];

const allScores = [];
let maxResult;
let bestPlayer;

for (let key in players) {
  allScores.push(players[key].scorePoints);
  maxResult = Math.max(...allScores);
  if (players[key].scorePoints === maxResult) {
    bestPlayer = players[key].name;
  }
}

console.log(
  `Игрок ${bestPlayer} набрал ${maxResult} очков и это лучший результат`
);
