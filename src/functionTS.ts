type chai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredient: string
}
function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("hotTea", 2);

function serveChai(): number {
    console.log(`Serve number of chai: `);
    return 5;
}

function makeOrder(order: string): string | null {
    if (!order) return null;
    return order;
}

function logChai(): void {
    console.log("Chai is ready.");
}

function coffee(type: string = "hot coffee") {

}

function createCoffee(order: {
    type: string,
    sugar: number,
    size: "large" | "small";
}): number {
    return 10;
}