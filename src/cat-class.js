class Cat{
    #name;
    #tiredness;
    #hungriness;
    #cuddliness;
    #happiness;
    #image;

    constructor(name){
        this.#name = name;
        // Zufallszahlen 0 - 100 -> erstmal auskommentiert ***********************
        this.#tiredness = Math.floor((Math.random() * 100)+1);
        this.#hungriness = Math.floor((Math.random() * 100)+1);
        this.#cuddliness = Math.floor((Math.random() * 100)+1);
        this.#happiness = Math.floor((Math.random() * 100)+1);

        // this.#tiredness = 100;
        // this.#hunger = 100;
        // Anstatt: Loneliness -> habe ich so entschieden
        // this.#cuddliness = 0;
        // this.#happiness = 0;

        this.#image = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554_960_720.jpg';
    }

    // getter-Methoden
    get name(){ return this.#name; }
    get tiredness(){ return this.#tiredness; }
    get hunger(){ return this.#hungriness; }
    get cuddliness(){ return this.#cuddliness; }
    get happiness(){ return this.#happiness; }
    get image(){ return this.#image; }

    // setter-Methoden
    set name(name){ this.#name = name; }
    set tiredness(tiredness){
        this.#tiredness = tiredness;
        this.checkIfInsideRange(this.#tiredness); 
    }
    set hunger(hunger){
        this.#hungriness = hunger; 
        this.checkIfInsideRange(this.#hungriness);
    }
    set cuddliness(cuddliness){ 
        this.#cuddliness = cuddliness; 
        this.checkIfInsideRange(this.#cuddliness);
    }
    set happiness(happiness){ 
        this.#happiness = happiness;
        this.checkIfInsideRange(this.#happiness);
    }

    set image(image){ this.#image = image; }

    checkIfInsideRange(value){
        if(value <= 0){
            return 0;
        }else if(value >= 100){
            return 100;
        }else{
            return value;
        }
    }

    feed(footBites){
        this.hungriness -= parseInt(footBites);
        this.happiness += parseInt(footBites);
        this.cuddliness += parseInt(footBites);
    }

    play(hours){
        this.tiredness += parseInt(hours);
        this.happiness += parseInt(hours/4);
        this.hungriness += parseInt(hours/4);
    }

    pet(minutes){
        // in Number wandeln
        const minInt = parseInt(minutes);
        this.cuddliness -= minInt;
        this.happiness += minInt;
        this.tiredness += minInt/4;
    }

    statusPrintOut(){
        return(`<li>Ich bin ${this.checkStatus(this.hunger)} (${this.hunger}) hungrig.</li>
        <li>Ich bin ${this.checkStatus(this.tiredness)} (${this.tiredness}) müde.</li>  
        <li>Ich bin ${this.checkStatus(this.cuddliness)} (${this.cuddliness}) verschmust.</li>
        <li>Ich bin ${this.checkStatus(this.happiness)} (${this.happiness}) glücklich.</li>`);
    }

    checkStatus(value){       
        switch(true){
            case (value >= 90):
                return 'extrem';
                break;
            case (value >= 60):
                return 'sehr';
                break;
            case (value >= 25):
                return 'ein wenig';
                break;
            case (value < 25):
                return 'überhaupt nicht';
                break;
            default:
                return 'keine Ahnung, wie sehr, aber etwas';
        }
    }

}

export default Cat;