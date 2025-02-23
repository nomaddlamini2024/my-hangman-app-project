/*Importing React in order for code make use of functions and objects in 
React library so we can create and manage components and their state 
 */

import React from "react";
import img0 from "./assets/0.jpg";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";

const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const HangmanFigure = ({ attemptsLeft }) => {
  const currentImage = images[10 - attemptsLeft];

  return (
    <div className="hangman-figure">
      <img
        src={currentImage}
        alt={`Hangman step ${10 - attemptsLeft}`}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default HangmanFigure;
