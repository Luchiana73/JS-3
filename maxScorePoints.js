const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
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

console.log(
  `Игрок ${bestPlayer} набрал ${maxResult} очков и это лучший результат`
);
