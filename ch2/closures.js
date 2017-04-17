var counter = 0;
function foo() {
    console.log("Counter now is: " + ++counter);
};
foo();
foo();
foo();
console.log("Manually increment counter: " + ++counter);
foo();
console.log("Finish counting with: " + counter);