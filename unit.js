
class Unit {
    constructor(cost, power, resillience) {
        this.cost = cost
        this.power = power
        this.resilliance = resilliance
    }

    hardAlgorithm() {
        this.cost -= 2;
        this.resilliance += 3
        console.log("Target's Resilliance has been increased by 3 and will cost 2")
    }

    unhandledPromiseRejection() {
        this.cost -= 1;
        this.resilliance -= 2;
        console.log("Target's resilliance has been decreased by 2 and will cost 2")
    }

    pairProgramming() {
        this.cost -= 3;
        this.power += 2;
        console.log("Target's power has increased by 2 and will cost 3")
    }
}

red_belt_ninja = new Unit(3, 3, 4)
red_belt_ninja.hardAlgorithm();

black_belt_ninja = new Unit(4, 5,4)
red_belt_ninja.unhandledPromiseRejection();

red_belt_ninja.pairProgramming()

red_belt_ninja.hardAlgorithm(black_belt_ninja)
