"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nouns = ["cat", "girl", "boy", "dog", "man", "friend", "police", "rain", "univers", "computer", "doctor", "sea", "chicken", "tree", "dinosaur", "happiness", "freedom", "nature", "son", "sun"];
let verbs = ["run", "kiss", "send", "listen", "narrow", "pretend", "target", "knock", "deem", "slide", "lay", " facilitate", "slip", "found", "resign", "display", "fill", "belong", "comment", "buy"];
let adjectives = ["beautiful", "lazy", "wooden", "lovely", "dumb", "rough", "soft", "warm", "oceanic", "talented", "fierce", "third", "sparkling", "impressive", "tearful", "cheap", "royal", "cool", "safe", "foolish"];
let adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "generously", "possibly", "warmly", "regularly", "poorly", "continually", "especially", "usually", "too", "devotedly"];
let preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
let quot = [];
function sentence() {
    var rand1 = Math.floor(Math.random() * 20);
    var rand2 = Math.floor(Math.random() * 20);
    var rand3 = Math.floor(Math.random() * 20);
    var rand4 = Math.floor(Math.random() * 20);
    var rand5 = Math.floor(Math.random() * 20);
    var rand6 = Math.floor(Math.random() * 10);
    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + verbs[rand3] + " because the " + nouns[rand4] + " " + adverbs[rand5] + " " + verbs[rand6] + " " + preposition[rand6] + " a " + adjectives[rand2] + " " + nouns[rand5] + ".";
    quot.push(content);
}
;
for (let x = 0; x < 100; x++) {
    sentence();
}
;
let firstname = ['John', 'Timur', 'Guillaume', 'Sophie', 'Dante', 'Jilani', 'Arnaud', 'Bhama', 'Clément', 'Arianna', 'Anthony', 'Arthur', 'Framçois', 'Younes', 'Naim', 'Felicien', 'Arnold', 'Quentin', 'Omar', 'Mhedi'];
let lastname = ['Camilleri', 'Tabucchi', 'Bocaccio', 'Calvino', 'Alighieri', 'Sapienza', 'Morante', 'Ottieri', 'Pasolini', 'Leopardi', 'Manzoni', 'Tolstoj', 'Dostoevskij', 'Flaubert', 'Stendal', 'Proust', 'Woolf', 'Wallace', 'Pessoa', 'Rimbaud'];
let nameA = [];
function author() {
    var rand1 = Math.floor(Math.random() * 20);
    var rand2 = Math.floor(Math.random() * 20);
    var name = firstname[rand1] + " " + lastname[rand2];
    nameA.push(name);
}
for (let x = 0; x < 100; x++) {
    author();
}
let apiQuotes = [];
for (let x = 0; x < 100; x++) {
    let sent;
    sent = {
        author: nameA[x],
        quote: quot[x]
    };
    apiQuotes.push(sent);
}
exports.default = apiQuotes;
