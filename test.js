fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={250e78bf685215e303c1e9d9ca6a8edf}')
.then( response => response.json())
.then( data => console.log(data));

console.log('hello')