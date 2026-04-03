function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("masalaChai")
wrapInArray(50)
wrapInArray(true)
wrapInArray({ flavour: "masala chai", price: 30 })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", 30)
pair("masala", { price: 30, isHot: true });


interface Box<T> {
    content: T;
    name?: T;
}

const numberBox: Box<number> = { content: 20 }
const cupBox: Box<number> = { content: 10 }
const cupBoxName: Box<string> = { content: "largebox", name: "largebox" }

interface ApiPromiss<T> {
    status: number,
    data: T,
};

const response: ApiPromiss<{ flavour: string }> = {
    status: 200,
    data: { flavour: "masala chai" },
};