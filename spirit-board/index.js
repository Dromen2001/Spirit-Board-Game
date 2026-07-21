import { yesNo, AToM, NToZ, boardNum, helloGoodbye} from "./data/boardData.js";
import { trueOrFalse, triviaQuestions, theRiddles} from "./data/gameData.js";
import { spiritGamingBuild, gameQuestion, gameAnswered, startBttn, nextBttn, nextBttn2, trueFalse, multiChoice, multiOptions, riddleQuestion } from "./gaming.js";
import { spiritChoice, spiritAM, spiritNZ, spiritNum, spiritSalutation } from "./placement.js";
import { trueFalsing } from "./game engine/truefalse.js";
import { trueFalseAnswering } from "./game engine/tfanswer.js";
import { triviaing } from "./game engine/trivia.js";
import { triviaAnswer } from "./game engine/triviaanswer.js";
import { riddling } from "./game engine/riddles.js";
import { riddleAnswer } from "./game engine/riddleanswer.js";



  // Spirit main game play functionaltiy: //
  // Game Header:
  const mainSpiritPage = document.querySelector(".main-spirit-page")
  const spiritTimer = document.querySelector(".spirit-timer");
  const spiritRuleMain = document.querySelector(".spirit-rule-main");
  const spiritRules = document.querySelector(".spirit-rules");

  // Board Build:

  const spiritBuild = document.querySelector("#spirit-build");
  const spiritBoardBuild = document.querySelector(".spirit-board-build");
  const gameTyping = document.querySelector(".game-typing");
  const spiritFunction = document.querySelector(".spirit-function");

  // Planchette:

  const planchette = document.querySelector("#planchette-glass");

  // Gaming:

  nextBttn.style.display = "none";
  nextBttn2.style.display = "none";

  

  // Answer Clearing

  spiritSalutation.addEventListener("click", (e) => {
    if (e.target.textContent === "Good-Bye") {
      gameAnswered.innerHTML = "";
    }
  });

  // Spirit timer section. Begins game and freezes page once time runs out: //

  let seconds_left = 300;

  startBttn.addEventListener("click", () => {
    gameQuestion.removeAttribute("hidden");
    startBttn.style.display = "none";
    spiritRuleMain.style.display = "none";
    gameTyping.addEventListener("click", (e) => {
      gameAnswered.innerText += e.target.textContent;
    });

    // Begin game:

    trueFalsing(trueFalseAnswering());
    // triviaing(triviaAnswer());
    // riddling(riddleAnswer());

    // Timer Build:

    const interval = setInterval(() => {
      spiritTimer.innerHTML = formatTime(seconds_left);
      seconds_left--;
      if (seconds_left < 0) {
        clearInterval(interval);
        // Freeze game:

        const freezePage = () => {
          if (mainSpiritPage) {
            document.body.style.pointerEvents = "none";
            spiritTimer.innerHTML = "<h1>Time Expired</h1>";
          }
        };
        const freezeDelay = interval;
        setTimeout(freezePage, freezeDelay);
      }
    }, 1000);

    function formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const formattedMinutes = minutes < 10 ?  + minutes : minutes;
      const formattedSeconds = seconds < 10 ? seconds : seconds;
      return formattedMinutes + ":" + formattedSeconds;
    }

    // Planchette mouser: //

    const pointerImg = document.querySelector(".planchette-cursor");

    window.addEventListener("mousemove", (e) => {
      // Adjust -25 to center the image based on its size
      pointerImg.style.left = e.pageX - 55 + "px";
      pointerImg.style.top = e.pageY - 90 + "px";
    });
  });

  // Responsive styling: //

  const style = document.createElement("style");
  style.innerHTML = `
        
        @media screen and (width <= 750px) {
            .spirit-board-build { max-width: 100%; height: auto; }
        }

        @media (width >= 600px) {
            body { font-size: 14px }
            .board-image { max-width: 100%; height: auto; }
        }

      `;
  document.head.appendChild(style);
