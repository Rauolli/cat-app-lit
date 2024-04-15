import { LitElement, css, html } from 'lit'
import Cat from './cat-class.js'

/**
 * An example element.
 * 
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class ChangingMood extends LitElement {
  static get properties() {
    return {
      cat: { type: Object },
      mood: { type: String },
      moodString: { type: String },
    }
  }
  constructor() {
    super()
  }

  render() {
    return html`
            <div class="brd">
                        <label for="rng">${this.moodString}</label>
                        <input type="range" min="0" max="10" name="rng" id="rng-id">
                        <button @click="${this.setMood}" id="${this.mod}">OK</button>
            </div>
    `
  }

  setMood(){ 
    const currentVal = this.shadowRoot.getElementById('rng-id').value;
    switch (this.mood) {
      case 'feed':
         this.cat.feed(currentVal);
        break;
      case 'play':
        this.cat.play(currentVal);
        break;
      case 'pet':
        this.cat.pet(currentVal);
        break;
      default:
        break;
    }
    console.log(this.mood, 'Name: ' + this.cat.name, this.cat.printOutMoods());
  }

  static get styles() {
    return css`
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

    button{
        background-color: #356447;
        border: 1px solid rgb(2, 46, 30);
        box-shadow: 3px 2px 5px rgba(45, 74, 57, 0.3);
        color: #cbcb70;
        padding: 0.2em 1em;
        border-radius: 3px;
        transition: all 0.2s;
    }

    button:hover{
        background-color: rgba(6, 225, 145, 0.675);
        transform: scale(1.13);
        color: #2d563d;
    }
`
}
}

window.customElements.define('changin-mood', ChangingMood)

