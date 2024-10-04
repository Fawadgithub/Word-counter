// Prompt the user to input a sentence
let sentence = prompt("Please enter a sentence:");

// Initialize a word count
let wordCount = 0;

// Use a flag to track if we are inside a word
let inWord = false;

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    // Check if the character is not a space
    if (char !== ' ') {
      
        if (!inWord) {
            wordCount++;
            inWord = true; 
        }
    } else {
        // If we encounter a space, we are no longer in a word
        inWord = false;
    }
}

// Display the total number of words
alert("Total number of words: " + wordCount);
