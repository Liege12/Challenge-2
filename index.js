let players = [
  { name: "Player1", victories: 5, defeats: 1 },
  { name: "Player2", victories: 20, defeats: 2 },
  { name: "Player3", victories: 30, defeats: 3 },
  { name: "Player4", victories: 100, defeats: 10 },
  { name: "Player5", victories: 80, defeats: 5 },
  { name: "Player6", victories: 91, defeats: 0 },
  { name: "Player7", victories: 101, defeats: 0 },
];

function getData(victories, defeats) {
  return victories - defeats;
}

for (let i = 0; i < 7; i++) {
  let name = players[i].name;
  let victories = players[i].victories;
  let defeats = players[i].defeats;

  let result = getData(victories, defeats);

  let level = "";

  if (victories - defeats < 10) {
    level = "Ferro";
  } else if (victories - defeats <= 20) {
    level = "Bronze";
  } else if (victories - defeats <= 50) {
    level = "Prata";
  } else if (victories - defeats <= 80) {
    level = "Ouro";
  } else if (victories - defeats <= 90) {
    level = "Diamante";
  } else if (victories - defeats <= 100) {
    level = "Lendário";
  } else {
    level = "Imortal";
  }

  console.log(`O ${name} tem de saldo: ${result} e esta no nivel: ${level}`);
}
