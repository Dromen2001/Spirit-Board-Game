import { triviaQuestions } from "../data/gameData.js";
import { multiChoice, multiOptions } from "../gaming.js";
import { triviaAnswer } from "./triviaanswer.js";
let nextQuestion = 0;
let choices = 0;



export const triviaing = () => {
    triviaAnswer()
    multiChoice.removeAttribute("hidden");
    multiChoice.innerText = triviaQuestions[nextQuestion].triviaQuestion;
    const distractors = triviaQuestions[choices].multipleChoice;
    let choice = "";
    for (const [key, value] of Object.entries(distractors)) {
      console.log(`${key}: ${value}`);
      return choice;
      choice += `<li>${key}: ${value}</li>`; 
    }
    multiOptions.innerHTML = choice;
    nextQuestion++;
    choices++;
  };

