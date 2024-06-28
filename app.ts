// გადავწეროთ მოცემული ფაილი typescript_ზე.


class Rectangle {
  constructor(public width: number, public height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Independent Functions

function addNumbers(a: number, b: number) {
  return a + b;
}

function multiplyNumbers(a: number, b: number) {
  return a * b;
}

function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: []) {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: []) {
  return Math.max(...numbers);
}

function isPalindrome(str: string) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Test Cases

// სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.

const rectangle = new Rectangle(5, 8);
const circle = new Circle(3);

const rectangleArea = rectangle.calculateArea();
const rectanglePerimeter = rectangle.calculatePerimeter();

const circleArea = circle.calculateArea();
const circlePerimeter = circle.calculatePerimeter();

console.log(
  `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
);
console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);

const filteredNumbers: any = [1, 2, 3, 4, 5, 6, 7, 8]

const sumResult = addNumbers(5, 3);
const multiplicationResult = multiplyNumbers(4, 7);
const capitalizedString = capitalizeString("javascript is fun");
const evenNumbers = filterEvenNumbers(filteredNumbers);

console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${multiplicationResult}`);
console.log(`Capitalized String: ${capitalizedString}`);
console.log(`Even Numbers: ${evenNumbers}`);

const findMaximum: any = [23, 56, 12, 89, 43]

const maxNumber = findMax(findMaximum);
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
const factorialResult = calculateFactorial(5);

console.log(`Max Number: ${maxNumber}`);
console.log(`Is Palindrome: ${isPalindromeResult}`);
console.log(`Factorial: ${factorialResult}`);

/* 
  
  2. შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
     კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
     გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
     კლასში უნდა გვქონდეს მეთოდები:
     getAccountInfo
     deposit - თანხის დამატება ანგარიშზე.
     withdraw - თანხის მოკლება ანგარიშიდან.
     transferFunds - გადარიცხვა სხვა BankAccount_ზე
     getTransactionHistory - აბრუნებს transactionHistory_ მასივს
     recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ
  
     შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
     გავაკეთოთ სხვადასხვა ოპერაციები.
     დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.
  
  */

class BankAccount {
  private transactionHistory: string[] = [];

  constructor(private accountNumber: string, private balance: number) {}

  getAccountInfo(): string {
    return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.recordTransaction(`Deposited ${amount}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
    this.recordTransaction(`Withdrew ${amount}`);
  }

  transferFunds(amount: number, targetAccount: BankAccount): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.withdraw(amount);
    targetAccount.deposit(amount);
    this.recordTransaction(
      `Transferred ${amount} to ${targetAccount.getAccountInfo()}`
    );
  }

  getTransactionHistory(): string[] {
    return this.transactionHistory;
  }

  private recordTransaction(message: string): void {
    const timestamp = new Date().toISOString();
    this.transactionHistory.push(`[${timestamp}] ${message}`);
  }
}

const account1 = new BankAccount("1234567890", 1000);
const account2 = new BankAccount("0987654321", 500);

// ოპერაციების შესრულება
account1.deposit(200);
account1.withdraw(150);
account1.transferFunds(100, account2);

console.log(account1.getAccountInfo());
console.log(account2.getAccountInfo());

console.log("ანგარიში 1-ის ტრანზაქციების ისტორია:");
console.log(account1.getTransactionHistory());

console.log("ანგარიში 2-ის ტრანზაქციების ისტორია:");
console.log(account2.getTransactionHistory());
