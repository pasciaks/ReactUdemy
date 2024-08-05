"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
    return +num1 + +num2;
}
const numResults = [];
const otherNumberResults = Array();
const textResults = [];
function printResult(resultObject) {
    resultObject.timestamp = new Date();
    console.log("Result:");
    console.log(resultObject.val);
}
buttonElement.addEventListener("click", function () {
    //console.log(add(num1Element.value, num2Element.value));
    //console.log(add(+num1Element.value, +num2Element.value));
    const result = add(+num1Element.value, +num2Element.value);
    const stringResult = add(num1Element.value, num2Element.value);
    numResults.push(result);
    textResults.push(stringResult);
    console.log(numResults, textResults);
    printResult({ val: result, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(" "));
});
