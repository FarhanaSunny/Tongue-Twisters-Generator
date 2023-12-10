const texts = [
    {
        language: "en",
        difficulty: "easy",
        text: [
            "I scream, you scream, we all scream for ice cream",
            "Red lory, yellow lory",
            // Add more easy english tongue twister as needed
        ]
    },
    {
        language: "en",
        difficulty: "medium",
        text: [
           "Betty Botter bought some butter",
           "A proper cup of coffe from a proper copper coffe pot",
            // Add more medium English tongue twister as needed
        ]
    },
    {
        language: "en",
        difficulty: "hard",
        text: [
           "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?",
           "Peter piper picked a peck of pickled peppers",
            // Add more hard English tongue twister as needed
        ]
    },
    {
        language: "es",
        difficulty: "easy",
        text: [
            "Camarón, caramelo, Caramelo, camarón",
            "Un perro rompe la rama del árbol",
            // Add more easy spanish tongue twister as needed
        ]
    },
    {
        language: "es",
        difficulty: "medium",
        text: [
            "Juan junta juncos junto a la zanja",
            "Papá pone pan para Pepín. Para Pepín pone pan papá",
            // Add more medium spanish tongue twister as needed
        ]
    },
    {
        language: "es",
        difficulty: "hard",
        text: [
            "Hoy ya es ayer y ayer ya es hoy, ya llegó el día, y hoy es hoy",
            "El perrito de Rita me irrita, dile a Rita que cambie el perrito por una perrita",
            // Add more hard spanish tongue twister as needed
        ]
    },
    {
        language: "bn",
        difficulty: "easy",
        text: [
            "Pakhi Paka Pepe Khay",
            "Bagla Ghache Bagh Jhulche",
            // Add more easy bangla tongue twister as needed
        ]
    },
    {
        language: "bn",
        difficulty: "medium",
        text: [
            "kacha gab paka gab",
            "Lal Ril Nil Ril",
            // Add more medium bangla tongue twister as needed
        ]
    },
    {
        language: "bn",
        difficulty: "hard",
        text: [
            "Jole chun taja, tele chul taja",
            "Matir upor mati, matir niche mati, matir upor matir niche mati",
            // Add more hard bangla tongue twister as needed
        ]
    },
    {
        language: "fr",
        difficulty: "easy",
        text: [
            "Son chat chante sa chanson",
            "Cinq chiens chassent six chats",
            // Add more easy french tongue twister as needed
        ]
    },
    {
        language: "fr",
        difficulty: "medium",
        text: [
            "Le ver vert va vers le verre vert",
            "Ce ver vert sévère, sait verser ses verres verts",
            // Add more medium french tongue twister as needed
        ]
    },
    {
        language: "fr",
        difficulty: "hard",
        text: [
            "Je suis ce que je suis, et si je suis ce que je suis, qu'est-ce que je suis?",
            "La cavale aux Valaques avala l'eau du lac et l'eau du lac lava la cavale au Valaques",
            // Add more hard french tongue twister as needed
        ]
    },

    
 
    // Add more languages, categories, and texts as needed
];

function generateText() {
    const selectedLanguage = document.getElementById("language").value;
    const selectedCategory = document.getElementById("category").value;
    
    const languageObject = texts.find(obj => obj.language === selectedLanguage && obj.category === selectedCategory);
    
    if (languageObject) {
        const randomIndex = Math.floor(Math.random() * languageObject.text.length);
        const generatedText = languageObject.text[randomIndex];
        document.getElementById("generatedText").innerText = generatedText;
    } else {
        document.getElementById("generatedText").innerText = "Language or category not supported.";
    }
}

function changeLanguage() {
    generateText();
}

function changeCategory() {
    generateText();
}