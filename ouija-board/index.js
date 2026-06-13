function modifyContent() {
  const mainSpiritPage = document.getElementById('main-spirit-page');



                                                          // Spirit number and letters array: //

  const yesNo = [
    'YES', 'NO',
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
      answers: {
                YES: true,
                answer: "TRUE. The tradition originated in Ireland, where people carved turnips and potatoes to ward off evil spirits before discovering pumpkins when they moved to America.",
               },
    },
    {
      statement: "Trick-or-treating originated as a medieval practice called \"souling,\" where the poor would beg for food and receive pastries called \"soul cakes\"",
      answers: {
                YES: true,
                answer: "TRUE.",
               },
    },
    {
      statement: "The word \"Halloween\" is a completely pagan term.",
      answers: {
                NO: true,
                answer: "FALSE. \"Halloween\" actually derives from the Catholic church, stemming from \"All Hallows' Eve\" (the evening before All Saints' Day).",
               },
    },
    {
      statement: "The popular candy Snickers was named after a beloved family dog.",
      answers:  {
                 NO: true,
                 answer: "FALSE. The creators of the Snickers bar named it after their favorite horse.",
                },
    },
    {
      statement: "Candy corn was originally created under the name \"chicken feed\".",
      answers: {
                YES: true,
                answer: "TRUE",
               },
    },
    {
      statement: "It is a common occurrence for kids to find razor blades and pins in their Halloween candy.",
      answers: {
                NO: true,
                answer: "FALSE. This is largely an urban legend; verified, intentional cases of poisoned or booby-trapped Halloween treats are exceedingly rare.",
               },
    },
    {
      statement: "The mask Michael Myers wears in the horror classic Halloween is a modified William Shatner Star Trek mask.",
      answers: {
                YES: true,
                answer: "TRUE. The production crew bought a Captain Kirk mask for $2, painted it white, and teased out the hair.",
               },
    },
    {
      statement: "Mary Shelley wrote the book Dracula.",
      answers: {
                NO: true,
                answer: "FALSE. Mary Shelley wrote Frankenstein; Dracula was written by Bram Stoker.",
               },
    },
    {
      statement: "A group of witches is traditionally called a coven.",
      answers: {
                YES: true,
                answer: "TRUE",
               },
    },
    {
      statement: "Pumpkins are technically fruits.",
      answers: {
                YES: true,
                answer: "TRUE. Because they contain seeds, they belong to the botanical family of fruits (specifically berries).",
               },
    },
    {
      statement: "Black cats are harder to adopt from shelters leading up to Halloween.",
      answers: {
                YES: true,
                answer: "TRUE. Many shelters suspend adopting out black cats entirely in October to protect them from potential pranks or abuse.",
               },
    },
    {
      statement: "Bats are common Halloween symbols because they were thought to communicate with spirits.",
      // choice: {correct: "YES", incorrect: "NO"},
      answers: {
                YES: true,
                answer: "TRUE.",
               },
    },
    {
      statement: "The phrase \"double, double toil and trouble\" comes from a Halloween folktale.",
      answers: {
                NO: true,
                answer: "FALSE. It\’s from Shakespeare\’s Macbeth.",
               },
    },
  ];


  // The Trivia:

  const triviaQuestions = [
    {
      triviaQuestion: 'How many times was Tony Todd stung by bees while making Candyman?',
      multipleChoice:[
        {id:'A', questionnaire:'25'},
        {id:'B', questionnaire:'27'},
        {id:'C', questionnaire:'17'},
      ],
      answers: {
        B: true,
      },
    },
    {
      triviaQuestion: 'What was the biggest clue in Scream, telling you which killer was who?',
      multipleChoice: [
        {id:'A', questionnaire: 'The Phone Calls'},
        {id:'B', questionnaire: 'The mask'},
        {id:'C', questionnaire: 'The way they held their knives'},
      ],
      answers: {
        C: true,
      },
    },
    {
      triviaQuestion: 'What fueled Robert Englund\'s performance the most in the first "A Nightmare on Elm Street" movie?',
      multipleChoice: [
        {id:'A', questionnaire: 'How much he hated being in the make up chair for long periods of time.'},
        {id:'B', questionnaire: 'He wasn\'t allowed to interact much the cast and felt isolated.'},
        {id:'C', questionnaire: 'He was jealous of how much less screen time he had compared to his co stars.'},
      ],
      answers: {
        A: true,
      },
    },
    {
      triviaQuestion: 'In The Shining, Jack Nicholson had a particular form of training, that caused the set crew to keep making thicker doors for the "Here\'s Johnny" scene.',
      multipleChoice: [
        {id:'A', questionnaire: 'He had been training to for a triathalon.'},
        {id:'B', questionnaire: 'He was a volunteer Marshall.'},
        {id:'C', questionnaire: 'He had been strength training.'},
      ],
      answers: {
        B: true,
      },
    },
    {
      triviaQuestion: 'In the first Resident Evil movie, the SFX artist had some weird issues with the dogs. What was it?',
      multipleChoice: [
        {id:'A', questionnaire: 'They kept being too excited to see everyone.'},
        {id:'B', questionnaire: 'They kept licking the meat and fake blood off of themselves.'},
        {id:'C', questionnaire: 'They kept being too aggresive with the team.'},
      ],
      answers: {
        B: true,
      },
    },
    {
      triviaQuestion: 'Which movie did the term "Groovy!" come from?',
      multipleChoice: [
        {id:'A', questionnaire: 'Army of Darkness'},
        {id:'B', questionnaire: 'They Live'},
        {id:'C', questionnaire: 'Evil Dead 2'},
      ],
      answers: {
        C: true,
      },
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



   

                                                // Main Spirit game build. HTML section: //
    mainSpiritPage.innerHTML = `
      <header id="rules" class="rules">
        <div class="spirit-timer" style="font-size: 35px;"></div>
          <h1 class="spirit-title">Are You There?</h1>
            <ul class="spirit-rule-main">
              <li class="spirit-rules">Rule 1: Beat the clock.</li>
              <li class="spirit-rules">Rule 2: Solve all questions quickly.</li>
              <li class="spirit-rules">Rule 3: Each hint takes time away.</li>
              <li class="spirit-rules">Rule 4: Whatever time is left after a finished level will be added to your overall time.</li>
              <li class="spirit-rules">Rule 5: Answer each question using the Planchette.</li>
              <li class="spirit-rules">Rule 6: Hello to submit your answer, Good-Bye to clear your answer.</li>
            </ul>
        <div class="spirit-game-build">
        <section class="gaming-question"  hidden>
          <div class="truefalse" id="true-false" hidden></div>
          <div class="trivia" id="multi-choice" hidden></div>
          <div id="multi-options"></div>
          <div class="riddled" id="riddle-question" hidden></div>
          </section>
        </div>
          </header>
          <button id="start-bttn" type="button">Start</button>
          <button id="next-bttn" type="button">Next</button>
      <div id="spirit-build">
      <div id="planchette-glass"></div>
        <div class="spirit-board-build">
          <div class="board-image">
            <main>
              <div class="spirit-function" id="spirit-yes-no" type="button" style="display: flex; font-size: 70px; gap:300px; justify-content: center; align-items: center; margin-top: 20px; margin-right: 35px; margin-bottom: 15px;"></div>
              <br>
              <div class="spirit-function" id="spirit-a-m" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="spirit-function" id="spirit-n-z" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="spirit-function" id="spirit-1-0" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="spirit-function" id="spirit-sal" type="button" style="display: flex; gap:250px; font-size: 60px; justify-content: center; align-items: center; margin-left: 85px;"></div>
              <br>
              <div class="gaming-answer"></div>
            </main>
          </div>
        </div>
        <div class="planchette-wrapper" draggable="true">
        </div>
      </div>
    `;
  


  
                                                        // Spirit main game play functionaltiy: //
      // Game Header:

    const spiritTimer = document.querySelector('.spirit-timer');
    const spiritRuleMain = document.querySelector('.spirit-rule-main');
    const spiritRules = document.querySelector('.spirit-rules');

      // Board Build:

    const spiritBuild = document.querySelector('#spirit-build');
    const spiritBoardBuild = document.querySelector('.spirit-board-build');
    const spiritFunction = document.querySelector('.spirit-function');

      // Lettering Placement:
    
    const spiritChoice = document.querySelector('#spirit-yes-no');
    const spiritAM = document.querySelector('#spirit-a-m');
    const spiritNZ = document.querySelector('#spirit-n-z');
    const spiritNum = document.querySelector('#spirit-1-0');
    const spiritSalutation = document.querySelector('#spirit-sal');
    
      // Planchette:

    const planchette = document.querySelector('#planchette-glass');

      // Gaming:
    
    const spiritGamingBuild = document.querySelector('.spirit-game-build');
    const gameQuestion = document.querySelector('.gaming-question');
    const gameAnswered = document.querySelector('.gaming-answer');
    const startBttn = document.getElementById('start-bttn');
    const nextBttn = document.getElementById('next-bttn');
    const trueFalse = document.getElementById('true-false');
    const multiChoice = document.getElementById('multi-choice');
    const multiOptions = document.getElementById('multi-options');
    const riddleQuestion = document.getElementById('riddle-question');


    nextBttn.style.display = 'none';
    
                                                         // Spirit Board game placement: //

    let agreeDiv = "";
    for (const agree of yesNo) {
    spiritChoice.innerHTML = agreeDiv += `<div class="spirit-board-agree">${agree}</div>`;
    };


    let alpha1Div = "";
    for (const letterAM of AToM) {
    spiritAM.innerHTML =  alpha1Div += `<div class="spirit-board-alpha1Div">${letterAM}</div>`;
    };
    

    let alpha2Div = "";
    for (const letterNZ of NToZ) {
    spiritNZ.innerHTML = alpha2Div += `<div class="spirit-board-alpha2Div">${letterNZ}</div>`;
    };
    

    let numbersDiv = "";
    for (const count of boardNum) {
    spiritNum.innerHTML = numbersDiv += `<div class="spirit-board-numbersDiv">${count}</div>`;
    };


    let saluDiv = "";
    for (const regard of helloGoodbye) {
    spiritSalutation.innerHTML = saluDiv += `<div class="spirit-board-salutationP">${regard}</div>`
    };


    spiritChoice.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });

    spiritAM.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });
    
    spiritNZ.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });

    spiritNum.addEventListener('click', (e) => {
      gameAnswered.innerText += e.target.textContent;
    });




                                                          // Gaming Engine: //

