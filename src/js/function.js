"use strict";
// Regular function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 5);
// Arrow function
const addArrowFunction = (num1, num2) => num1 + num2;
const newUser = {
    name: "John",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
const array = [1, 2, 3];
const newArray = array.map((element) => element * element);
