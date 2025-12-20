// **Task 1**
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
const Task1 = (nums, target) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (map.has(needed)) {
            const found = [map.get(needed), i]
            console.log("result: ", found)
            return
        }

        map.set(nums[i], i)
    }

    return []
}

Task1([1, 3, 5, 3], 8)