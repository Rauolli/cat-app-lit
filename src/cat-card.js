import { LitElement, css, html } from 'lit'
import Cat from './cat-class.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCard extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },
      /**
       * The Cat.
       */
      cat: { type: Object },
    }
  }

  constructor() {
    super()
    this.cat = new Cat('Minka');
    this.docsHint = 'Click on the Vite and Lit logos to learn more';
  }

  render() {
    return html`
            <article class="cat-card">
              <h2 id="cat-card-title">Meine Name ist ${this.cat.name}</h2>
                <section class="cat-image">
                    <img id="cat-image" src="${this.cat.image}" alt="Katzenbild">
                </section>    
                <section class="cat-change-status">
                    <div class="brd">
                        <label for="feed-rng">Füttern:</label>
                        <input type="range" min="0" max="10" name="feed" id="feed-rng">
                        <button id="feed-btn">OK</button>
                    </div>
                    <div class="brd">
                        <label for="sleep-rng">Schlafen:</label>
                        <input type="range" min="0" max="10" name="sleep" id="sleep-rng">
                        <button id="sleep-btn">OK</button>
                    </div>
                    <div class="brd">
                        <label for="pet-rng">Streicheln:</label>
                        <input type="range" min="0" max="10" name="pet" id="pet-rng">
                        <button id="pet-btn">OK</button>
                    </div>
                </section>
                <section class="cat-description">

                </section>
            </article>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('cat-card', CatCard)
