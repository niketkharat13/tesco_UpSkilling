class Course {
    #price;
    get price() {
        return this.#price
    }
    set price(val) {
        if (val < 0) {
            throw `Invalid Price: ${val}`
        }
        this.#price = val;
    }
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.#price = price;
    }
    calculateValue() {
        return this.length/this.#price
    }
    printSummary() {
        console.log(`Title: ${this.title}`);
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, num){
        super(title, length, price);
        this.numOfExercise = num
    }
}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price)
    }
    publish() {
        console.log("course is published");
    }

}

let js = new Course('Javascript - complete guide', 52, 20);
let py = new Course('Python - complete guide', 32, 16);
console.log(js);
console.log(py);
let len = js.calculateValue();
console.log(len);
js.printSummary();


let jsPractical = new PracticalCourse('Javascript - complete guide', 52, 20, 15);
console.log(jsPractical);
jsPractical.printSummary();


let jsTheory = new TheoreticalCourse('Javascript - complete guide', 52, 20);
jsTheory.publish();
jsTheory.calculateValue();
console.log(jsTheory);

let javaCourse = new Course('Java complete guide', 20, 20);
javaCourse.price = 30;
console.log(javaCourse.price);
