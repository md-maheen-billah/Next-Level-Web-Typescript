"use strict";
var _a, _b;
{ //////////////////////////////////////////////
    const age = 18;
    if (age >= 18) {
        console.log('Adult');
    }
    else {
        console.log('Not Adult');
    }
    // ternary operator
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log({ isAdult });
    // { isAdult: 'Adult' }
    // nullish coalescing operator
    // used when decision making is done based on null/undefined
    const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 });
    const user = {
        name: "Maheen",
        address: {
            city: 'Dhaka',
            road: 'Mollabari',
            presentAddress: '169/13/4',
            // permanentAddress: '169/13/4'
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No Permanent Address';
    console.log({ permanentAddress });
} //////////////////////////////////////////////
