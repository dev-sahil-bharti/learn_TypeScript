let response: any = "42"

let numericLength: number = (response as String).length

type Book = {
    name: string
}

let bookString = '{"name": "master book"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;


let value: any

value = "str";
value = 24;
value = [1, 2, 3, 4];
value = 2.5;
value.toUppercase()

let newValue: unknown;

newValue = 24;
newValue = "str";
newValue = [1, 2, 3, 4];
newValue = 2.5;

if (typeof newValue === "string") {
    newValue.toUpperCase()
}

try {

} catch (error) {
    if (error instanceof Error)
        console.log("error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user" | "superAdmin"
function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return
    }

    if (role === "user") {
        console.log("Redirect to user dashboard");
        return;
    }

    role;
}

function neverReturn(): never {
    while(true){  }
}
