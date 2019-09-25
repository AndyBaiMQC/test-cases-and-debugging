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
    "radar", "", "a", "javascript", "aa"

]

let outputs = [
    true, false, true, false, true
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    if (str.length == 0) return false
    else if (str.length == 1) return true
    else {
        let first = str.slice(0, (str.length) / 2)
        let second = str.slice((str.length + 1) / 2, str.length)
        let i = 0
        let j = first.length
        while (i !== j) {
            if (first[i] == second[j]) {
                i++
                j++
            } else return false
        }
        return true
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