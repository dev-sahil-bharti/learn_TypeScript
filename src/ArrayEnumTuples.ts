const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 15, 20, 30, 50];
const rating: Array<number> = [5.0, 4.5, 3.0];
let names: Array<string> = ["Sahil", "Muskan"];

type Chai = {
    name: string,
    price: number,
    isHot: boolean;
}

const menu: Chai[] = [
    { name: "Masala Chai", price: 20, isHot: true },
    { name: "Adark Chai", price: 30, isHot: true },
    { name: "Elaichi Chai", price: 40, isHot: true },
]
menu.push({ name: "coffee", price: 50, isHot: false });

const cities: readonly string[] = ["Dehli", "Jaipur", "Pune"];
// cities.push("Noida");

let menus: Chai[][] = [
    [
        { name: "masala chai", price: 20, isHot: true },
        { name: "ginger chai", price: 25, isHot: true }
    ],
    [
        { name: "green tea", price: 30, isHot: true },
        { name: "black tea", price: 15, isHot: true }
    ]
];

let chaiTuple: [string, number];

chaiTuple = ["hotTea", 50];

let userInfo: [string, number, boolean];
userInfo = ["sahil", 100, true]
userInfo = ["Sahil", 100, false]

const address: readonly [string, number] = ["noida", 201306];
const chaiItems: [name: string, price: number] = ["Adrak Chai", 40];


enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.MEDIUM;

enum Status {
    PENDING = 100,
    SAVED,// 
    CURRENT
}

enum chaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: chaiType) {
    console.log(`Making ${type} Chai`);
}

makeChai(chaiType.GINGER)
