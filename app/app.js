/*
 * printList takes an array of n elements. We can describe it's running time as
 * a function of the size of the input (n). In this case the function runs in
 * theta of n. In other words, if you remove the constants and lower order terms
 * the function runs in exactly (==) n.
 */
function printList(array) {
  var n = array.length;
  var value;

  for (var i = 0; i < n; i++) {
    value = array[i];
    console.log(value);
  }
}

/*
console.time('T(n)');
printList([1,2,3,4]);
console.timeEnd('T(n)');
*/

What is the difference between Θ(n), Ο(n) and Ω(n)?

/*
 * This function is a little different because the loop can bail out early if it
 * finds a match. So we can't say it runs in exactly n steps. Instead, it will
 * run in at worst n steps. We can express that by saying it runs in Ο(n). In
 * the best case it runs in constant time.
 */
function search(array, value) {
  var n = array.length;
  var current;

  for (var i = 0; i < n; i++) {
    current = array[i];
    if (current == value)
      return current;
  }

  return null;
}

var result = search([1,2,3,4], 1);
console.log(`result: ${result}`);
