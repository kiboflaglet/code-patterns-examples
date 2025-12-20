// Sliding window
console.log("Sliding window")
// Task 1
// Given a string, find the length of the longest substring without repeating characters.
function slidingWindowTask1(target) {
  
    let left = 0;
    let maxLen = 0
    const set = new Set()

    for (let right = 1; right < target.length; right++) {

        while (set.has(target[right])) {
            set.delete(target[right])
            left++
        }

        set.add(target[right])

        maxLen = Math.max(maxLen, right - left + 1)
    }

    console.log("result: ", maxLen)
}

slidingWindowTask1("salamm")

