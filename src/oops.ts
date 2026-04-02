class Chai {
    flavour: string
    // price: number

    // constructor(flavour: string, price: number) {
    //     this.flavour = flavour;
    //     this.price = price
    // }
    constructor(flavour: string) {
        this.flavour = flavour;
        console.log(this);

    }
}

const masalaChai = new Chai("Ginger")

masalaChai.flavour = "Masala";


class coffee {
    public flavour: string = "Cold Coffee";
    private secretIngrediant: string = "coffee podar"
    reveal() {
        return this.secretIngrediant;
    }
}

class Shop {
    protected shopName = "chai corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}

class Walet {
    #balance = 100;
    getBalance() {
        return this.#balance
    }
}

const w = new Walet()

class Cup {
    readonly capacity: number = 10;

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

class MordernChai {
    private _sugar = 2;

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too Sweet")
        this._sugar = value;
    }
}

const c = new MordernChai()

c.sugar = 5;


class Tea_Stall {
    static shopName = "ChaiCode CAFE"

    constructor(public flavour: string) { }
}

console.log(Tea_Stall.shopName);

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log("makeing chai");
    }
}