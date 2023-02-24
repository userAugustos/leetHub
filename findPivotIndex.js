/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((partialSum, a) => partialSum + a, 0) //partialSum is initialized to the initial value passed as the second argument to the reduce method, in this case, 0.
    let leftSum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(sum - leftSum - nums[i] === leftSum) {
            return i // returns only the index
        }
        leftSum += nums[i] // increase the leftSum, since it's not equal the right sum
    }
    return -1
};
