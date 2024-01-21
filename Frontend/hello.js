var rob = function(nums) {
    const n = nums.length;

    // Edge case: If there are no houses, return 0
    if (n === 0) {
        return 0;
    }

    // Initialize two arrays to store the maximum amount of money
    // for scenarios where the current house is robbed or skipped
    const dpRobbed = [nums[0]]; // Maximum amount when the current house is robbed
    const dpSkipped = [0];      // Maximum amount when the current house is skipped

    // Iterate through the houses starting from the second one
    for (let i = 1; i < n; i++) {
        // Calculate the maximum amount when the current house is robbed
        dpRobbed[i] = dpSkipped[i - 1] + nums[i];

        // Calculate the maximum amount when the current house is skipped
        dpSkipped[i] = Math.max(dpRobbed[i - 1], dpSkipped[i - 1]);
    }

    // Return the maximum amount considering the last house
    return Math.max(dpRobbed[n - 1], dpSkipped[n - 1]);
};

// Example usage:
const nums = [2, 7, 9, 3, 1];
const result = rob(nums);
console.log(result);