import css from "./style.css";
import BotoElement from "../../utils/component.js";

class Thermometer extends BotoElement {
  constructor() {
    super();
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <div class='holder'>
      <div class='preview'>neutral</div>
      <div class='graphic'>
      <svg viewBox="0 0 36 36" >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%" gradientTransform="rotate(-5)">
          <stop offset="0%" stop-color="#45BA79"/>
          <stop offset="50%" stop-color="#F1D00E"/>
          <stop offset="100%"   stop-color="#E64728"/>
        </linearGradient>
      </defs>
      <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="red";
          stroke-width="4";
          stroke-dasharray="70, 100"
          style="transform-origin: 50% 50%; transform: rotate(-125deg);"
        />
        </svg>
      </div>
    </div>
  `;
  }

  showed() {}

  hidden() {}
}

BotoElement.register("boto-thermometer", Thermometer);
