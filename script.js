const tongueTwister = [
  {
    language: "en",
    difficulty: "easy",
    text: "I scream, you scream, we all scream for ice cream",
    audio: "audio/english/I scream ....mp3",
  },
  { language: "en", difficulty: "easy", text: "Red lory, yellow lory", audio: "audio/english/red lorry...mp3" , }, 
  {
    language: "en",
    difficulty: "medium",
    text: "Betty Botter bought some butter",
    audio: "audio/english/betty botter...mp3",
  },
  {
    language: "en",
    difficulty: "medium",
    text: "A proper cup of coffee from a proper copper coffee pot",
    audio: "audio/english/proper copper....mp3",
  },
  {
    language: "en",
    difficulty: "hard",
    text: "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?",
    audio: "audio/english/wood chuck...mp3",
  },
  {
    language: "en",
    difficulty: "hard",
    text: "Peter piper picked a peck of pickled peppers",
    audio: "audio/english/peter piper...mp3",
  },
  {
    language: "es",
    difficulty: "easy",
    text: "Camarón, caramelo, Caramelo, camarón",
    audio: "audio/spanish/camaron..mp3",
  },
  {
    language: "es",
    difficulty: "easy",
    text: "Un perro rompe la rama del árbol",
    audio: "audio/spanish/un perro.mp3",
  },
  {
    language: "es",
    difficulty: "medium",
    text: "Juan junta juncos junto a la zanja",
    audio: "audio/spanish/juan junto...mp3",
  },
  {
    language: "es",
    difficulty: "medium",
    text: "Papá pone pan para Pepín. Para Pepín pone pan papá",
    audio: "audio/spanish/papa...mp3",
  },
  {
    language: "es",
    difficulty: "hard",
    text: "Hoy ya es ayer y ayer ya es hoy, ya llegó el día, y hoy es hoy",
    audio: "audio/spanish/oh ya...mp3",
  },
  {
    language: "es",
    difficulty: "hard",
    text: "El perrito de Rita me irrita, dile a Rita que cambie el perrito por una perrita",
    audio: "audio/spanish/el perrito.mp3",
  },
  { language: "bn", difficulty: "easy", text: "Pakhi Paka Pepe Khay", audio: "audio/bangla/pakhi paka...mp3", },
  { language: "bn", difficulty: "easy", text: "Bagla Ghache Bagh Jhulche", audio: "audio/bangla/baghla gache...mp3", },
  { language: "bn", difficulty: "medium", text: "kacha gab paka gab", audio: "audio/bangla/kacha gab.mp3", },
  { language: "bn", difficulty: "medium", text: "Lal Ril Nil Ril", audio: "audio/bangla/lal ril, nill..mp3", },
  {
    language: "bn",
    difficulty: "hard",
    text: "Jole chun taja, tele chul taja",
    audio: "audio/bangla/jole chun taja.mp3",
  },
  {
    language: "bn",
    difficulty: "hard",
    text: "Matir upor mati, matir niche mati, matir upor matir niche mati",
    audio: "audio/bangla/matir upo...mp3",
  },
  { language: "fr", difficulty: "easy", text: "Son chat chante sa chanson", audio: "audio/french/son chat...mp3", },
  {
    language: "fr",
    difficulty: "easy",
    text: "Cinq chiens chassent six chats",
    audio: "audio/french/cine chissen.mp3",
  },
  {
    language: "fr",
    difficulty: "medium",
    text: "Le ver vert va vers le verre vert",
    audio: "audio/french/le vert...mp3",
  },
  {
    language: "fr",
    difficulty: "medium",
    text: "Ce ver vert sévère, sait verser ses verres verts",
    audio: "audio/french/ce vert.mp3",
  },
  {
    language: "fr",
    difficulty: "hard",
    text: "Je suis ce que je suis, et si je suis ce que je suis, qu'est-ce que je suis?",
    audio: "audio/french/ce que.mp3",
  },
  {
    language: "fr",
    difficulty: "hard",
    text: "La cavale aux Valaques avala l'eau du lac et l'eau du lac lava la cavale au Valaques",
    audio: "audio/french/la cavale.mp3",
  },
];
const selectLanguage = document.getElementById("filterlanguageDropdown");
const selectDifficulty = document.getElementById("filterdifficultyDropdown");
selectLanguage.addEventListener('change', updateTwisterList);
selectDifficulty.addEventListener('change', updateTwisterList);
updateTwisterList();
function updateTwisterList() {
  const selectedLanguage = selectLanguage.value;
  const selectedDifficulty = selectDifficulty.value;
  getTwisterElement(selectedLanguage, selectedDifficulty);
}
function getTwisterElement(language,difficulty) {
  const filteredTwisters = tongueTwister.filter((single) => {
    return (
      (single.language === language || language === "all") &&
      (single.difficulty === difficulty || difficulty === "all")
    );
  });
  const currentDiv = document.getElementById("twister-list");

    currentDiv.innerHTML = "";
    currentDiv.classList.add("twister-container"); 

  filteredTwisters.forEach((obj) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add("twister-box");

    const textElement = document.createElement('p1');
    textElement.textContent = obj.text;
    newDiv.appendChild(textElement);

    const controlsDiv = document.createElement('div');
    controlsDiv.classList.add("controls");
    

    const languageElement = document.createElement('p2');
    languageElement.textContent= obj.language;
    languageElement.classList.add("languageStyle")
    controlsDiv.appendChild(languageElement);
    
    const difficultyElement = document.createElement('p2');
    difficultyElement.textContent= obj.difficulty;
    difficultyElement.classList.add("difficultyStyle")
    controlsDiv.appendChild(difficultyElement);
    
    const buttonElement= document.createElement('button');
    buttonElement.textContent = "Play"
    buttonElement.classList.add("play-button");
    // const imgElement = document.createElement('img');
    // imgElement.src = './play_icon.png';
    // buttonElement.appendChild(imgElement);
    buttonElement.addEventListener("click", () => playMusic(obj.audio));

    controlsDiv.appendChild(buttonElement);
    newDiv.appendChild(controlsDiv);

    currentDiv.appendChild(newDiv);
  });
}

function playMusic(audioPath) {
  const audio = new Audio(audioPath);
  audio.play();
}
