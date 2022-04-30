const cards = [
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "R+2",
    color: "#d60b11",
    number: "M2",
  },
  {
    cod: "R1",
    color: "#d60b11",
    number: 1,
  },
  {
    cod: "BlockR",
    color: "#d60b11",
    number: "@",
  },
  {
    cod: "R2",
    color: "#d60b11",
    number: 2,
  },
  {
    cod: "R3",
    color: "#d60b11",
    number: 3,
  },
  {
    cod: "R4",
    color: "#d60b11",
    number: 4,
  },
  {
    cod: "R5",
    color: "#d60b11",
    number: 5,
  },
  {
    cod: "R6",
    color: "#d60b11",
    number: 6,
  },
  {
    cod: "R7",
    color: "#d60b11",
    number: 7,
  },
  {
    cod: "R8",
    color: "#d60b11",
    number: 8,
  },
  {
    cod: "R9",
    color: "#d60b11",
    number: 9,
  },
  {
    cod: "G1",
    color: "#67bd42",
    number: 1,
  },
  {
    cod: "BlockG",
    color: "#67bd42",
    number: "@",
  },
  {
    cod: "G+2",
    color: "#67bd42",
    number: "M2",
  },
  {
    cod: "G2",
    color: "#67bd42",
    number: 2,
  },
  {
    cod: "G3",
    color: "#67bd42",
    number: 3,
  },
  {
    cod: "G4",
    color: "#67bd42",
    number: 4,
  },
  {
    cod: "G5",
    color: "#67bd42",
    number: 5,
  },
  {
    cod: "G6",
    color: "#67bd42",
    number: 6,
  },
  {
    cod: "G7",
    color: "#67bd42",
    number: 7,
  },
  {
    cod: "G8",
    color: "#67bd42",
    number: 8,
  },
  {
    cod: "G9",
    color: "#67bd42",
    number: 9,
  },
  {
    cod: "B1",
    color: "#133fc2",
    number: 1,
  },
  {
    cod: "BlockB",
    color: "#133fc2",
    number: "@",
  },
  {
    cod: "B+2",
    color: "#133fc2",
    number: "M2",
  },
  {
    cod: "B2",
    color: "#133fc2",
    number: 2,
  },
  {
    cod: "B3",
    color: "#133fc2",
    number: 3,
  },
  {
    cod: "B4",
    color: "#133fc2",
    number: 4,
  },
  {
    cod: "B5",
    color: "#133fc2",
    number: 5,
  },
  {
    cod: "B6",
    color: "#133fc2",
    number: 6,
  },
  {
    cod: "B7",
    color: "#133fc2",
    number: 7,
  },
  {
    cod: "B8",
    color: "#133fc2",
    number: 8,
  },
  {
    cod: "B9",
    color: "#133fc2",
    number: 9,
  },
  {
    cod: "Y1",
    color: "#f7f01e",
    number: 1,
  },
  {
    cod: "BlockY",
    color: "#f7f01e",
    number: "@",
  },
  {
    cod: "Y+2",
    color: "#f7f01e",
    number: "M2",
  },
  {
    cod: "Y1",
    color: "#f7f01e",
    number: 2,
  },
  {
    cod: "Y3",
    color: "#f7f01e",
    number: 3,
  },
  {
    cod: "Y4",
    color: "#f7f01e",
    number: 4,
  },
  {
    cod: "Y5",
    color: "#f7f01e",
    number: 5,
  },
  {
    cod: "Y6",
    color: "#f7f01e",
    number: 6,
  },
  {
    cod: "Y7",
    color: "#f7f01e",
    number: 7,
  },
  {
    cod: "Y8",
    color: "#f7f01e",
    number: 8,
  },
  {
    cod: "Y9",
    color: "#f7f01e",
    number: 9,
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
];
const jokerCard = {cod:"Joker", number:"X"}
var joker = document.getElementById("joker");
var pile = document.getElementById("game");
var scramble = new Array();
scramble.length = 7;
var scramble2 = new Array();
scramble2.length = 7;

