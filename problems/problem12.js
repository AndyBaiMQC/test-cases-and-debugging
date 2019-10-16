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
    [
        [0, 1, 2, 3],
        [1, 3, 4, 5]
    ],
    [
        [1, 2, 3],
        [3, 2, 1]
    ],
    [2, 3],
    [],
    [
        [0, 3, 1, 9],
        [10, 2, 0, 9]
    ]
]

let outputs = [
    [0, 2, 4, 5],
    [],
    undefined,
    undefined, [3, 1, 10, 2]
]

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
*/
function f(input) {
    if (input.length == 0 || (Array.isArray(input[0]) == false || Array.isArray(input[1]) == false)) return undefined
    else {
        let a = input[0].sort()
        let b = input[1].sort()
        let result = []
        let i = 0
        let j = 0
        while (i < a.length && j < b.length) {
            if (a[i] == b[j]) {
                i++
                j++
            } else {
                if (a[i] < b[j]) {
                    result.push(a[i])
                    j++
                } else if (a[i] > b[j]) {
                    result.push(b[j])
                    i++
                }
            }
        }
        while (i < a.length && j < b.length) {
            result.push(a[i])
            result.push(b[j])
            i++
            j++
        }
        return result
    }
}


function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    let expected = outputs[i]
    let actual = f(inputs[i])
    verifyEquals(expected, actual)
}

runTest(0)
runTest(1)
runTest(2)
runTest(3)
runTest(4)

console.log("All tests passed for " + __filename)