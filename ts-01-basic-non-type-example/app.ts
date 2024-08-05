const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

type NumOrString = number | string;

interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  }
  return +num1 + +num2;
}

const numResults: number[] = [];

const otherNumberResults = Array<number>();

const textResults: string[] = [];

function printResult(resultObject: ResultObj) {
  resultObject.timestamp = new Date();
  console.log("Result:");
  console.log(resultObject.val);
}

buttonElement.addEventListener("click", function () {
  //console.log(add(num1Element.value, num2Element.value));
  //console.log(add(+num1Element.value, +num2Element.value));
  const result = add(+num1Element.value, +num2Element.value);
  const stringResult = add(num1Element.value, num2Element.value);
  numResults.push(result as number);
  textResults.push(stringResult as string);
  console.log(numResults, textResults);

  printResult({ val: result as number, timestamp: new Date() });
});

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It worked!");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split(" "));
});
