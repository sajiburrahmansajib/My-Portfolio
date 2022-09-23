// const menuHandler = () => {
//     const naMenu = document.getElementById('navMenu');
//     console.log(naMenu)
//     naMenu.style.display = 'flex'
// }
let count = 0;
document.getElementById('iconMenu').addEventListener('click', function () {
    count = count + 1;
    console.log('click')
    const naMenu = document.getElementById('navMenu');
    if (count % 2 === 0) {
        naMenu.style.display = 'none'
    }
    else {
        naMenu.style.display = 'flex'
    }
    console.log(count)
})