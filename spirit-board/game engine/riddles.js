import { theRiddles } from "../data/gameData.js";
import { riddleQuestion } from "../gaming.js";
import { riddleAnswer } from "./riddleanswer.js";
let nextQuestion = 0;

export const riddling = () => {
      riddleAnswer()
      riddleQuestion.removeAttribute("hidden");
      riddleQuestion.innerText = theRiddles[nextQuestion].riddle;
      nextQuestion++;
    };

