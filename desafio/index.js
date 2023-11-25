function sumMultiplesOf3and5(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      // Check if the number is divisible by 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  // Example usage
  const result = sumMultiplesOf3and5(10);
  console.log(result); // Should print 23, as 3 + 5 + 6 + 9 are the numbers less than 10 and divisible by 3 or 5.
  
  const result1 = sumMultiplesOf3and5(11);
  console.log(result1);// Should print 33, as 3 + 5 + 6 + 9 + 10 are the numbers less than 11 and divisible by 3 or 5.


