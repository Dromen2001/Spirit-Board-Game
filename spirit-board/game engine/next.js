import { gameAnswered, gameQuestion, multiChoice, multiOptions, nextBttn, nextBttn2 } from "../gaming.js";
import { controller1, controller2 } from "./controllers.js";
import { riddling } from "./riddles.js";
import { triviaing } from "./trivia.js";
import { triviaAnswer } from "./triviaanswer.js";



let nextQuestion = 0;
let choices = 0;
let answering = 0;
let seconds_left = 300;

export const nextBttnFunc = () => {
    if (answering === 13) {
      nextBttn.style.display = "block";
    }
    nextBttn.addEventListener("click", (e) => {
      gameQuestion.removeAttribute("hidden");
      gameAnswered.innerHTML = "";
      triviaing();
      nextBttn.style.display = "none";
      seconds_left += 15;
      controller1.abort();
    });
  };

export const nextBttnFunc2 = () => {
    if (answering === 6) {
      nextBttn2.style.display = "block";
    }
    nextBttn2.addEventListener("click", () => {
      gameQuestion.removeAttribute("hidden");
      gameAnswered.innerHTML = "";
      riddling();
      nextBttn2.style.display = "none";
      seconds_left += 25;
      multiChoice.style.display = "none";
      multiOptions.style.display = "none";
      controller2.abort();
    });
  };