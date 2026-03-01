function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`
    }
    return `Chai order No: ${kind}`
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving chai ${msg}`;
    } return `Serving default chai..`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai..`
    }
    if (size === "medium" || size === "large") {
        return `Extra chai serve..`
    }
    return `chai order #${size}`;
}

class kulhadChai {
    serve() {
        return `Serving Kulhad Chai`
    }
}
class cutingChai {
    serve() {
        return `Serving cuting Chai`
    }
}

function serve(chai: kulhadChai | cutingChai) {
    if (chai instanceof kulhadChai) {
        return `serve ${chai.serve()}`;
    }
    if (chai instanceof cutingChai) {
        return `serve ${chai.serve()}`;
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `serving custom chai: ${item}`
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElichiChai = { type: "elichi"; aroma: number };


function makingChai(order: MasalaChai | GingerChai | ElichiChai) {
    switch (order.type) {
        case "masala":
            return `masala chai spice ${order.spicelevel}`;

        case "ginger":
            return `ginger chai amount ${order.amount}`;

        case "elichi":
            return `elichi chai aroma ${order.aroma}`;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        return `masala chai with spicey`
    }
}

function isSrtringArray(arr: unknown): arr is string[] {
    
}