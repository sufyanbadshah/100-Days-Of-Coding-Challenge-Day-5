var transports = ["BMW car", "Kawasaki Bike"];
transports.forEach(function (transport) {
    console.log("I Would like to own a ".concat(transport));
});
var guests = ["Ahmed", "Ali", "Huzaifa"];
guests.forEach(function (guest) {
    console.log("Hey ".concat(guest, ", would you like to join us in the party?"));
});
var unabletoAttend = "Huzaifa";
console.log("".concat(unabletoAttend, ", can't attend the party"));
var newGuest = "Hasnain";
guests[guests.indexOf(unabletoAttend)] = newGuest;
guests.forEach(function (guest) {
    console.log("Hey, ".concat(guest, ", would you like to join us in the party?"));
});
