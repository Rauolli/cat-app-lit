import { LitElement, css, html } from 'lit';
import { ChangingMood } from './changing-mood.js';
import { CatDescription } from './cat-description.js';
import Cat from './cat-class.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CatCard extends LitElement {
  static get properties() {
    return {
      cat: { type: Object },
      name: { type: String },
      image: { type: String }
    }
  }

  constructor() {
    super()
    this.cat = new Cat(this.name);
    this.cat.image = this.image
  }

  render() {
    return html`
            <article class="cat-card">
              <h2 id="cat-card-title">Meine Name ist ${this.Name = this.name}</h2>
                <section class="cat-image">
                    <img id="cat-image" src="${this.Image = this.image}" alt="this.Name = this.name">
                </section>    
                <section class="cat-change-status">
                  <changin-mood mood="feed" moodString="Füttern" .cat="${this.cat}"></changin-mood>
                  <changin-mood mood="play" moodString="Spielen" .cat="${this.cat}"></changin-mood>
                  <changin-mood mood="pet" moodString="Streicheln" .cat="${this.cat}"></changin-mood>
                </section>
                <cat-description .cat=${this.cat}></cat-description>
            </article>

    `
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mood-changed', this.handleMoodChanged);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mood-changed',this.handleMoodChanged);
  }

  handleMoodChanged(event) {
    this.cat = event.detail.cat;
    const catDesriptionComponent = this.shadowRoot.querySelector('cat-description');
    catDesriptionComponent.cat = this.cat;
    catDesriptionComponent.requestUpdate();
  }

  set Image(image) {
    this.cat.image = image;
    this.image = image;
    return this.image;
  }

  set Name(name) {
    this.cat.name = name;
    this.name = name;
    return this.name;
  }

  


  static get styles() {
    return css`
    .cat-card{
      max-width: 60vw;
      margin: 2em auto;
      padding: 1em;
      border-radius: 15px;
      background-color: #f0e8d9ec;
      box-shadow: 5px 8px 20px #1a010186;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em;
    }

    img{
        border-radius: 15px;
        /* box-shadow: 5px 8px 10px rgba(45, 74, 57, 0.51); */
        /* width: 50vw; */
        max-height: calc(50vw / 1.618);
        object-fit: cover;
        /* object-position: 50% 50%; */
    }
    
    h2{
        text-align: center;
        color: rgb(2, 50, 32);
        font-weight: 400;
    }


    article{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
    }

    

    @media (min-width: px){
        img{
            max-width: 70vw;
        }
        
        article{
            max-width: 1024px;
        }
        .cat-description{
            max-width: 500px;
        }
        ul{
            margin-left: auto;
        }
        
    }
    `
  }
}

window.customElements.define('cat-card', CatCard);
