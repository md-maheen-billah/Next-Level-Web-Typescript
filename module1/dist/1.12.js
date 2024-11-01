"use strict";
{ /////////////////////////////////////////////
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('Nothing to Search');
        }
    };
    // unknown types
    searchName(null);
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
            console.log(convertedSpeed);
        }
        else {
            console.log('Wrong Input');
        }
    };
    // never types
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('mushkil se error hogaya');
    getSpeedInMeterPerSecond(null);
} //////////////////////////////////////////////
