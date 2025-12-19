export function generateRandomLogs(count = 100000) {
    const events = ["OK", "LOGIN", "WARN", "ERROR", "CRASH"];
    const logs = [];

    for (let i = 0; i < count; i++) {
        logs.push({
            time: Math.floor(Math.random() * 5000), // random timestamp range
            event: events[Math.floor(Math.random() * events.length)],
        });
    }

    // sort logs by time ascending
    logs.sort((a, b) => a.time - b.time);

    return logs;
}

export function generateRandomNumbers(count = 1000000) {
    let arr = []

    for (let i = 0; i < 10000000; i++) {
        arr.push(Math.floor(Math.random() * 1000000))
    }

    arr.sort((a, b) => a - b)
    return arr
}
