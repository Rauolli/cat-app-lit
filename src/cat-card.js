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
                    <ul>
                        <li>Name: ${this.cat.name}</li>
                        <li>Müdigkeit: ${this.cat.tiredness}</li>
                        <li>Hunger: ${this.cat.hunger}</li>
                        <li>Kuscheligkeit: ${this.cat.cuddliness}</li>
                        <li>Glück: ${this.cat.happiness}</li>
                    </ul>
                </section>
            </article>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  _onClick() {
    this.count++
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
      background-color: rgba(222, 248, 233, 0.572);
      box-shadow: 5px 8px 10px rgba(45, 74, 57, 0.51);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em;
    }

    li{
        list-style: none;
    }

    img{
        border-radius: 15px;
        /* box-shadow: 5px 8px 10px rgba(45, 74, 57, 0.51); */
        /* width: 50vw; */
        max-height: calc(50vw / 1.618);
        object-fit: cover;
        /* object-position: 50% 50%; */
    }
    ul{
        margin-left: -2em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
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

    .brd{
        width: 300px;
        display: flex;
        justify-content: space-between;
        background-color: rgba(222, 248, 233, 0.572);;
        border: 1px solid rgba(45, 74, 57, 0.8);
        /* box-shadow: 3px 5px 8px rgba(45, 74, 57, 0.3); */
        padding: 0.2em 0.6em;
        border-radius: 5px;
    }

    .cat-change-status{
        display: flex;
        flex-flow: wrap column;
        justify-content: center;
        gap: 1.2em;
    } 

    .cat-description{
        max-width: 100%;
        min-width: 80%;
        margin: 2em auto;
        padding: 1em;
        border-radius: 15px;
        background-color: rgba(4, 104, 67, 0.4);
        /* box-shadow: 5px 8px 10px rgba(45, 74, 57, 0.51); */
    }

    button{
        background-color: rgba(4, 104, 67, 1);
        border: 1px solid rgb(2, 46, 30);
        box-shadow: 3px 2px 6px rgba(45, 74, 57, 0.3);
        padding: 0.2em 1em;
        border-radius: 3px;
        transition: all 0.3s;
    }

    button:hover{
        background-color: rgba(6, 225, 145, 0.675);
        transform: scale(1.15);
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

window.customElements.define('cat-card', CatCard)
