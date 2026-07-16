import { trueFalse } from "../gaming.js";
import { trueOrFalse } from "../data/gameData.js";
let nextQuestion = 0;

export const trueFalsing = () => {
    trueFalse.removeAttribute("hidden");
    trueFalse.innerText = trueOrFalse[nextQuestion].statement;
    nextQuestion++;
  };

