/*toda variavel que começa com cifrão guarda uma referência a algum elemento da tela */
const $root = document.querySelector('#root'); 

import CardGame from "./src/components/CardGame";

const $htmlCardGame = CardGame();

$root.insertAdjacentHTML('beforeend', $htmlCardGame + $htmlCardGame);

