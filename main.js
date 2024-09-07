// const trails = document.querySelectorAll('.cursor-trail');

// document.addEventListener('mousemove', (e) => {
//     console.log("mouse moving")
//     trails.forEach((trail, index) => {
//         setTimeout(() => {
//             trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//         }, index * 50); // Delay each trail slightly
//     });
// });

soh = document.getElementById('soh')

document.addEventListener('click', (e) => {
    var target = e.target;
    
    
    
})

// soh.addEventListener('click', (e) => {
//     window.location.href = "index.html"
// })

logoImg = document.getElementsByClassName('logo');
logoImg.addEventListener('click', (e) => {
    console.log(e.target)
})