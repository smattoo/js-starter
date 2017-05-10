import numeral from 'numeral';

const courseFee = numeral(100000).format('$0,0.00');

debugger;
console.log(`I would pay ${courseFee} for this course. `);
