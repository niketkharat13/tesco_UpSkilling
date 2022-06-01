

class BooleanQues{
    constructor(desc) {
        this.desc = desc;
    }
    printQuestion() {
        console.log(this.desc);
        console.log('1. TRUE');
        console.log('2. FALSE');
    }
}

class RangeQues{
    constructor(desc) {
        this.desc = desc;
    }
    printQuestion() {
        console.log(this.desc);
        console.log('1. Minimum ______________________');
        console.log('2. Maximum ______________________');
    }
}

class McqQues{
    constructor(desc, option) {
        this.desc = desc;
        this.option = option
    }
    printQuestion() {
        console.log(this.desc);
        this.option.map((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class TextQuestion{
    constructor(desc){
        this.desc = desc;
    }
    printQuestion() {
        console.log(this.desc);
        console.log("Answer _______________________________");
    }
}



const questionArray = [
    new BooleanQues('Are you javasxript developer'),
    new RangeQues('what is speed limit in your city?'),
    new McqQues('Javascript is __________ threaded language', ['siingle', 'multi', 'none of the above']),
    new TextQuestion('desctibe your favorite js feature')
]

(function () {
    questionArray.forEach(question => {
        question.printQuestion()
    })
})();