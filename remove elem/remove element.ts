function removeElement(nums: number[], val: number): number {
    let currentIdx: number = nums.indexOf(val);
    
    while (currentIdx > -1) {
        nums.splice(currentIdx, 1)
        currentIdx = nums.indexOf(val)        
    }

    return nums.length
};
