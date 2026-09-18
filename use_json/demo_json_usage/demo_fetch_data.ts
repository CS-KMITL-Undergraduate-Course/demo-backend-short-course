const res = await fetch('https://catfact.ninja/fact'); // HTTP Response from api
const data = await res.json(); // Parse data into JavaScript object

console.log(`Raw HTTP Response\n`);
console.log(res);
console.log(`Raw json data\n`);
console.log(data);
console.log(data.fact);
