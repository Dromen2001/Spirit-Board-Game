import { triviaQuestions } from "../data/gameData.js";
import { multiChoice, multiOptions } from "../gaming.js";
import { triviaAnswer } from "./triviaanswer.js";
let nextQuestion = 0;
let choices = 0;

export const triviaing = () => {
    triviaAnswer()
    multiChoice.removeAttribute("hidden");
    multiChoice.innerText = triviaQuestions[nextQuestion].triviaQuestion;
    let choice = "";
    for (const [key, value] of Object.entries(triviaQuestions[choices].multipleChoice)) {
      choice = document.createElement("li");
      choice.innerText = `${key}: ${value}`;
      console.log(choice);
      multiOptions.append(choice);
    }
    nextQuestion++;
    choices++;
  };

