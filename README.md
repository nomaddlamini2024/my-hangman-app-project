# **Hangman Game - React App**

Welcome to the **Hangman Game**, a fun word-guessing game built 
using **React**! Players attempt to guess a randomly chosen word 
by selecting letters one by one. Too many incorrect guesses result 
in losing the game (and the hangman being completed).

---

## **Table of Contents**
1. [Game Rules](#game-rules)
2. [Installation Instructions](#installation-instructions)
3. [How to Run the App](#how-to-run-the-app)
4. [Technologies Used](#technologies-used)
5. [Game Features](#game-features)
6. [Contributing](#contributing)

---

## **Game Rules**
1. A random word is selected by the app when the game begins.
2. Players guess the word letter-by-letter by clicking the on-screen 
   keyboard.
3. If a guessed letter is correct, it will be revealed in the word.
4. If a guessed letter is incorrect, one step of the hangman drawing 
   will appear.
5. The player has **10 attempts** to guess the word correctly before 
   losing.
6. The game ends when:
    - The player guesses all the letters correctly (they **win**).
    - The player runs out of attempts (they **lose**).
7. The player can click the **Restart Game** button anytime to reset 
   the game.

---

## **Installation Instructions**
To install and run the Hangman Game locally, follow these steps:

1. **Clone the Repository:**  
   Open your terminal and run:
   ```bash
   git clone https://github.com/yourusername/hangman-game.git
   cd hangman-game
   ```

2. **Install Dependencies:**  
   Make sure you have **Node.js** installed. Then run:
   ```bash
   npm install
   ```

---

## **How to Run the App**
Once the dependencies are installed, you can run the app using:
```bash
npm start
```

This will start the development server and open the app in your 
browser at `http://localhost:3000`.

---

## **Technologies Used**
- **React** (for building the UI)
- **React-Bootstrap** (for styling and layout)
- **CSS** (for custom styling)
- **Node.js** and **npm** (for dependency management)

---

## **Game Features**
- **Dynamic Hangman Figure:** Progressively displayed as incorrect 
    guesses are made.
- **On-Screen Keyboard:** Clickable buttons to guess letters.
- **Win/Loss Detection:** Automatically detects if the player wins 
  or loses.
- **Restart Button:** Reset the game at any time.
- **Help Modal:** Displays game rules in a pop-up modal.
- **User-Friendly UI:** Clean and responsive interface.

---

## **Contributing**
If you’d like to contribute:
1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added feature X"`.
4. Push the branch: `git push origin feature-name`.
5. Open a pull request.

Feel free to suggest improvements, report bugs, or add new features!

---

## **Contact**
If you have any questions, feel free to reach out to me at 
[thandekiledlamini1@outlook.com].