let nextQuestion = 0;
let choices = 0;
let answering = 0;
    
    


      // True or False engine:

      const trueFalsing = () => {
          trueFalse.removeAttribute('hidden');
          trueFalse.innerText = trueOrFalse[nextQuestion].statement;
          nextQuestion = nextQuestion + 1;
      };

        
        
      spiritChoice.addEventListener('click', (e) => {
        let isUserTrue = e.target.textContent === 'YES' || e.target.textContent === 'NO';
          if (isUserTrue === trueOrFalse[answering].answers[e.target.textContent]) {
              gameAnswered.innerText = trueOrFalse[answering].answers.answer;
              gameAnswered.focus();
              trueFalsing();
              answering = answering + 1;
            } else {
              gameAnswered.innerText = 'Wrong Answer!';
            }
            
      });

      const trueFalseAnswers = trueOrFalse[answering].answers;


        // Trivia engine:

        const triviaing = () => {
          multiChoice.removeAttribute('hidden');
          multiChoice.innerText = triviaQuestions[nextQuestion].triviaQuestion;
          multiOptions.innerHTML = triviaQuestions[choices].multipleChoice.map(choice =>  `<li>${choice.id}:  ${choice.questionnaire}</li>`).join(""); 
          
          nextQuestion = nextQuestion + 1;
          choices = choices + 1;
        };
        

        spiritAM.addEventListener('click', (e) => {
          let isUserChosen = e.target.textContent === 'A' || e.target.textContent === 'B' || e.target.textContent === 'C';
          console.log(isUserChosen);
            if (isUserChosen === triviaQuestions[answering].answers[e.target.textContent]) {
              gameAnswered.innerText = '';
              gameAnswered.focus();
              triviaing();
              console.log(gameAnswered);
              answering = answering + 1;
            } else {
              gameAnswered.innerText = 'Wrong Answer!';
            }
        });

        // Riddle engine:


        const riddling = () => {
          riddleQuestion.removeAttribute('hidden');
          riddleQuestion.innerText = theRiddles[nextQuestion].riddle;
          nextQuestion = nextQuestion + 1;
        };

        

        spiritSalutation.addEventListener('click', (e) => {
          if (e.target.textContent !== 'Good-Bye'){
              if (gameAnswered.textContent === theRiddles[answering].answers) {
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
        
    
    


                                            // Spirit timer section. Begins game and freezes page once time runs out: //

     startBttn.addEventListener('click', () => {
      gameQuestion.removeAttribute('hidden');
      startBttn.style.display = 'none';
      
      // Begin game;
      trueFalsing();

       let seconds_left = 300;

        const interval = setInterval(() =>{
          spiritTimer.innerHTML = formatTime(seconds_left);
          seconds_left--;
          if (seconds_left < 0) {
            clearInterval(interval);
            // Freeze game:

            const freezePage = (() => {
        if (mainSpiritPage) {
            document.body.style.pointerEvents = 'none';
            spiritTimer.innerHTML = "<h1>Time Expired</h1>";
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
      

      if (trueOrFalse[answering].length === trueFalseAnswers) {
        nextBttn.style.display = 'block';
      };
    
    nextBttn.addEventListener('click', () => {
      gameQuestion.removeAttribute('hidden');
      triviaing();
    });
    
      
                                                                  // Planchette mouser: //

      const pointerImg = document.querySelector('.planchette-cursor');

        window.addEventListener('mousemove', e => {
            // Adjust -25 to center the image based on its size
            pointerImg.style.left = e.pageX - 55 + 'px';
            pointerImg.style.top = e.pageY - 90 + 'px';
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


}
window.addEventListener('DOMContentLoaded', modifyContent);
