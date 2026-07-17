import { trueFalse } from "../gaming.js";
import { trueOrFalse } from "../data/gameData.js";
import { trueFalseAnswering } from "./tfanswer.js";
let nextQuestion = 0;

export const trueFalsing = () => {
    // trueFalseAnswering();
    trueFalse.removeAttribute("hidden");
    trueFalse.innerText = trueOrFalse[nextQuestion].statement;
    nextQuestion++;
  };

