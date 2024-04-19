interface Calculator<T, U, V> {
    add: (a: T, b: U) => V;
    subtract: (a: T, b: U) => V;
    multiply: (a: T, b: U) => V;
    divide: (a: T, b: U) => V;
}

// Triển khai generic interface cho kiểu number
const numberCalculator: Calculator<number, number, number> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

let num1: number = 10;
let num2: number = 5;
let num3: number;

// Thực hiện các phép tính và in kết quả
num3 = numberCalculator.add(num1, num2);
console.log("num1 + num2 =", num3);

num3 = numberCalculator.subtract(num1, num2);
console.log("num1 - num2 =", num3);

num3 = numberCalculator.multiply(num1, num2);
console.log("num1 * num2 =", num3);

num3 = numberCalculator.divide(num1, num2);
console.log("num1 / num2 =", num3);

// Thay đổi kiểu dữ liệu của biến num1 thành string và num2 thành boolean
num1 = "10" as any;
num2 = true as any;

// Thực hiện lại các phép tính và in kết quả
num3 = numberCalculator.add(num1, num2); 
// TypeScript sẽ cảnh báo về việc sử dụng kiểu dữ liệu không phù hợp
console.log("num1 + num2 =", num3); 
// In ra NaN vì string + boolean không hợp lệ

// Do num3 không được gán giá trị nên không thực hiện các phép tính khác