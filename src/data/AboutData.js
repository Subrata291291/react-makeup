// src/data/aboutData.js
import signature from '../assets/images/signature.png';
import about from '../assets/images/about.png';
import award from '../assets/images/award.jpg';
import english from '../assets/images/english.jpg';
import gold from '../assets/images/gold.jpg';
import makeup from '../assets/images/makeup.jpg';

const AboutData = {
  title: "about me",
  name: "NANDITA HALDER",
  description: [
    "Hi, I'm Nandita a Professional Makeup Artist. My journey into the world of makeup began with a passion for transforming not just how I look, but how I feel about myself. With an exceptional eye for detail and a deep understanding of color, texture, and form, I have turned makeup into an art form that goes beyond aesthetics. My work is known for its precision, creativity, and ability to bring out the natural beauty in each individual I work with.",
    "", // ← Line break here
    "Whether I’m crafting flawless b  ridal looks, enhancing the features of a model on a fashion shoot, or curating a stunning transformation for a special event, I approach each project with an innate understanding of my client’s needs. My work highlights my unique ability to tailor every look to reflect the personality and style of the person in front of me, while still pushing the boundaries of what makeup can achieve."
  ],
  signatureImage: signature,
  aboutImage: about,
  awards: [
    award,
    english,
    gold,
    makeup
  ]
};

export default AboutData;
