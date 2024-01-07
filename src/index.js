const fs = require('fs')
const { Tokens, Operators, Types } = require('./token')

// Function to tokenize AetherLang code
function tokenizeAetherLangCode(code) {
    // Your tokenization logic goes here
    // For simplicity, let's split by whitespace and print each token
    let content = code.split("\n")
    content = content.map(token => token.trim())

    content.forEach(line => {
        const content_tokens = line.split(/\s+/);

        content_tokens.forEach(line_token => {
            for (const key in Tokens) {
                if (Tokens.hasOwnProperty(key)) {
                    const value = Tokens[key];
                    if (line_token == value) {
                        console.log(`${line_token} in Tokens`);
                    }
                }
            }

            for (const key in Operators) {
                if (Operators.hasOwnProperty(key)) {
                    const value = Operators[key];
                    if (line_token == value) {
                        console.log(`${line_token} in Operators`);
                    }
                }
            }

            for (const key in Types) {
                if (Types.hasOwnProperty(key)) {
                    const value = Types[key];
                    if (line_token == value) {
                        console.log(`${line_token} in Types`);
                    }
                }
            }
        })

        // console.log(content_tokens);
    });

    return content.filter(token => token.length > 0);
}

// Read the AetherLang code from a file
const filePath = '../bin/test.ael'; // Replace with your file path
let file_contents

try {
    file_contents = fs.readFileSync(filePath, "utf-8");
} catch (err) {
    console.error(`Error reading file: ${err}`);
    return;
}

// Tokenize the code
const tokens = tokenizeAetherLangCode(file_contents);

// Print all tokens
// console.log("Tokens:");
// console.log(tokens);


