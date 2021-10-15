import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function myFunc(message, favNum) {
  message = message + " Michael";
  console.log(message, favNum);
}

myFunc("Good Morning", 100);

function triplePlus(value) {
  let newValue = value + 100;
  return newValue;
}
console.log(triplePlus(100));

// Return values function

function favNum(Mynum) {
  let newNum = Mynum + 100;
  return newNum;
}

let result = favNum(100);
console.log(result);
