import { yesNo, AToM, NToZ, boardNum, helloGoodbye} from "./data/boardData.js";
  
  
export const spiritChoice = document.querySelector("#spirit-yes-no");
export const spiritAM = document.querySelector("#spirit-a-m");
export const spiritNZ = document.querySelector("#spirit-n-z");
export const spiritNum = document.querySelector("#spirit-1-0");
export const spiritSalutation = document.querySelector("#spirit-sal");




  for (const agree of yesNo) {
    let agreeDiv = document.createElement('div');
    agreeDiv.className = 'spirit-board-agree';
    agreeDiv.innerText = `${agree}`;
    spiritChoice.append(agreeDiv);
  }


  for (const letterAM of AToM) {
    let alpha1Div = document.createElement('div');
    alpha1Div.className = 'spirit-board-alpha1Div';
    alpha1Div.innerText = `${letterAM}`;
    spiritAM.append(alpha1Div)
  }


  for (const letterNZ of NToZ) {
    let alpha2Div = document.createElement('div');
    alpha2Div.className = 'spirit-board-alpha2Div';
    alpha2Div.innerText = `${letterNZ}`;
    spiritNZ.append(alpha2Div);
  }

  for (const count of boardNum) {
    let numbersDiv = document.createElement('div');
    numbersDiv.className = 'spirit-board-numbersDiv';
    numbersDiv.innerText = `${count}`;
    spiritNum.append(numbersDiv);
  }


  for (const regard of helloGoodbye) {
    let saluDiv = document.createElement('div');
    saluDiv.className = 'spirit-board-salutationP';
    saluDiv.innerText = `${regard}`;
    spiritSalutation.append(saluDiv);
  }