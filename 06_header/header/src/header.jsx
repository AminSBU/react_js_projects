import React, {useState} from "react";
import './header.css'

function Header()
{
    // Array of words for generating random text
const words = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis'
];

// Function to generate a random paragraph
const generateRandomParagraph = (wordCount = 330) => {
  let paragraph = [];
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    paragraph.push(words[randomIndex]);
  }
  return paragraph.join(' ');
};

    const paragraph = generateRandomParagraph();

    return(
    <>
        <div class="parent">
            <div className="img-header"><img src="src/img/header.jpg" className="img-header"></img></div>
            <div class="div1"><button className="header-btn">home</button></div>
            <div class="div2"><button className="header-btn">Contact us</button></div>
            <div class="div3"><button className="header-btn">About us</button></div>
            <div class="div4"><button className="header-btn">Login</button></div>
        </div>

        <p>{paragraph}</p>
        <p>{paragraph}</p>
        <p>{paragraph}</p>
        <p>{paragraph}</p>
        <p>{paragraph}</p>
    </>
    );
}
export default Header;