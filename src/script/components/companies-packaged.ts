import { LitElement, css, html } from 'lit';

import { customElement, state } from 'lit/decorators.js';

import {
  smallBreakPoint,
  mediumBreakPoint,
  largeBreakPoint,
  xxLargeBreakPoint,
  xxxLargeBreakPoint,
} from '../utils/css/breakpoints';

@customElement('companies-packaged')
export class ComapniesPackaged extends LitElement {

  @state() companies: string[] = ["facebook", "instagram", "mailchimp", "plutotv", "sketchapp", "tiktok", "twitter"] ;

  static get styles() {
    return [
    css`
      :host {
        --carousel-width: 1000px;
        --slide-width: 200px;
        --slide-height: 80px;
        --carousel-image-width: 120px;
      }
      #success-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2em 0;
        background-color: white;
      }

      #success-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #292C3A;
        margin-bottom: 1em;
      }

      #success-title h2 {
        text-align: center;
        font-size: 1.6em;
        margin: 0;
      }

      #success-title p {
        text-align: center;
        margin: 0;
        font-size: .75em;
      }

      #success-wrapper #img-box {
        background-image: url("/assets/new/packaged_1366.svg");
        height: 4em;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        25% { transform: translateX(calc(var(--slide-width) * -1)) }
        50% { transform: translateX(calc(var(--slide-width) * -2)) }
        75% { transform: translateX(calc(-var(--slide-width) * 1)) }
        100% { transform: translateX(0); }
      }

      .slider {
        background: white;
        height: var(--slide-height);
        overflow:hidden;
        position: relative;
        width: var(--carousel-width);
      }

      .slider::before,
      .slider::after {
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
      }
      
      .slider::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }

      .slider::before {
        left: 0;
        top: 0;
      }

      .slide-track {
        animation: scroll 15s infinite;
        animation-delay: 3s;
        display: flex;
        width: calc(var(--slide-width) * 14);
      }
      
      .slide {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--slide-height);
        width: var(--slide-width)
      }

      .slide img {
        height: auto;
        width: var(--carousel-image-width);
      }

      /* < 480px */
      ${smallBreakPoint(css`
          /* 3 icons in the carousel */
      `)}

      /* 480px - 639px */
      ${mediumBreakPoint(css`
        /* 4 icons in the carousel */
      `)}

      /* 640px - 1023px */
      ${largeBreakPoint(css`
          /* 5 icons in the carousel */
      `)}

      /*1024px - 1365px*/
      ${xxLargeBreakPoint(css`
          
      `)}

      /* > 1920px */
      ${xxxLargeBreakPoint(css`
      `)}
    `
    ];
  }

  constructor() {
    super();
  }

  firstUpdated() {
    const shuffled = this.shuffle(this.companies);
    this.companies = [...shuffled];
    console.log("companies", this.companies);
  }

  shuffle(array: any) {
    let currentIndex = array.length
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  render() {
    return html`
    <div id="success-wrapper">
      <div id="success-title">
          <h2>Apps Packaged</h2>
          <p>Companies of all sizes—from startups to Fortune 500s—have used PWABuilder to package their PWAs.</p>
      </div>
      <div class="slider">
        <div class="slide-track">
          ${this.companies.map((comp: string) => 
              html`
              <div class="slide">
                <img src="/assets/new/${comp}_carousel.png" alt="${comp} logo" />
              </div>`
            )}
        </div>
      </div>
    </div>
    `;
  }
}
