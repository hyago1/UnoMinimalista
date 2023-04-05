const express = require('express');
const app = express();
const http = require('http');
const { start } = require('repl');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/game.html');
  });
server.listen(3000, () => {
  console.log('listening on *:3000');
});
var p = 10;



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
const jokerCard = { cod: "Joker", number: "X" }

var scramble = new Array();
scramble.length = 7;
var scramble2 = new Array();
scramble2.length = 7;
var pile;
var game = new Array();
game.length = 1000;

var pull = new Array();
pull.length = 500;

var lastColor = "";
var lastNumber;

var validation = false;

var turn = 1;







     var n = Math.floor(Math.random() * cards.length);
        for (let i = 0; i < game.length; i++) {
          if (game[i] == null) {
            game[i] = n;
          }
      
          lastColor = cards[n].color;
          lastNumber = cards[n].number;
          console.log(lastColor + " Começo");
          console.log(lastNumber + " Numero");
          pile = `
          <div  style="background-color:${cards[n].color};" class="card" id="${i}" > 
          <div class="cornerUpDiv">
          <span id="cornerUp"> 1</span> </div> <span> 1</span> 
          <div class="cornerDownDiv">
          <span id="cornerDown"> 1</span></div> 
          </div>`;
      
          break;
        }

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
          
         



io.on('connection', (socket) => {
   

    console.log('a user connected');

      io.emit('start', scramble,scramble2, pile)



    


  });