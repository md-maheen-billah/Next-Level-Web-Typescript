{//////////////////////////////////////////////
// spread operator

// for arrays
const bros1: string[]=['John','Don','Ron']
const bros2: string[]=['Jean','Daniel','Ronney']
bros1.push(...bros2)

// for objects
const mentors1 = {
    typescript: 'Mezbah',
    redux:'Mir',
    dbms:'Mizan'
}
const mentors2 = {
    prisma: 'Firoz',
    next:'Tonmoy',
    cloud:'Nahid'
}
const mentorList = {
    ...mentors1,
    ...mentors2
}

// rest operator(cousin of spread operator)
const greenFriends = (...friends:string[]) =>{
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
}

greenFriends('Abul','Babul','Chabul')
}//////////////////////////////////////////////