var game = new Array();
game.length = 1000;

var pull = new Array();
pull.length = 500;

var lastColor = "";
var lastNumber;

var validation = false;
start();
function start() {
  var n = Math.floor(Math.random() * cards.length);
  for (let i = 0; i < game.length; i++) {
    if (game[i] == null) {
      game[i] = n;
    }

    lastColor = cards[n].color;
    lastNumber = cards[n].number;
    console.log(lastColor + " Começo");
    console.log(lastNumber + " Numero");
    pile.innerHTML = `
    <div  style="background-color:${cards[n].color};" class="card" id="${i}" > 
    <div class="cornerUpDiv">
    <span id="cornerUp"> ${specialCard(
      cards[n].number,
      "u"
    )}</span> </div> <span> ${specialCard(cards[n].number, "m")}</span> 
    <div class="cornerDownDiv">
    <span id="cornerDown"> ${specialCard(cards[n].number, "d")}</span></div> 
    </div>`;

    break;
  }

  makeScramble();
}

function specialCard(typeCard, U) {
  var circleMainBlock = `<div class="circleBlock"><div class="diagonal"></div></div>`;
  var circleUBlock = `<div class="circleUDBlock"><div class="diagonal"></div></div>`;
  var circleDBlock = `<div class="circleUDBlock"><div class="diagonal"></div></div>`;
  var circleMain = `<div class="circle"></div>`;
  var circleU = `<div class="circleUD"></div>`;
  var circleD = `<div class="circleUD"></div>`;

  if (typeCard == "()") {
    if (U == "u") {
      return circleU;
    }
    if (U == "d") {
      return circleD;
    }
    if (U == "m") {
      return circleMain;
    }
  }

  if (typeCard == "@") {
    if (U == "u") {
      return circleUBlock;
    }
    if (U == "d") {
      return circleDBlock;
    }
    if (U == "m") {
      return circleMainBlock;
    }
  }

  return typeCard;
}

function makeScramble() {
  for (let i = 0; i < scramble2.length; i++) {
    if (scramble[i] == null) {
      scramble[i] = Math.floor(Math.random() * cards.length);
    }
  }
  for (let i = 0; i < scramble2.length; i++) {
    if (scramble2[i] == null) {
      scramble2[i] = Math.floor(Math.random() * cards.length);
    }
  }

  showDecks();
}

function addFourCards(player, id) {
  if (player == 2) {
    scramble.length = scramble.length + 4;
    for (let i = 0; i < scramble.length; i++) {
      if (scramble[i] == null) {
        scramble[i] = Math.floor(Math.random() * cards.length);
      }
    }
  }
  if (player == 1) {
    scramble2.length = scramble2.length + 4;
    for (let i = 0; i < scramble2.length; i++) {
      if (scramble2[i] == null) {
        scramble2[i] = Math.floor(Math.random() * cards.length);
      }
    }
  }
chooseColor("#0f0f0f" , true , 2 )

}
function addTwoCards(player, id) {
  if (player == 1) {
    scramble2.length = scramble2.length + 2;
    for (let i = 0; i < scramble2.length; i++) {
      if (scramble2[i] == null) {
        scramble2[i] = Math.floor(Math.random() * cards.length);
      }
    }
  }
  if (player == 2) {
    scramble.length = scramble.length + 2;
    for (let i = 0; i < scramble.length; i++) {
      if (scramble[i] == null) {
        scramble[i] = Math.floor(Math.random() * cards.length);
      }
    }
  }

  showDecks();
}

