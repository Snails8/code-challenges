function removeDuplicates(nums: number[]): number {
    if (nums.length === 1) return 1;

    let p2 = 0
    let p1 = 0
    while (p2 < nums.length) {
        if (nums[p1] < nums[p2]) {
            nums[p1+1] = nums[p2]
            p1++
        }
        p2++
    }
    return p1 + 1
};
