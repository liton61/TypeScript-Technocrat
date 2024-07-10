// Regular function
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(5, 5);

// Arrow function
const addArrowFunction = (num1: number, num2: number) => num1 + num2;

const newUser = {
  name: "John",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const array: number[] = [1, 2, 3];
const newArray: number[] = array.map(
  (element: number): number => element * element
);
