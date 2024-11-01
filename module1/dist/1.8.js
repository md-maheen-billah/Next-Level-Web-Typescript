"use strict";
{ //////////////////////////////////////////////
    // destructuring
    // object
    const user = {
        id: 345,
        name: {
            firstname: 'Mezbaule',
            middleName: 'Abedin',
            lastName: 'Persian'
        },
        contactNo: '01700000000',
        address: 'Uganda'
    };
    const { contactNo, name: { middleName: midName } } = user; // here midName is a name alias for middleName. Can't use type while destructuring object here
    // array
    const myFriends = ['John', 'Don', 'Ron', 'Gon', 'Son'];
    const [, , bestFriend, ...rest] = myFriends; //here putting Ron in bestFriend and the rest after Ron inside an array rest
} //////////////////////////////////////////////
