class calorieTracker {
    constructor(maxcalorie) {
        this.maxCalorie = maxcalorie;
        this.currentCalorie = 0;
    }

    logCalorie(calorie) {
        this.currentCalorie += calorie;
        if (this.currentCalorie > this.maxCalorie) {
            notifyUser();
        }
    }
}

function notifyUser() {
    console.log("calories has exceeded");
}

let initTracker = new calorieTracker(2000);
initTracker.logCalorie(500)
initTracker.logCalorie(700)
initTracker.logCalorie(1000)
