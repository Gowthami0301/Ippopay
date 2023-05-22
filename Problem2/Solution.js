// You are given an integer array nums of 2 * n integers.
// You need to partition nums into two arrays of length n to
// minimize the absolute difference of the sums of the
// arrays. To partition nums, put each element of nums into
// one of the two arrays.
// Return the minimum possible absolute difference.


function minimumAbsoluteDifference(nums) {
  const n = nums.length / 2;
  const sum = nums.reduce((a, b) => a + b, 0);
  
  // Recursive helper function
  function helper(index, currSum, count) {
    if (index === nums.length) {
      if (count === n) {
        return Math.abs((sum - currSum) - currSum);
      }
      return Number.MAX_SAFE_INTEGER;
    }

    const diff1 = helper(index + 1, currSum + nums[index], count + 1);
    const diff2 = helper(index + 1, currSum, count);

    return Math.min(diff1, diff2);
  }

  return helper(0, 0, 0);
}

// Testing the function with the given examples
console.log(minimumAbsoluteDifference([3, 9, 7, 3])); // Output: 2
console.log(minimumAbsoluteDifference([-36, 36])); // Output: 72
console.log(minimumAbsoluteDifference([2, -1, 0, 4, -2, -9])); // Output: 0

