function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === target) return i;

        if (nums[i] > target) return i;

        if (nums[i] < target && i + 1 === nums.length ) return i + 1
    }
};
