import { generateRandomLogs, generateRandomNumbers } from "./dataGenerationUtils.js"
import { benchmark, binaryNumbersSearch, logsBinarySearch, linearNumbersSearch } from "./searchUtils.js"

const numArr = generateRandomNumbers()
const rand_index = Math.floor(Math.random() * numArr.length)
const random_num = numArr[rand_index]

const logs = generateRandomLogs() 

benchmark("Linear search", () => { return linearNumbersSearch(numArr, random_num) })
benchmark("Binary search", () => { return binaryNumbersSearch(numArr, random_num) })
benchmark("Logs binary search", () => { return logsBinarySearch(logs, 120, 500) })
