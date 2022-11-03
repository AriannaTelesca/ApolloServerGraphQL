"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nouns = ["cat", "girl", "boy", "dog", "man", "friend", "police", "rain", "univers", "computer", "doctor", "sea", "chicken", "tree", "dinosaur", "happiness", "freedom", "nature", "son", "sun"];
const verbs = ["run", "kiss", "send", "listen", "narrow", "pretend", "target", "knock", "deem", "slide", "lay", " facilitate", "slip", "found", "resign", "display", "fill", "belong", "comment", "buy"];
const adjectives = ["beautiful", "lazy", "wooden", "lovely", "dumb", "rough", "soft", "warm", "oceanic", "talented", "fierce", "third", "sparkling", "impressive", "tearful", "cheap", "royal", "cool", "safe", "foolish"];
const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "generously", "possibly", "warmly", "regularly", "poorly", "continually", "especially", "usually", "too", "devotedly"];
const preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
let quot = [];
function getRandomNumber(rand, n) {
    rand = Math.floor(Math.random() * n);
    return rand;
}
let rand1;
let rand2;
let rand3;
let rand4;
let rand5;
function sentence() {
    let content = `The ${adjectives[getRandomNumber(rand1, 20)]} ${nouns[getRandomNumber(rand2, 20)]} ${verbs[getRandomNumber(rand3, 20)]} because the ${nouns[getRandomNumber(rand4, 20)]} ${adverbs[getRandomNumber(rand2, 20)]} ${verbs[getRandomNumber(rand1, 20)]} ${preposition[getRandomNumber(rand5, 10)]} a ${adjectives[getRandomNumber(rand3, 20)]} ${nouns[getRandomNumber(rand4, 20)]}.`;
    quot.push(content);
}
;
for (let x = 0; x < 100; x++) {
    sentence();
}
;
const firstname = ['John', 'Timur', 'Guillaume', 'Sophie', 'Dante', 'Jilani', 'Arnaud', 'Bhama', 'Clément', 'Arianna', 'Anthony', 'Arthur', 'François', 'Younes', 'Naim', 'Felicien', 'Arnold', 'Quentin', 'Omar', 'Mhedi'];
const lastname = ['Camilleri', 'Tabucchi', 'Bocaccio', 'Calvino', 'Alighieri', 'Sapienza', 'Morante', 'Ottieri', 'Pasolini', 'Leopardi', 'Manzoni', 'Tolstoj', 'Dostoevskij', 'Flaubert', 'Stendal', 'Proust', 'Woolf', 'Wallace', 'Pessoa', 'Rimbaud'];
let nameA = [];
function author() {
    var name = `${firstname[getRandomNumber(rand1, 20)]} ${lastname[getRandomNumber(rand2, 20)]}`;
    nameA.push(name);
}
for (let x = 0; x < 100; x++) {
    author();
}
let apiQuotes = [];
for (let x = 0; x < 100; x++) {
    let sent;
    sent =
        {
            author: nameA[x],
            quote: quot[x]
        };
    apiQuotes.push(sent);
}
exports.default = apiQuotes;
