// Get to DOM elements
const gameContainer = document.querySelector(".container");
userResult = document.querySelector(".user-result img");
cpuResult = document.querySelector(".cpu-result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option-image");
userScoreElement = document.querySelector(".user-score");
cpuScoreElement = document.querySelector(".cpu-score");
resetButton = document.querySelector(".reset-button");

let userScore = 0;
let cpuScore = 0;

// Loop through each option image element

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "Images/rock.png";
        result.textContent = "Wait...";

        // Loop through each option image again
        optionImages.forEach((image2, index2) =>{
            // If the current index does not match the clicked index, Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
            
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            // Set the user image to the clicked option image
              userResult.src = imageSrc;

            //   Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            console.log(randomNumber);

            // Create an array of CPU image options
            let cpuImages = ["Images/rock.png", "Images/paper.png", "Images/scissors.png"];

            // Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for Rock, P for Paper, S for Scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];

            // Assign a letter value to the clicked option based on index
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible outcomes
              let outcomes = {
                 RR: "Draw",
                 RP: "Cpu",
                 RS: "User",
                 PP: "Draw",
                 PR: "Cpu",
                 PS: "User",
                 SS: "Draw",
                 SR: "Cpu",
                 SP: "User",
              };
            // Look up the outcome value based on user and CPU options
            let outcomeValue = outcomes[userValue + cpuValue];

            // Update scores based on outcome
            if (outcomeValue === "User") {
              userScore++;
              userScoreElement.textContent = userScore;
          } else if (outcomeValue === "Cpu") {
              cpuScore++;
              cpuScoreElement.textContent = cpuScore;
          }
            
            // Display Result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;

        }, 2000);
    });
});


// Reset game logic
resetButton.addEventListener("click", () => {
  userScore = 0;
  cpuScore = 0;
  userScoreElement.textContent = userScore;
  cpuScoreElement.textContent = cpuScore;
  result.textContent = "Let's Play!!";
  userResult.src = cpuResult.src = "Images/rock.png";
  optionImages.forEach((image) => {
      image.classList.remove("active");
  });
});
  

// Design and Implementation:

// I designed the game to be simple and intuitive, with a clean interface.

// JavaScript handles the game logic, including user input, determining the winner, and keeping score.

// Challenges:

// Ensuring the game logic was correctly implemented to handle all possible outcomes.

// Making the interface responsive and visually appealing.

// Overcoming Challenges:

// Thorough testing and debugging to ensure the game functions as expected.

// Iterative design process to refine the user interface.

        