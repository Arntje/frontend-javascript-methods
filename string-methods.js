/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false
const fruit = "Banaan";
const vegetable = "Aardappel";
console.log(fruit.length>vegetable.length);

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"
const lastLetterOfFruit = fruit.substring(fruit.length-1);
const lastLetterOfVegetable = vegetable.substring((vegetable.length-1))
console.log(lastLetterOfFruit + " " + lastLetterOfVegetable);

/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";
newUserInput = userInput.trim();
console.log(newUserInput);

/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"
let includesFantastisch = story.includes("Fantastisch");
console.log(includesFantastisch);

/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."
const endOfSentence = story.indexOf('.');

const sentence = story.substring(0, endOfSentence + 1);
console.log(sentence);

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";
const dutchPrice = price.replace("$", "€").replace(",", ".");
console.log(dutchPrice);




