let box = document.getElementsByTagName("div");
let counter = 0;

let arr = [];
for (let i = 0; i < box.length; i++) {
  arr.push(document.getElementById(`${i + 1}`));
  document.getElementById(`${i + 1}`).disabled = false;
}

for (let i = 0; i < box.length; i++) {
  let btn1 = document.getElementById(`${i + 1}`);
  btn1.addEventListener("click", (e) => {
    if (btn1.disabled == false) {
      if (counter % 2 === 0) {
        btn1.innerText = "X";
      } else {
        btn1.innerText = "O";
      }
      btn1.disabled = true;
      console.log(counter);
      counter++;
      if (
        (arr[0].innerText != "" &&
          arr[1].innerText != "" &&
          arr[2].innerText != "" &&
          arr[0].innerText === arr[1].innerText &&
          arr[1].innerText === arr[2].innerText) ||
        (arr[3].innerText != "" &&
          arr[4].innerText != "" &&
          arr[5].innerText != "" &&
          arr[3].innerText === arr[4].innerText &&
          arr[4].innerText === arr[5].innerText) ||
        (arr[6].innerText != "" &&
          arr[7].innerText != "" &&
          arr[8].innerText != "" &&
          arr[6].innerText === arr[7].innerText &&
          arr[7].innerText === arr[8].innerText) ||
        (arr[0].innerText != "" &&
          arr[3].innerText != "" &&
          arr[6].innerText != "" &&
          arr[0].innerText === arr[3].innerText &&
          arr[3].innerText === arr[6].innerText) ||
        (arr[1].innerText != "" &&
          arr[4].innerText != "" &&
          arr[7].innerText != "" &&
          arr[1].innerText === arr[4].innerText &&
          arr[4].innerText === arr[7].innerText) ||
        (arr[2].innerText != "" &&
          arr[5].innerText != "" &&
          arr[8].innerText != "" &&
          arr[2].innerText === arr[5].innerText &&
          arr[5].innerText === arr[8].innerText) ||
        (arr[0].innerText != "" &&
          arr[4].innerText != "" &&
          arr[8].innerText != "" &&
          arr[0].innerText === arr[4].innerText &&
          arr[4].innerText === arr[8].innerText) ||
        (arr[2].innerText != "" &&
          arr[4].innerText != "" &&
          arr[6].innerText != "" &&
          arr[2].innerText === arr[4].innerText &&
          arr[4].innerText === arr[6].innerText)
      ) {
        if (counter % 2 === 0) {
          alert("Congratulations! Player2 wins");
          clear();
        } else {
          alert("Congratulations! Player1 wins");
          clear();
        }
      }
      if (counter === 9) {
        if (
          (arr[0].innerText === arr[1].innerText &&
            arr[1].innerText === arr[2].innerText) ||
          (arr[3].innerText === arr[4].innerText &&
            arr[4].innerText === arr[5].innerText) ||
          (arr[6].innerText === arr[7].innerText &&
            arr[7].innerText === arr[8].innerText) ||
          (arr[0].innerText === arr[3].innerText &&
            arr[3].innerText === arr[6].innerText) ||
          (arr[1].innerText === arr[4].innerText &&
            arr[4].innerText === arr[7].innerText) ||
          (arr[2].innerText === arr[5].innerText &&
            arr[5].innerText === arr[8].innerText) ||
          (arr[0].innerText === arr[4].innerText &&
            arr[4].innerText === arr[8].innerText) ||
          (arr[2].innerText === arr[4].innerText &&
            arr[4].innerText === arr[6].innerText)
        ) {
          alert("Congratulations! Player1 wins");
          clear();
        } else {
          alert("Draw!");
          clear();
        }
      }
    }
  });
}

function clear() {
  for (let i = 0; i < box.length; i++) {
    arr[i].innerText = "";
    arr[i].disabled = false;
  }
  counter = 0;
}
