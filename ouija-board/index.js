function modifyContent() {
  const mainOuijaPage = document.getElementById('main-ouija-page');



                                                          // Ouija number and letters array: //

  const yesNo = [
    'Yes', 'No',
  ];

  const AToM = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  ];

  const NToZ = [
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  const boardNum = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '_',
  ];

  const helloGoodbye = [
    'Hello', 'Good-Bye',
  ];



                                                                // The Gaming Section: //


  // The True or False:

  const trueOrFalse = [
    {
      statement: "The first Jack-o'-Lanterns were carved out of turnips.",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE. The tradition originated in Ireland, where people carved turnips and potatoes to ward off evil spirits before discovering pumpkins when they moved to America.",
    },
    {
      statement: "Trick-or-treating originated as a medieval practice called \"souling,\" where the poor would beg for food and receive pastries called \"soul cakes\"",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE.",
    },
    {
      statement: "The word \"Halloween\" is a completely pagan term.",
      choice: ["TRUE", "FALSE"],
      answers: " FALSE. \"Halloween\" actually derives from the Catholic church, stemming from \"All Hallows' Eve\" (the evening before All Saints' Day).",
    },
    {
      statement: "The popular candy Snickers was named after a beloved family dog.",
      choice: ["TRUE", "FALSE"],
      answers:  "FALSE. The creators of the Snickers bar named it after their favorite horse.",
    },
    {
      statement: "Candy corn was originally created under the name \"chicken feed\".",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE",
    },
    {
      statement: "It is a common occurrence for kids to find razor blades and pins in their Halloween candy.",
      choice: ["TRUE", "FALSE"],
      answers: " FALSE. This is largely an urban legend; verified, intentional cases of poisoned or booby-trapped Halloween treats are exceedingly rare.",
    },
    {
      statement: "The mask Michael Myers wears in the horror classic Halloween is a modified William Shatner Star Trek mask.",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE. The production crew bought a Captain Kirk mask for $2, painted it white, and teased out the hair.",
    },
    {
      statement: "Mary Shelley wrote the book Dracula.",
      choice: ["TRUE", "FALSE"],
      answers: " FALSE. Mary Shelley wrote Frankenstein; Dracula was written by Bram Stoker.",
    },
    {
      statement: "A group of witches is traditionally called a coven.",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE",
    },
    {
      statement: "Pumpkins are technically fruits.",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE. Because they contain seeds, they belong to the botanical family of fruits (specifically berries).",
    },
    {
      statement: "Black cats are harder to adopt from shelters leading up to Halloween.",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE. Many shelters suspend adopting out black cats entirely in October to protect them from potential pranks or abuse.",
    },
    {
      statement: "Bats are common Halloween symbols because they were thought to communicate with spirits.",
      choice: ["TRUE", "FALSE"],
      answers: "TRUE.",
    },
    {
      statement: "The phrase \"double, double toil and trouble\" comes from a Halloween folktale.",
      choice: ["TRUE", "FALSE"],
      answers: "FALSE. It\’s from Shakespeare\’s Macbeth.",
    },
  ];


  // The Trivia:

  const triviaQuestions = [
    {
      triviaQuestion: 'How many times was Tony Todd stung by bees while making Candyman?',
      multipleChoice: {
        a: 25,
        b: 27,
        c: 17,
      },
      answers: 'B',
    },
    {
      triviaQuestion: 'What was the biggest clue in Scream, telling you which killer was who?',
      multipleChoice: {
        a: 'The Phone Calls',
        b: 'The mask',
        c: 'The way they held their knives',
      },
      answers: 'C',
    },
    {
      triviaQuestion: 'What fueled Robert Englund\'s performance the most in the first "A Nightmare on Elm Street" movie?',
      multipleChoice: {
        a: 'How much he hated being in the make up chair for long periods of time.',
        b: 'He wasn\'t allowed to interact much the cast and felt isolated.',
        c: 'He was jealous of how much less screen time he had compared to his co stars.',
      },
      answers: 'A',
    },
    {
      triviaQuestion: 'In The Shining, Jack Nicholson had a particular form of training, that caused the set crew to keep making thicker doors for the "Here\'s Johnny" scene.',
      multipleChoice: {
        a: 'He had been training to for a triathalon.',
        b: 'He was a volunteer Marshall.',
        c: 'He had been strength training.',
      },
      answers: 'B',
    },
    {
      triviaQuestion: 'In the first Resident Evil movie, the SFX artist had a weird issues with the dogs. What was it?',
      multipleChoice: {
        a: 'They kept being too excited to see everyone.',
        b: 'They kept licking the meat and fake blood off of themselves.',
        c: 'They kept being too aggresive with the team.',
      },
      answers: 'B',
    },
    {
      triviaQuestion: 'Which movie did the term "Groovy!" come from?',
      multipleChoice: {
        a: 'Army of Darkness',
        b: 'They Live',
        c: 'Evil Dead 2',
      },
      answers: 'C',
    },
  ];


  // The Riddles:

  const theRiddles = [
    {
      riddle: 'I wear a dusty, faded victorian dress. My house is a chaotic, broken mess. I watch from the window but never go out, I am the reason the servants shout! What am I?',
      answers: 'GHOST',
    },
    {
      riddle: 'I do not have eyes, but once I did see. Once I had thoughts, but now I am white and empty. What am I?',
      answers: 'SKULL',
    },
    {
      riddle: 'I\’m the final framework for a fleeting art, with a permanent grin but no beating heart. What am I?',
      answers: 'SKELETON',
    },
    {
      riddle: 'I am the shell the specter shed, and the feast on which the ghouls are fed. What am I?',
      answers: 'BODY',
    },
    {
      riddle: 'I am right behind you and creep on the ground. I follow you everywhere, yet I cannot make a single sound. If you turn on the light, I will abandon you immediately. What am I?',
      answers: 'SHADOW',
    },
    {
      riddle: 'My future is scraped from my insides to clear the way, For a brief, bright soul to hold darkness at bay. What am I?',
      answers: 'PUMPKIN',
    },
    {
      riddle: 'I\’m a ghost of a whisper, a phantom you keep, Speak of me once and I\’m buried six feet deep. What am I?',
      answers: 'SECRET',
    },
    {
      riddle: 'I wear a face but have no soul to fright, And swallow strangers whole on horror\’s night. What am I?',
      answers: 'HOUSE',
    },
    {
      riddle: 'I am a door through which all footsteps fall, A final silence that will answer every call. What am I?',
      answers: 'DEATH',
    },
  ];



   

                                                // Main Ouija game build. HTML section: //

    mainOuijaPage.innerHTML = `
      <header id="rules" class="rules">
        <div class="ouija-timer" style="font-size: 35px;"></div>
          <h1 class="ouija-title">We Speak:</h1>
            <ul class="ouija-rule-main">
              <li class="ouija-rules">Rule 1: Beat the clock.</li>
              <li class="ouija-rules">Rule 2: Solve all questions quickly.</li>
              <li class="ouija-rules">Rule 3: Each correct answer gives bonus time.</li>
              <li class="ouija-rules">Rule 4: Each hint takes time away.</li>
              <li class="ouija-rules">Rule 4: Whatever time is left after a finished level will be added to your overall time.</li>
              <li class="ouija-rules">Rule 6: Answer each question using the Planchette.</li>
              <li class="ouija-rules">Rule 7: Hello to submit your answer, Good-Bye to clear your answer.</li>
            </ul>
        <div class="ouija-game-build">
        <section class="gaming-question" id="true-false" hidden>
            <div class="truefalse"></div>
          </section>
          <section class="gaming-question" id="multi-choice" hidden>
            <div class="trivia"></div>
          </section>
          <section class="gaming-question" id="riddle-question" hidden>
            <div class="riddled"></div>
          </section>
        </div>
          </header>
          <button id="start-bttn" type="button">Start</button>
          <button id="next-bttn" type="button" hidden>Next</button>
      <div id="ouija-build">
      <div id="planchette-glass"></div>
        <div class="ouija-board-build">
          <div class="board-image">
            <main>
              <div class="ouija-function" id="ouija-yes-no" type="button" style="display: flex; font-size: 70px; gap:300px; justify-content: center; align-items: center; margin-top: 20px; margin-right: 35px; margin-bottom: 15px;"></div>
              <br>
              <div class="ouija-function" id="ouija-a-m" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="ouija-function" id="ouija-n-z" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="ouija-function" id="ouija-1-0" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="ouija-function" id="ouija-sal" type="button" style="display: flex; gap:250px; font-size: 60px; justify-content: center; align-items: center; margin-left: 85px;"></div>
              <br>
              <div class="gaming-answer"></div>
            </main>
          </div>
        </div>
        <div class="planchette-wrapper" draggable="true">
        </div>
      </div>
    `;
  


  
                                                        // Ouija main game play functionaltiy: //
      // Game Header:

    const ouijaTimer = document.querySelector('.ouija-timer');
    const ouijaRuleMain = document.querySelector('.ouija-rule-main');
    const ouijaRules = document.querySelector('.ouija-rules');

      // Board Build:

    const ouijaBuild = document.querySelector('#ouija-build');
    const ouijaBoardBuild = document.querySelector('.ouija-board-build');
    const ouijaFunction = document.querySelector('.ouija-function');

      // Lettering Placement:
    
    const ouijaChoice = document.querySelector('#ouija-yes-no');
    const ouijaAM = document.querySelector('#ouija-a-m');
    const ouijaNZ = document.querySelector('#ouija-n-z');
    const ouijaNum = document.querySelector('#ouija-1-0');
    const ouijaSalutation = document.querySelector('#ouija-sal');
    
      // Planchette:

    const planchette = document.querySelector('#planchette-glass');

      // Gaming:
    
    const ouijaGamingBuild = document.querySelector('.ouija-game-build');
    const gameQuestion = document.querySelector('.gaming-question');
    const gameAnswered = document.querySelector('.gaming-answer');
    const startBttn = document.getElementById('start-bttn');
    const nextBttn = document.getElementById('next-button');
    const trueFalse = document.getElementById('true-false');
    const multiChoice = document.getElementById('multi-choice');
    const riddleQuestion = document.getElementById('riddle-question');



    
                                                         // Ouija Board game placement: //

    let agreeDiv = "";
    for (const agree of yesNo) {
    ouijaChoice.innerHTML = agreeDiv += `<div class="ouija-board-agree">${agree}</div>`;
    };


    let alpha1Div = "";
    for (const letterAM of AToM) {
    ouijaAM.innerHTML =  alpha1Div += `<div class="ouija-board-alpha1Div">${letterAM}</div>`;
    };
    

    let alpha2Div = "";
    for (const letterNZ of NToZ) {
    ouijaNZ.innerHTML = alpha2Div += `<div class="ouija-board-alpha2Div">${letterNZ}</div>`;
    };
    

    let numbersDiv = "";
    for (const count of boardNum) {
    ouijaNum.innerHTML = numbersDiv += `<div class="ouija-board-numbersDiv">${count}</div>`;
    };


    let saluDiv = "";
    for (const regard of helloGoodbye) {
    ouijaSalutation.innerHTML = saluDiv += `<div class="ouija-board-salutationP">${regard}</div>`
    };


    ouijaChoice.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });

    ouijaAM.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });
    
    ouijaNZ.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });

    ouijaNum.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });




                                                                  // Gaming Engine: //

    let answering = 0;

    // True or False engine:



    // Trivia engine:



    // Riddle engine:

    let nextRiddle = 0;

    const riddling = () => {
      gameQuestion.innerText = theRiddles[nextRiddle].riddle;
      nextRiddle = nextRiddle + 1;
    };

    

    ouijaSalutation.addEventListener('click', (e) => {
      if (e.target.textContent !== 'Good-Bye'){
          if (gameAnswered.textContent === theRiddles[answering].answers) {
              riddling();
              gameAnswered.textContent = '';
              gameAnswered.focus();
              answering = answering + 1;
            } else {
              gameAnswered.innerText = 'Wrong Answer!';
            }
      } else {
        gameAnswered.textContent = '';
        gameAnswered.focus();
      }
    });




                                     // Ouija timer section. Beings game and freezes page once time runs out: //

     startBttn.addEventListener('click', () => {
      gameQuestion.removeAttribute('hidden');
      riddling();

       let seconds_left = 300;

        const interval = setInterval(() =>{
          ouijaTimer.innerHTML = formatTime(seconds_left);
          seconds_left--;
          if (seconds_left < 0) {
            clearInterval(interval);
            const freezePage = (() => {
          if (mainOuijaPage) {
            document.body.style.pointerEvents = 'none';
            ouijaTimer.innerHTML = "<h1>Time Expired</h1>";
          }
        })
        const freezeDelay = interval;
        setTimeout(freezePage, freezeDelay);
          }
        }, 1000);

        function formatTime(totalSeconds) {
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
          const formattedSeconds = seconds < 60 ?  seconds : minutes;
          return formattedMinutes + ":" + formattedSeconds;
        };
     });


      
                                                                  // Planchette mouser: //

      const pointerImg = document.querySelector('.planchette-cursor');

        window.addEventListener('mousemove', e => {
            // Adjust -25 to center the image based on its size
            pointerImg.style.left = e.pageX - 40 + 'px';
            pointerImg.style.top = e.pageY - 70 + 'px';
        });



                                                                  // Responsive styling: //
      
      const style = document.createElement("style");
      style.innerHTML = `
        
        @media screen and (width <= 750px) {
            .ouija-board-build { max-width: 100%; height: auto; }
        }

        @media (width >= 600px) {
            body { font-size: 14px }
            .board-image { max-width: 100%; height: auto; }
        }

      `;
      document.head.appendChild(style);




}
window.addEventListener('DOMContentLoaded', modifyContent);
