// two pointers

// Task 1
// Given a sorted array of integers, return true if there exist two numbers whose sum equals a target value.
function twoPointerTask1(nums, target) {
    console.log("Task 1")
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            console.log("Result: sum found ", sum, "indices", left, right)
            return
        }
        if (sum < target) left++
        else right--
    }
    console.log("Result: sum not found", target)
}

twoPointerTask1([1, 2, 3, 4, 5, 6], 9)

// Task 2
// Given a string, determine if it is a palindrome after removing non - alphanumeric characters and ignoring case.
function twoPointerTask2(target) {
    console.log("Task 2")
    let left = 0;
    let right = target.length - 1

    while (left < right) {

        if (target[left] !== target[right]) {
            console.log("result", "it is not a palindrome", target)
            return;
        }

        left++
        right--
    }
    console.log("result", "it is a palindrome", target)

}

twoPointerTask2("abccba")

// Task 3
// Given a sorted array, remove duplicates in-place and return the new length.
function twoPointerTask3(nums) {
    if (nums.length === 0) {
        console.log("result: ", 0)
        return
    }

    let write = 1;

    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[read - 1]) {
            nums[write] = nums[read]
            write++
        }
    }

    console.log("result: ", write, nums)
}

twoPointerTask3([1, 2, 3, 4, 4, 6])

