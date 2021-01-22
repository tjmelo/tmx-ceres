// Gived list..
// Multiply every item to 3..
// split the number list which divisble from 2..
// Split for 2 and add to firt item of the list..
// Show results..

const lista = [9, 14, 7, 3, 4.5];

let resItem = lista.map(m => m * 3)
let filterItem = resItem.filter(f => (f % 2) == 0);
let final = filterItem.map(r => r / 2 + lista[0] )

// Result..
console.log(final);