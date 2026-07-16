import { triviaQuestions } from "../data/gameData.js";
import { gameAnswered, multiChoice, multiOptions, nextBttn2 } from "../gaming.js";
import { spiritAM } from "../placement.js";
import { controller2 } from "./controllers.js";
import { triviaing } from "./trivia.js";

let answering = 0;
let seconds_left = 300;


export const triviaAnswer = () => {
    spiritAM.addEventListener(
      "click",
      (e) => {
        let isUserChosen =
          e.target.textContent === "A" ||
          e.target.textContent === "B" ||
          e.target.textContent === "C";
        console.log(isUserChosen);
        console.log("Current Index:", answering);
        console.log("Target Text:", e.target.textContent);
        console.log("Current Question Object:", triviaQuestions[answering]);
        if (
          isUserChosen ===
          triviaQuestions[answering]?.answers[e.target.textContent]
        ) {
          gameAnswered.innerHTML = "";
          triviaing();
          console.log(gameAnswered);
          answering++;
          nextBttnFunc2();
        } else {
          gameAnswered.innerText = "Wrong Answer!";
        }
      },
      { signal: controller2.signal },
    );
  };

  const nextBttnFunc2 = () => {
      if (answering === 6) {
        nextBttn2.style.display = "block";
      }
      nextBttn2.addEventListener("click", () => {
        gameAnswered.innerHTML = "";
        riddling();
        nextBttn2.style.display = "none";
        seconds_left += 25;
        multiChoice.style.display = "none";
        multiOptions.style.display = "none";
        controller2.abort();
      });
    };