
// data example [{time: 100, event: "OK"}]
export function logsBinarySearch(logs, startTime, endTime) {
    let left = 0;
    let right = logs.length - 1
    let firstIndex = -1

    while (left <= right) {
        const mid = Math.floor((left + (right - left) / 2))
        if (logs[mid].time >= startTime) {
            firstIndex = mid
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }

    if (firstIndex === -1) return []

    let results = []
    for (let i = firstIndex; i < logs.length; i++) {
        if (logs[i].time > endTime) break;
        results.push(logs[i])
    }

    return results;
}

// data example [0, 1, 2, 3] 
export function binaryNumbersSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const found = arr[mid];

        if (found === target) {
            return found;
        } else if (found < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

// data example [0, 1, 2, 3] 
export function linearNumbersSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return arr[i];
    }
    return null;
}

// to get time results from search functions 
export function benchmark(label, fn) {
    const start = process.hrtime.bigint();
    fn()
    const end = process.hrtime.bigint();
    const timeNs = end - start;
    const timeSec = Number(timeNs) / 1e9;

    console.log(`${label} ->, Time: ${timeSec.toFixed(6)}s`);
}

