/*Набор данных с отрицательными очками:
Ожидаемый результат: "Ошибка, Счет не может быть отрицательным".*/

const players = [
  { id: 1, name: "Ivan", scorePoints: 500 },
  { id: 2, name: "Petr", scorePoints: -200 },
  { id: 3, name: "Vadim", scorePoints: 600 },
  { id: 4, name: "Olga", scorePoints: -100 },
];

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

let hasNegativeScore = false;
for (let i = 0; i < allScores.length; i++) {
  if (allScores[i] < 0) {
    hasNegativeScore = true;
    console.log("Ошибка! Счет не может быть отрицательным");
    break;
  }
}
if (!hasNegativeScore) {
  console.log(
    `Игрок ${bestPlayer} набрал ${maxResult} очков и это лучший результат`
  );
}
