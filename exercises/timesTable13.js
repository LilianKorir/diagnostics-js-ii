/**
 * Prints out the first n multiples of 13.
 *
 * The output should look like:
 *
 *   13 times 1 is 13
 *   13 times 2 is 26
 *   13 times 3 is 39
 *   13 times 4 is 52
 */
console.log('eeee');
 function timesTable13(n) {


for (num = 1; num <= n; num += 1){

//console.log( 13 * num)
console.log('13 times' + ' ', + num ,'is', + num * 13)

  }

 }


  // This is your job. :)

  // Use console.log to print out statements like "13 times 5 is 65"
//}

if (require.main === module) {
  let input;

  input = 3;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  //console.log('13 times' + ' ', + num ,'is', + 13 * num );

  console.log();


  input = 5;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  //console.log('13 times', input, 'is', timesTable13(input));
  console.log();

  input = 8;
  console.log('The first', input, 'multiples of 13 are:');
  timesTable13(input);
}
