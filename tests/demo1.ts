import { expect, type Locator, type Page } from "@playwright/test";
let message1: string = "Hello";
message1 = "bye";
console.log(message1);
const age1: number = 20;
console.log(age1);
const isActive: boolean = false;

const numberArry: number[] = [1, 2, 3];

let data: any = "this could be anything";
data = 42;
function add(a: number, b: number): number {
  return a + b;
}

add(3, 4);

const user: { name: string; age: number; location: string } = {
  name: "Bob",
  age: 34,
  location: "delhi",
};
user.location = "hyderabad";
