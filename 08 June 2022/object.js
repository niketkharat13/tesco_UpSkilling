const person = {
    get title() {
        return this._title;
    },
    set title(val) {
        this._title = val;
    }
}

person.title = "Niket";
console.log(person.title);