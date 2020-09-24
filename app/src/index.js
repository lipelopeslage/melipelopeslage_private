import "./style.css";
import Icon from "./assets/images/picture.jpg";
import "./../../webcomponents/dist/main.js";
import * as toxicity from "@tensorflow-models/toxicity";

function component() {
  const element = document.createElement("div");

  element.innerHTML = `
  <h1 class="search-title">EmotionalSearch</h1  >
  <div class="search-box">
    <boto-text-input></boto-text-input>
    <boto-button>TEXTO</boto-button>
    SLOT ABAIXO:
    <slot>dentro do slot</slot>
  </div>
  <div class="search-result">
    <boto-pizza-graph></boto-pizza-graph>
    <boto-thermometer></boto-thermometer>
  </div>
  `;
  element.classList.add("app");

  const myIcon = new Image();
  myIcon.src = Icon;

  // const input = document.createElement('boto-text-input')

  //const button = document.createElement('boto-button')
  //button.innerHTML = 'Alo mundo!'
  // The minimum prediction confidence.
const threshold = 0.9;

// Which toxicity labels to return.
const labelsToInclude = ['insult'];

const sentence = 'this surfer sucks'

toxicity.load(threshold, labelsToInclude).then(model => {
    model.classify([sentence]).then(predictions => console.log('>> ',sentence, ':', predictions[0].results[0]));
}).catch(e => console.error('>>++++>>', e));

  return element;
}

document.body.appendChild(component());
