"use strict";
{ //////////////////////////////////////////////
    // type assertion
    let anything;
    anything = "Next";
    anything = 222;
    anything;
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const converted = parseFloat(value) * 1000;
            return `The converted value is ${converted}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(20);
    const result2 = kgToGm("20");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
} //////////////////////////////////////////////
