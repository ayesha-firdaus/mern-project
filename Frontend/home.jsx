var rob = function (nums) {
    for (let index = nums.length - 3; index >= 0; index--) {
    // if there is any third building from the current building
      if (nums[index + 3] !== undefined) {
      // choose the highest amount theft post beside building
      //Or check which building has the highest amount post the neighbour
        nums[index] += Math.max(nums[index + 2], nums[index + 3]);
      } else {
        nums[index] += nums[index + 2];
      }
    }
    return Math.max(nums[0], nums[1] || 0);
  };
  