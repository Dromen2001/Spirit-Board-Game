import { theRiddles } from "../data/gameData.js";
import { gameAnswered } from "../gaming.js";
import { spiritSalutation } from "../placement.js";
import { riddling } from "./riddles.js";

let answering = 0;

export const riddleAnswer = () => {
      spiritSalutation.addEventListener("click", (e) => {
        if (e.target.textContent !== "Good-Bye") {
          if (gameAnswered.textContent === theRiddles[answering].answers) {
            gameAnswered.innerHTML = "";
            riddling();
            answering++;
          } else {
            gameAnswered.innerText = "Wrong Answer!";
          }
        } else {
          gameAnswered.innerHTML = "";
        }
      });
    };