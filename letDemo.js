//let has scope work inside block of code

let x=10;

console.log("Let Demo");
console.log("X Value Outside-->"+x);

if(true)
{
    let x=30;
    console.log("X Value inside if-->"+x);
}
console.log("After reinitialize-->"+x);