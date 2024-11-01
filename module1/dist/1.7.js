"use strict";
{ //////////////////////////////////////////////
    // spread operator
    // for arrays
    const bros1 = ['John', 'Don', 'Ron'];
    const bros2 = ['Jean', 'Daniel', 'Ronney'];
    bros1.push(...bros2);
    // for objects
    const mentors1 = {
        typescript: 'Mezbah',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // rest operator(cousin of spread operator)
    const greenFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greenFriends('Abul', 'Babul', 'Chabul');
} //////////////////////////////////////////////
