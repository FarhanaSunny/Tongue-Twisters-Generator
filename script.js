const tongueTwister = [
  {
    language: "en",
    difficulty: "easy",
    text: "I scream, you scream, we all scream for ice cream",
    audio: "tongue-twister audio/english/I scream ....mp3",
  },
  { language: "en", difficulty: "easy", text: "Red lory, yellow lory", audio: "tongue-twister audio/english/red lorry...mp3" , }, 
  {
    language: "en",
    difficulty: "medium",
    text: "Betty Botter bought some butter",
    audio: "tongue-twister audio/english/betty botter...mp3",
  },
  {
    language: "en",
    difficulty: "medium",
    text: "A proper cup of coffee from a proper copper coffee pot",
    audio: "tongue-twister audio/english/proper copper....mp3",
  },
  {
    language: "en",
    difficulty: "hard",
    text: "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?",
    audio: "tongue-twister audio/english/wood chuck...mp3",
  },
  {
    language: "en",
    difficulty: "hard",
    text: "Peter piper picked a peck of pickled peppers",
    audio: "tongue-twister audio/english/peter piper...mp3",
  },
  {
    language: "es",
    difficulty: "easy",
    text: "Camarón, caramelo, Caramelo, camarón",
    audio: "tongue-twister audio/spanish/camaron..mp3",
  },
  {
    language: "es",
    difficulty: "easy",
    text: "Un perro rompe la rama del árbol",
    audio: "tongue-twister audio/spanish/un perro.mp3",
  },
  {
    language: "es",
    difficulty: "medium",
    text: "Juan junta juncos junto a la zanja",
    audio: "tongue-twister audio/spanish/juan junto...mp3",
  },
  {
    language: "es",
    difficulty: "medium",
    text: "Papá pone pan para Pepín. Para Pepín pone pan papá",
    audio: "tongue-twister audio/spanish/papa...mp3",
  },
  {
    language: "es",
    difficulty: "hard",
    text: "Hoy ya es ayer y ayer ya es hoy, ya llegó el día, y hoy es hoy",
    audio: "tongue-twister audio/spanish/oh ya...mp3",
  },
  {
    language: "es",
    difficulty: "hard",
    text: "El perrito de Rita me irrita, dile a Rita que cambie el perrito por una perrita",
    audio: "tongue-twister audio/spanish/el perrito.mp3",
  },
  { language: "bn", difficulty: "easy", text: "Pakhi Paka Pepe Khay", audio: "tongue-twister audio/bangla/pakhi paka...mp3", },
  { language: "bn", difficulty: "easy", text: "Bagla Ghache Bagh Jhulche", audio: "tongue-twister audio/bangla/baghla gache...mp3", },
  { language: "bn", difficulty: "medium", text: "kacha gab paka gab", audio: "tongue-twister audio/bangla/kacha gab.mp3", },
  { language: "bn", difficulty: "medium", text: "Lal Ril Nil Ril", audio: "tongue-twister audio/bangla/lal ril, nill..mp3", },
  {
    language: "bn",
    difficulty: "hard",
    text: "Jole chun taja, tele chul taja",
    audio: "tongue-twister audio/bangla/jole chun taja.mp3",
  },
  {
    language: "bn",
    difficulty: "hard",
    text: "Matir upor mati, matir niche mati, matir upor matir niche mati",
    audio: "tongue-twister audio/bangla/matir upo...mp3",
  },
  { language: "fr", difficulty: "easy", text: "Son chat chante sa chanson", audio: "tongue-twister audio/french/son chat...mp3", },
  {
    language: "fr",
    difficulty: "easy",
    text: "Cinq chiens chassent six chats",
    audio: "tongue-twister audio/french/cine chissen.mp3",
  },
  {
    language: "fr",
    difficulty: "medium",
    text: "Le ver vert va vers le verre vert",
    audio: "tongue-twister audio/french/le vert...mp3",
  },
  {
    language: "fr",
    difficulty: "medium",
    text: "Ce ver vert sévère, sait verser ses verres verts",
    audio: "tongue-twister audio/french/ce vert.mp3",
  },
  {
    language: "fr",
    difficulty: "hard",
    text: "Je suis ce que je suis, et si je suis ce que je suis, qu'est-ce que je suis?",
    audio: "tongue-twister audio/french/ce que.mp3",
  },
  {
    language: "fr",
    difficulty: "hard",
    text: "La cavale aux Valaques avala l'eau du lac et l'eau du lac lava la cavale au Valaques",
    audio: "tongue-twister audio/french/la cavale.mp3",
  },
];

// document.body.onload = getTwisterElement;

// function getTwisterElement(twisterText) {
//   const newDiv = document.createElement('div');
//   const newContent = document.createTextNode(twisterText);
//   newDiv.appendChild(newContent);
//   return newDiv;
// }

// const divs = tongueTwister.map((obj) => {
//     return getTwisterElement(obj.text)
// });
// const currentDiv= document.getElementById("twister-list");

// divs.forEach((single) => currentDiv.appendChild(single));

document.body.onload = getTwisterElement;

function getTwisterElement() {
  const currentDiv = document.getElementById("twister-list");

  tongueTwister.forEach((obj) => {
    const newDiv = document.createElement('div');

    const textElement = document.createElement('p');
    textElement.textContent = obj.text;
    newDiv.appendChild(textElement);

    const languageElement = document.createElement('p');
    languageElement.textContent= obj.language;
    languageElement.classList.add("languageStyle")
    newDiv.appendChild(languageElement);
    
    const difficultyElement = document.createElement('p');
    difficultyElement.textContent= obj.difficulty;
    difficultyElement.classList.add("difficultyStyle")
    newDiv.appendChild(difficultyElement);
    
    const buttonElement= document.createElement('button');
    buttonElement.classList.add("audioStyle");
    buttonElement.classList.add("svg-container");
    buttonElement.addEventListener("click", () => playMusic(obj.audio));

    newDiv.appendChild(buttonElement);

    // const audioObj = new Audio(obj.audio);
    // buttonElement.addEventListener("click", playMusic);

    // const newContent = document.createTextNode(obj.text);
    // newDiv.appendChild(newContent);
    currentDiv.appendChild(newDiv);
  });
}

function playMusic(audioPath) {
  const audio = new Audio(audioPath);
  audio.play();
}
// let playButton = document.getElementById("audioElement");
// let playButton = document.getElementById("play-button");
// function playMusic() {
//     let audio = new Audio("practice-audio.mp3");
//         audio.play()
// }
// playButton.addEventListener("click", playMusic);
// let audio = new Audio("practice-audio.mp3");
// function playMusic() {
//     audio.play();
// }
// let playButton = document.getElementById("play-button");
// playButton.addEventListener("click", playMusic);
