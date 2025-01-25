let language = prompt("pls insert hello in any language");
let languageDetector;
let english = "hello";
let spanish = "hola";
let french = "bonjour";
switch (language) {
  case (language = english):
    languageDetector = "Hello!";
    break;
  case (language = spanish):
    languageDetector = "Hola";
    break;
  case (language = french):
    languageDetector = "Bonjour";
    break;
    default:
        languageDetector="pls obey the instruction u where u where given";
}
console.log(languageDetector);
