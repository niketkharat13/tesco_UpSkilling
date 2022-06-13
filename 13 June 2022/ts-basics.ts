function add(a: number, b:number) {
    return a + b
}

let result = add(5, 3);
console.log(result);

const names: string[] = [];
const numbs: number[] = [];
const arrofobjs: {a: number, b: string, c: () => void}[] = [];

type PersonDetails = {name: string;age: number; skills: string[]; getDetails: () => void};

const person: PersonDetails = {
    name: '',
    age: 1,
    skills: ['js'],
    getDetails() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.skills);
        
        
    }
}

enum alertMsgPara {
    PRINT_TO_CONSOLE = 'CONSOLE',
     ALERT_ON_SCREEN = 'ALERT'
}

function alertMesg(msg: string | number | [] | {}, type: 'CONSOLE' | 'ALERT') {
    if (type == 'CONSOLE') {
        console.log(msg);
    } else {
        alert(msg)
    }
}

class Car {
    name: string;
    milege: number;
    private engine: string
    constructor(name: string, milege: number, engine: string) {
        this.name = name;
        this.milege = milege;
        this.engine = engine;
    }
}

interface employeeInterface {
    name: string,
    age: number,
    experiennce: number,
    skills: string
}

const employee: employeeInterface = {
    name: 'Niket',
    age: 24,
    experiennce: 3,
    skills: 'React'
}