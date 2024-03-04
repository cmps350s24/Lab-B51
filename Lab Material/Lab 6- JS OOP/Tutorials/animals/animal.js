export default class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }

    setName(value) {
        console.log('setter is called');
        this.name = value
    }
    toString() {
        return `Animal [name=${this.name}, age=${this.age}]`
    }
}

const animal = new Animal('Leo', 3);
console.log(animal.toString());


animal.setName('Leo2');
console.log(animal);