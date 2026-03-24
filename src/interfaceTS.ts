type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: chaiOrder) {
    console.log(order);
}

function serveChai(order: chaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number;
    chaiPatti: number;
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
//     chaiPatti = 10;
// }

interface cupSize {
    size: "small" | "large";
}

class Chai implements cupSize {
    size: "small" | "large" = "large";
}


interface Response {
    res: { ok: true } | { ok: false }
}

class myRes implements Response {
    res: { ok: true } | { ok: false } = { ok: true };
}

type Teatype = "mas" | "ginger" | "lemon"

function orderChai(t: Teatype) {
    console.log(t);
}

type BaseChai = { teaLevels: number }
type Extra = { masala: number }

type masalaChai = BaseChai & Extra

const cup: masalaChai = {
    teaLevels: 2,
    masala: 1
}

type user = {
    username: string;
    bio?: string
}

const u1: user = { username: "sahil singh" };
const u2: user = { username: "sahil singh", bio: "software Engineer" };

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "master GK",
    version: 1.0
}