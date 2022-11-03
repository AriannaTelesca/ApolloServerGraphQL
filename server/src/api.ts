const nouns: string[] = ["cat", "girl", "boy", "dog", "man", "friend", "police", "rain", "univers", "computer", "doctor", "sea", "chicken", "tree", "dinosaur", "happiness", "freedom", "nature", "son", "sun"];
const verbs: string[] = ["run", "kiss", "send", "listen", "narrow", "pretend", "target", "knock", "deem", "slide", "lay", " facilitate", "slip", "found", "resign", "display", "fill", "belong", "comment", "buy"];
const adjectives: string[] = ["beautiful", "lazy", "wooden", "lovely", "dumb", "rough", "soft", "warm", "oceanic", "talented", "fierce", "third", "sparkling", "impressive", "tearful", "cheap", "royal", "cool", "safe", "foolish"];
const adverbs: string[] = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "generously", "possibly", "warmly", "regularly", "poorly", "continually", "especially", "usually", "too", "devotedly"];
const preposition: string[] = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

let quot: string[] = [];

function getRandomNumber (rand: number, n : number) : number {
  rand = Math.floor(Math.random() * n);
  return rand;
}

let rand1 : number;
let rand2 : number;
let rand3 : number;
let rand4 : number;
let rand5 : number;

function sentence() : void {
  let content : string = `The ${adjectives[getRandomNumber(rand1, 20)]} ${nouns[getRandomNumber(rand2, 20)]} ${verbs[getRandomNumber(rand3, 20)]} because the ${nouns[getRandomNumber(rand4, 20)]} ${adverbs[getRandomNumber(rand2, 20)]} ${verbs[getRandomNumber(rand1, 20)]} ${preposition[getRandomNumber(rand5, 10)]} a ${adjectives[getRandomNumber(rand3, 20)]} ${nouns[getRandomNumber(rand4, 20)]}.`;

  quot.push(content);

};

for ( let x: number = 0; x<100; x++ ) {
  sentence();
};

const firstname: string[] = ['John', 'Timur', 'Guillaume', 'Sophie', 'Dante', 'Jilani', 'Arnaud', 'Bhama', 'Clément', 'Arianna', 'Anthony', 'Arthur', 'François', 'Younes', 'Naim', 'Felicien', 'Arnold', 'Quentin', 'Omar', 'Mhedi'];
const lastname: string[] = ['Camilleri', 'Tabucchi', 'Bocaccio', 'Calvino', 'Alighieri', 'Sapienza', 'Morante', 'Ottieri', 'Pasolini', 'Leopardi', 'Manzoni', 'Tolstoj', 'Dostoevskij', 'Flaubert', 'Stendal', 'Proust', 'Woolf', 'Wallace', 'Pessoa', 'Rimbaud']

let nameA: string[] = [];

function author() : void {
  var name = `${firstname[getRandomNumber(rand1, 20)]} ${lastname[getRandomNumber(rand2, 20)]}`;

  nameA.push(name);
}

for ( let x: number = 0; x<100; x++ ) {
    author();
}

interface api {
  author : string;
  quote : string
}

let apiQuotes : api[] = [];

for ( let x: number = 0; x<100; x++ ) {
  let sent:
   {
    author: string;
    quote: string
   }

  sent = 
    {
      author : nameA[x],
      quote : quot[x]
    }

  apiQuotes.push(sent);
}

export default apiQuotes;