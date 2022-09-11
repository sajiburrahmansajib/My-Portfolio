console.log('first');
console.log('second');
let seconds = 0;
function setInterval(() => {
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(intervalId);
    }
}, 500)
console.log('fourth');
console.log('fifth');