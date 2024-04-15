import { LitElement, css, html } from 'lit'
import Cat from './cat-class.js'

/**
 * An example element.
 *  
 * 
 * @slot - This element has a slot
 *  @csspart button - The button
 */ 

export class CatDescription extends LitElement {
    static get properties() {
        return {
        cat: { type: Object },
        }
    }


    constructor() {
        super();
    }
    
    render() {
        return html`
                <section class="cat-description">
                    <ul>
                        <li>Name: ${this.cat.name}</li>
                        <li>Müdigkeit: ${this.cat.tiredness}</li>
                        <li>Hunger: ${this.cat.hungriness}</li>
                        <li>Kuscheligkeit: ${this.cat.cuddliness}</li>
                        <li>Glück: ${this.cat.happiness}</li>
                    </ul>
                </section>
        `
    }
    
    static get styles() {
        return css`
        ul{
            margin-left: -2em;
        }
        li{
            list-style: none;
        }
        .cat-description{
            max-width: 100%;
            min-width: 80%;
            margin: 2em auto;
            padding: 1em;
            border-radius: 15px;
            background-color: #1d4a2d;
            color: #e1e17a;
            font-size: 1.1rem;
            font-weight:300;
        }
        `
    }
}

window.customElements.define('cat-description', CatDescription);