// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors

const chosenNoun1Display = document.getElementById('choosenNoun1');
const chosenVerbDisplay = document.getElementById('choosenVerb');
const chosenAdjectiveDisplay = document.getElementById('choosenAdjective');
const chosenNoun2Display = document.getElementById('choosenNoun2');
const chosenSettingDisplay = document.getElementById('choosenSetting');
const storyDisplay = document.getElementById('story');

// Constants for final buttons and p tags

const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');

// Variables for pre-defined arrays

var nounArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat',];
var nounArray2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm',];
var numOfPlacesArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes',];

// Variables for count to grab array elements

let chosenNoun1 = '';
let chosenVerb = '';
let chosenAdjective = '';
let chosenNoun2 = '';
let chosenSetting = '';

/* Functions
-------------------------------------------------- */

function getRandomElement(arr) { // function to get a random element from the array
    return arr[Math.floor(Math.random() * arr.length)];
}

function noun1_on_click() { // function to display 1 of the noun options
    // variable to get array element and displaying it

    chosenNoun1 = getRandomElement(nounArray); // calls upon the getrandomelement function to pick a random element
    chosenNoun1Display.textContent = chosenNoun1; // displays the chosen element in the corresponding empty paragraph tags

    const utterance = new SpeechSynthesisUtterance(chosenNoun1); // use of narration as this uses the web speech ai to narrate the words and stories
    speechSynthesis.speak(utterance); // creates a new utterance and speaks the text
}

function verb_on_click() { // function to display 1 of the verb options

    chosenVerb = getRandomElement(verbArray);
    chosenVerbDisplay.textContent = chosenVerb;

    const utterance = new SpeechSynthesisUtterance(chosenVerb);
    speechSynthesis.speak(utterance);
}

function adjective_on_click() { // function to display 1 of the adjective options

    chosenAdjective = getRandomElement(adjectiveArray);
    chosenAdjectiveDisplay.textContent = chosenAdjective;

    const utterance = new SpeechSynthesisUtterance(chosenAdjective);
    speechSynthesis.speak(utterance);
}

function noun2_on_click() { // function to display 1 of the second noun options

    chosenNoun2 = getRandomElement(nounArray2);
    chosenNoun2Display.textContent = chosenNoun2;

    const utterance = new SpeechSynthesisUtterance(chosenNoun2);
    speechSynthesis.speak(utterance);
}

function setting_on_click() { // function to display 1 of the place options

    chosenSetting = getRandomElement(numOfPlacesArray);
    chosenSettingDisplay.textContent = chosenSetting;

    const utterance = new SpeechSynthesisUtterance(chosenSetting);
    speechSynthesis.speak(utterance);
}

function playback_on_click() { // function to playback the user created story

    // after each button is clicked the variable is assigned to the corresponding random element which can then be called upon 
    const story = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
    storyDisplay.textContent = story; // displays the story

    const utterance = new SpeechSynthesisUtterance(story);
    speechSynthesis.speak(utterance);
}


function random_on_click() { // function to generate a random story
    const randomNoun1 = getRandomElement(nounArray); // gets a random element for each one of the 5 categories
    const randomVerb = getRandomElement(verbArray);
    const randomAdjective = getRandomElement(adjectiveArray);
    const randomNoun2 = getRandomElement(nounArray2);
    const randomSetting = getRandomElement(numOfPlacesArray);

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
    storyDisplay.textContent = randomStory;

    const utterance = new SpeechSynthesisUtterance(randomStory);
    speechSynthesis.speak(utterance);
}

function reset_on_click() {  // function to reset all story values and stop displaying anything
    chosenNoun1 = '';
    chosenVerb = '';
    chosenAdjective = '';
    chosenNoun2 = '';
    chosenSetting = '';

    chosenNoun1Display.textContent = '';
    chosenVerbDisplay.textContent = '';
    chosenAdjectiveDisplay.textContent = '';
    chosenNoun2Display.textContent = '';
    chosenSettingDisplay.textContent = '';
    storyDisplay.textContent = '';

    console.log('The story has been reset.');
}

function add_student_info() { // function to dynamically add studentinfo using a button

    const studentId = "1263760";
    const studentName = "Kris Stallard";

    document.getElementById("studentInfo").textContent = `Student Name: ${studentName} // Lakehead Student ID: ${studentId}`;
}

/* Event Listeners
-------------------------------------------------- */

noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset_on_click);
studentButton.addEventListener('click', add_student_info);
