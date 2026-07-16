import { yesNo, AToM, NToZ, boardNum, helloGoodbye} from "./data/boardData.js";
  
  
export const spiritChoice = document.querySelector("#spirit-yes-no");
export const spiritAM = document.querySelector("#spirit-a-m");
export const spiritNZ = document.querySelector("#spirit-n-z");
export const spiritNum = document.querySelector("#spirit-1-0");
export const spiritSalutation = document.querySelector("#spirit-sal");



export let agreeDiv = "";
  for (const agree of yesNo) {
    spiritChoice.innerHTML =
      agreeDiv += `<div class="spirit-board-agree">${agree}</div>`;
  }

export let alpha1Div = "";
  for (const letterAM of AToM) {
    spiritAM.innerHTML =
      alpha1Div += `<div class="spirit-board-alpha1Div">${letterAM}</div>`;
  }

export let alpha2Div = "";
  for (const letterNZ of NToZ) {
    spiritNZ.innerHTML =
      alpha2Div += `<div class="spirit-board-alpha2Div">${letterNZ}</div>`;
  }

export let numbersDiv = "";
  for (const count of boardNum) {
    spiritNum.innerHTML =
      numbersDiv += `<div class="spirit-board-numbersDiv">${count}</div>`;
  }

export let saluDiv = "";
  for (const regard of helloGoodbye) {
    spiritSalutation.innerHTML =
      saluDiv += `<div class="spirit-board-salutationP">${regard}</div>`;
  }