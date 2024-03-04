import Animal from "./animal.js";
class Bird extends Animal {
    static counter = 0
    constructor(name, age, color) {
        super(name, age)
        this.color = color;
    }


}