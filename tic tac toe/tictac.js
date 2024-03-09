let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let audioElement  = new Audio("playful-140946.mp3");
let icon = document.getElementById("icon");
let turnX = true;
let msg = document.getElementById("msg");

icon.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      icon.classList.remove('fa-volume-xmark');
      icon.classList.add('fa-volume-high');
      
  }
  else{
      audioElement.pause();
      icon.classList.remove('fa-volume-high');
      icon.classList.add('fa-volume-xmark');
      
  }
})

const resetgame = () => {
  turnX = true;
  msg.innerText = "turn for 'X'";
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
reset.addEventListener("click", () => {
  resetgame();
});

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turnX === true) {
      box.innerText = "X";
      turnX = false;
      msg.innerText = "turn for '0'";
      console.log("hi");
    } else {
      box.innerText = "0";
      turnX = true;
      msg.innerText = "turn for 'X'";
    }
    checkwinner();
  });
});

const disabledbtn = (e) => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        msg.innerText = `player ${pos1val} wins`;
        disabledbtn();
      }
    }
  }
};
