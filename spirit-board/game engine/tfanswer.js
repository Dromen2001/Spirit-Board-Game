import { spiritChoice } from "../placement.js";
import { controller1 } from "./controllers.js";
import { trueOrFalse } from "../data/gameData.js";
import { gameAnswered, nextBttn } from "../gaming.js";
import { trueFalsing } from "./truefalse.js";
import { triviaing } from "./trivia.js";

let answering = 0;
let seconds_left = 300;


export const trueFalseAnswering = () => {
    spiritChoice.addEventListener(
      "click",
      (e) => {
        let isUserTrue =
          e.target.textContent === "YES" || e.target.textContent === "NO";
        if (
          isUserTrue === trueOrFalse[answering].answers[e.target.textContent]
        ) {
          console.log(trueOrFalse[answering].answers.answer);
          gameAnswered.innerText = trueOrFalse[answering].answers.answer;
          trueFalsing();
          answering++;
          nextBttnFunc();
        } else {
          gameAnswered.innerText = "Wrong Answer!";
        }
      },
      { signal: controller1.signal },
    );
  };

  const nextBttnFunc = () => {
      if (answering === 13) {
        nextBttn.style.display = "block";
      }
      nextBttn.addEventListener("click", (e) => {
        gameAnswered.innerHTML = "";
        triviaing();
        nextBttn.style.display = "none";
        seconds_left += 15;
        controller1.abort();
      });
    };
