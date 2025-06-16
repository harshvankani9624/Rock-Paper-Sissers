let start_btn = document.querySelector(".start");
let reset_game = document.querySelector(".restart");
let notice = document.querySelector(".notice");
let icons = document.querySelectorAll(".emogi");
let pc = document.querySelector(".count1");
let cc = document.querySelector(".count2");

pc.innerText = "0";
cc.innerText = "0";

// Winnings Record
let player_won = 0;
let com_won = 0;

// Game Starting Button click
start_btn.addEventListener("click", (event) => {
  start_btn.innerText = "STARTED";
  notice.innerText = "Your Turn to Select..!";

  // Rock Papper Sessor Button Click by Player
  icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      // Player Button
      let p = icon.id;
      // Computor Random Button
      let c = Math.floor(Math.random() * 3) + 1;

      // Comparison Of Both Selected Button
        
      // Player Winning
      if (p == 3 && c == 2) {
        notice.innerText = "You Won ! Computer : Paper";
        notice_reset();
        player_record();
      } else if (p == 1 && c == 3) {
        notice.innerText = "You Won ! Computer : Sessor";
        notice_reset();
        player_record();
      } 
        // Tie  
      else if (p == c) {
        notice.innerText = "!...Tie...!";
        notice_reset();
      } 
        // Player Lose
      else if (p == 2 && c == 3) {
        notice.innerText = "You Lose ! Computer : Sessor";
        notice_reset();
        com_record();
      } else if (p == 3 && c == 1) {
        notice.innerText = "You Lose ! Computer : Rock";
        notice_reset();
        com_record();
      } 
        // Non Winning Time
      else {
        if (c == 1) {
          notice.innerText = "Computer : Rock";
          notice_reset();
        } else if (c == 2) {
          notice.innerText = "Computer : Paper";
          notice_reset();
        } else if (c == 3) {
          notice.innerText = "Computer : Sessor";
          notice_reset();
        }
      }
    });
  });
});

// Notice reset
function notice_reset() {
  setTimeout(() => {
    notice.innerText = "Your Turn to Select";
  }, 1500);
}

// Winning Record Update
function player_record() {
  player_won++;
  pc.innerText = player_won;
}
function com_record() {
  com_won++;
  cc.innerText = com_won;
}

// Reset Game
reset_game.addEventListener("click",(event)=>{
    location.reload();
});
