
soh = document.getElementById('soh')

document.addEventListener('click', (e) => {
    var target = e.target;
})


logoImg = document.getElementsByClassName('logo');


// PHOTOGRAPHY

const gallery = document.getElementById('photo-gallery');

const images = [ 
    'images/gallery/blueberry-buds.png',
    'images/gallery/butterfly_on_flower.png',
    // 'images/gallery/dandelion.gif',
    'images/gallery/green_dragonfly.png',
    // 'images/gallery/red_dandelion.gif',
    'images/gallery/river.png',
    'images/gallery/SA_bird.png'
]

const metalImgs = [
    'images/metal/shoe_buckle_hebron.jpg',
    'images/metal/etched_silver_cufflink.jpg',
    'images/metal/barrel-tap.jpg',
    'images/metal/crotal_bell.jpg',
    'images/metal/coins/1-pfenning-bernhard_II.jpg',
    'images/metal/coins/real-obv.jpg',
    'images/metal/coins/real-rev.jpg',
]

function toggleModal(e) {
    m = document.getElementsByClassName('gallery-modal')
    console.log(m)
    if (m[0]) {
        m[0].remove();
        gallery.append(e.target);
    }
}

images.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'image';
    img.width = 275;
    gallery.appendChild(img);

    const main = document.getElementsByTagName('main')[0];

    img.addEventListener('click', (e) => {
       
        const modal = document.createElement('div');
        main.appendChild(modal);
        modal.classList.add('gallery-modal');
        modal.appendChild(e.target);
        e.target.classList.add('modal-img');
        modalImg = document.getElementsByClassName('modal-img')[0];

        e.target.addEventListener('click', (e) => {
            toggleModal(e);
        })
    })
})
