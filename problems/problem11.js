let eq = (lhs, rhs) => {
    if (Array.isArray(lhs)) {
        for (let i = 0; i < lhs.length; i++) {
            if (lhs[i] !== rhs[i]) return false
        }
        return true
    }
    return lhs === rhs
}
let verifyEquals = (lhs, rhs) => {
        if (!eq(lhs, rhs)) throw new Error("The expected output doesn't match the actual output")
    }
    // we need 5 test cases. 
let inputs = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]

]

let outputs = [
    6, 6, 6, 6, 6

]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, 
return zero.
*/
function f(arr) {
    if (arr.length == 0) return 0
    else {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == 'number') {
                sum += arr[i]
            }
        }
        return sum
    }

}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename)