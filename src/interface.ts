interface Chai {
    name: string,
    price: number
    milk?: boolean
}

const masala: Chai = {
    name: "MasalaChai",
    price: 30,
};

interface TeaStall {
    readonly id: number,
    name: string,
    isHot: boolean
};

const s1: TeaStall = { id: 1, name: "masala chai", isHot: true }

// s1.id = 2
s1.name = "ginger Chai"

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaRec {
    name: string,
    paani: number,
    milk: number,
    patti: number
}
interface TeaMachine {
    start(): void;
    stop(): void;
    makeTea(recipe: TeaRec): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Tea Machine Started");
    },

    makeTea(recipe) {
        console.log(`Making ${recipe.name}`);
        console.log(`Making ${recipe.paani}`);
        console.log(`Making ${recipe.milk}`);
        console.log(`Making ${recipe.patti}`);
    },

    stop() {
        console.log("Tea Machine is Stop!!");
    },
}

interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    Masala_Chai: 4.5,
    Ginger_Chai: 4.0
};


interface User {
    name: string,
}

interface User {
    age: number;
}

const u1: User = {
    name: "Sahil Singh",
    age: 23,
};

interface A { a: number }
interface B { b: string }
interface C extends A, B { a: number, b: string, c: boolean }