function playCard(scram, id, player) {
  validation = false;

  if (verificationCard(scram) == true) {
    lastColor = cards[scram].color;
    lastNumber = cards[scram].number;

    for (let i = 0; i < game.length; i++) {
      if (game[i] == null) {
        game[i] = scram;
      }

      if (cards[scram].number == "()") {
        chooseColor("#0f0f0f", true, scram);
      }

      if (cards[scram].number == "M4") {
        if (player == 1) {
          alert("+4 cartas para p2");
          addFourCards(1, id);
        }
        if (player == 2) {
          alert("+4 cartas para p1");
          addFourCards(2, id);
        }
      }

      if (cards[scram].number == "M2") {
        if (player == 1) {
          alert("+2 cartas para p2");
          addTwoCards(1, id);
        }
        if (player == 2) {
          alert("+2 cartas para p1");
          addTwoCards(2, id);
        }
      }

      pile.innerHTML = `
          <div  style="background-color:${
            cards[scram].color
          };" class="card" id="${i}" > 
          <div class="cornerUpDiv">
          <span id="cornerUp">${specialCard(
            cards[scram].number,
            "u"
          )}</span> </div> <span>${specialCard(
        cards[scram].number,
        "m"
      )}</span> 
          <div class="cornerDownDiv">
          <span id="cornerDown">${specialCard(
            cards[scram].number,
            "d"
          )}</span></div> 
          </div> `;

      if (player == 1) {
        scramble.splice(id, 1);
      }
      if (player == 2) {
        scramble2.splice(id, 1);
      }

      break;
    }
  }

  showDecks();
}

function verificationCard(scram) {
  console.log(cards[scram].color);
  console.log(cards[scram].number);

  if (cards[scram].color == lastColor) {
    console.log("True color");
    validation = true;
  } else if (cards[scram].number == lastNumber) {
    validation = true;
    console.log("True number");
  } else if (cards[scram].color == "#0f0f0f") {
    validation = true;
  }

  return validation;
}

function chooseColor(color, cOrca, scram) {
  var visible = "visible";
  var hidden = "hidden";

  lastColor = color;
  lastNumber = cards[scram].number;

  var joker = document.getElementById("joker");
  console.log(color, scram);
  if (cOrca.this = true) {
    joker.style.visibility = visible;
  }
  if (cOrca == false) {

    joker.style.visibility = hidden;
  }


console.log("Cor do joker" + lastColor);

  pile.innerHTML = `
  <div  style="background-color:${color};" class="card"  > 
  <div class="cornerUpDiv">
  <span id="cornerUp"> ${jokerCard.number}</span> </div> <span> ${jokerCard.number}</span> 
  <div class="cornerDownDiv">
  <span id="cornerDown"> ${jokerCard.number}</span></div> 
  </div>`;

  showDecks();
}

function showDecks() {
  console.log(scramble.length + "---- player 1");
  console.log(scramble2.length + " ----player 2");
  console.log("      ");
  var lista2 = document.getElementById("lista2");
  lista2.innerHTML = "";
  var lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i = 0; i < scramble2.length; i++) {
    lista2.innerHTML += `<li class="list">
    <div  style="background-color:${
      cards[scramble2[i]].color
    };" class="card" id="${i}" onClick="playCard(${scramble2[i]} , ${i} , 2)"> 
    <div class="cornerUpDiv">
    <span id="cornerUp">${specialCard(
      cards[scramble2[i]].number,
      "u"
    )}</span> </div> <span> ${specialCard(
      cards[scramble2[i]].number,
      "m"
    )}</span> 
    <div class="cornerDownDiv">
    <span id="cornerDown">${specialCard(
      cards[scramble2[i]].number,
      "d"
    )}</span></div> 
    </div></li>`;
  }

  for (let i = 0; i < scramble.length; i++) {
    lista.innerHTML += `<li class="list">
    <div  style="background-color:${
      cards[scramble[i]].color
    };" class="card" id="${i}" onClick="playCard(${scramble[i]} , ${i}, 1)"> 
    <div class="cornerUpDiv">
    <span id="cornerUp">${specialCard(
      cards[scramble[i]].number,
      "u"
    )}</span> </div> <span> ${specialCard(
      cards[scramble[i]].number,
      "m"
    )}</span> 
    <div class="cornerDownDiv">
    <span id="cornerDown">${specialCard(
      cards[scramble[i]].number,
      "d"
    )}</span></div> 
    </div> </li>`;
  }
}
