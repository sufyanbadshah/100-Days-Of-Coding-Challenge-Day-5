let transports : string[] = ["BMW car", "Kawasaki Bike"]
transports.forEach(transport => {

   console.log(`I Would like to own a ${transport}`)

});

let guests : string[] = ["Ahmed", "Ali" , "Huzaifa"]
guests.forEach(guest => {
    console.log(`Hey ${guest}, would you like to join us in the party?`)
});

let unabletoAttend = "Huzaifa"
console.log (`${unabletoAttend}, can't attend the party`)

let newGuest = "Hasnain"
guests[guests.indexOf(unabletoAttend)] = newGuest

guests.forEach(guest => {
    console.log (`Hey, ${guest}, would you like to join us in the party?`)
    
});

