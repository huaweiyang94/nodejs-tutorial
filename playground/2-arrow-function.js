// const square = function (x) {
//     return x * x;
// };

// const square = (x) => {
//     return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() { // method definition syntax
        console.log('Guest list for '+ this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name); // arrow function binds this to its enclosing scope (event)
        });
    }
};

event.printGuestList();