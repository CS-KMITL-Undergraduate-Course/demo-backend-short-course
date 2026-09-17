const res = await fetch('http://localhost:8787');
const text = await res.text();
console.log(`Text from backend: ${text}`);
