const tongueTwister = [
  {
    language: "en",
    difficulty: "easy",
    text: "I scream, you scream, we all scream for ice cream",
  },
  { language: "en", difficulty: "easy", text: "Red lory, yellow lory" },
  {
    language: "en",
    difficulty: "medium",
    text: "Betty Botter bought some butter",
  },
  {
    language: "en",
    difficulty: "medium",
    text: "A proper cup of coffe from a proper copper coffe pot",
  },
  {
    language: "en",
    difficulty: "hard",
    text: "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?",
  },
  {
    language: "en",
    difficulty: "hard",
    text: "Peter piper picked a peck of pickled peppers",
  },
  {
    language: "es",
    difficulty: "easy",
    text: "Camarón, caramelo, Caramelo, camarón",
  },
  {
    language: "es",
    difficulty: "easy",
    text: "Un perro rompe la rama del árbol",
  },
  {
    language: "es",
    difficulty: "medium",
    text: "Juan junta juncos junto a la zanja",
  },
  {
    language: "es",
    difficulty: "medium",
    text: "Papá pone pan para Pepín. Para Pepín pone pan papá",
  },
  {
    language: "es",
    difficulty: "hard",
    text: "Hoy ya es ayer y ayer ya es hoy, ya llegó el día, y hoy es hoy",
  },
  {
    language: "es",
    difficulty: "hard",
    text: "El perrito de Rita me irrita, dile a Rita que cambie el perrito por una perrita",
  },
  { language: "bn", difficulty: "easy", text: "Pakhi Paka Pepe Khay" },
  { language: "bn", difficulty: "easy", text: "Bagla Ghache Bagh Jhulche" },
  { language: "bn", difficulty: "medium", text: "kacha gab paka gab" },
  { language: "bn", difficulty: "medium", text: "Lal Ril Nil Ril" },
  {
    language: "bn",
    difficulty: "hard",
    text: "Jole chun taja, tele chul taja",
  },
  {
    language: "bn",
    difficulty: "hard",
    text: "Matir upor mati, matir niche mati, matir upor matir niche mati",
  },
  { language: "fr", difficulty: "easy", text: "Son chat chante sa chanson" },
  {
    language: "fr",
    difficulty: "easy",
    text: "Cinq chiens chassent six chats",
  },
  {
    language: "fr",
    difficulty: "medium",
    text: "Le ver vert va vers le verre vert",
  },
  {
    language: "fr",
    difficulty: "medium",
    text: "Ce ver vert sévère, sait verser ses verres verts",
  },
  {
    language: "fr",
    difficulty: "hard",
    text: "Je suis ce que je suis, et si je suis ce que je suis, qu'est-ce que je suis?",
  },
  {
    language: "fr",
    difficulty: "hard",
    text: "La cavale aux Valaques avala l'eau du lac et l'eau du lac lava la cavale au Valaques",
  },
];

document.body.onload = getTwisterElement;

function getTwisterElement(twisterText) {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode(twisterText);
  newDiv.appendChild(newContent);
  return newDiv;
}

const divs = tongueTwister.map((obj) => {
    return getTwisterElement(obj.text)
});
const currentDiv= document.getElementById("twister-list");

divs.forEach((single) => currentDiv.appendChild(single));
// let playButton = document.getElementById("play-button");
// function playMusic() {
//     let audio = new Audio("practice-audio.mp3");
//         audio.play()
// }
// playButton.addEventListener("click", playMusic);
let audio = new Audio("practice-audio.mp3");
function playMusic() {
    audio.play();
}
let playButton = document.getElementById("play-button");
playButton.addEventListener("click", playMusic);