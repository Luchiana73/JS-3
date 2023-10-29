const studentsPoints = [
  124, 50, 540, 60, 1200, 600, 18, 3524, 5800, 400, 750, 2300, 180, 32, 930,
  11000, 200, 64, 8, 90, 1800, 350, 84, 8450,
];

for (let i = 0; i < studentsPoints.length; i++) {
  for (let j = 0; j < studentsPoints.length - i - 1; j++) {
    console.log(`Промежуточный массив ${studentsPoints}`);
    console.log("____________новая итерация");
    console.log(`Сравниваем индексы ${[j]} и ${[j + 1]}`);
    console.log(
      `Сравниваем пару ${studentsPoints[j]} и ${studentsPoints[j + 1]}`
    );
    console.log(`Работаем с массивом ${studentsPoints}`);

    if (studentsPoints[j] < studentsPoints[j + 1]) {
      let temp = studentsPoints[j];
      studentsPoints[j] = studentsPoints[j + 1];
      studentsPoints[j + 1] = temp;
    }
  }
}
console.log(studentsPoints);
