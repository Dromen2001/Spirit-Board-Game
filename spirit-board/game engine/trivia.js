import { triviaQuestions } from "../data/gameData.js";
import { multiChoice, multiOptions } from "../gaming.js";
import { triviaAnswer } from "./triviaanswer.js";
let nextQuestion = 0;
let choices = 0;



export const triviaing = () => {
    triviaAnswer()
    multiChoice.removeAttribute("hidden");
    multiChoice.innerText = triviaQuestions[nextQuestion].triviaQuestion;
    multiOptions.innerHTML = triviaQuestions[choices].multipleChoice
      ?.map((choice) => `<li>${choice.id}:  ${choice.questionnaire}</li>`)
      .join("");
    nextQuestion++;
    choices++;
  };

