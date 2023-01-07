/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
var twoSum = function (nums, target) {
    let result = [];
    let j;
    for (let i = 0; i < nums.length; i++) {
        for (j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                result = [i, j];
            }
        }
    }
    return result;
};