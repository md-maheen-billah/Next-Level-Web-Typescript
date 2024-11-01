"use strict";
{ //////////////////////////////////////////////
    function add(num1, num2) {
        return num1 + num2;
    }
    const addArrow = (num1, num2) => num1 + num2;
    // object er moddhe kono function thakle shetake method bole
    // object --> function -->method
    const poorUser = {
        name: 'Mezba',
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
    const poorUser2 = {
        name: 'Mezba',
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((element) => element * element);
} //////////////////////////////////////////////
