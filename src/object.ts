// Basic object type
let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

tea = {
    name: "ginger tea",
    price: 20,
    isHot: true
};

// Type alias
type Tea = {
    name: string;
    price: number;
    ingredient: string[];
};

const hotChai: Tea = {
    name: "Hot Tea",
    price: 30,
    ingredient: ["ginger", "tea leaves"]
};

// User type
type User = {
    username: string;
    password: string;
};

const u1: User = {
    username: "user1",
    password: "Pass123"
};

// Nested types
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
    odId: number;
    items: Item[];
    address: Address[];
};

// Chai type
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
};

// Partial utility
const updateChai = (updates: Partial<Chai>): void => {
    console.log("update chai with", updates);
};

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({ name: "chai" });

// Required utility
type ChaiOrder = {
    name?: string;
    price: number;
};

const placeOrder = (order: Required<ChaiOrder>): void => {
    console.log(order);
};

placeOrder({
    name: "lemon chai",
    price: 60
});

// Pick utility
type Coffee = {
    name: string;
    price: number;
    isHot: boolean;
    ingredient: string;
};

type CoffeeInfo = Pick<Coffee, "name" | "price">;

const coffeeOrder: CoffeeInfo = {
    name: "Espresso",
    price: 50
};

// Omit utility
type HotMilk = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredient: string;
};

type PublicMilkInfo = Omit<HotMilk, "secretIngredient">;

const hotMilkServe: PublicMilkInfo = {
    name: "simple milk",
    price: 100,
    isHot: false
};