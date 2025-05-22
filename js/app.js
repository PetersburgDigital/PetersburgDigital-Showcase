document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        speed: 8,
        
        // loopedSlides:2,
        autoplay: {
            delay: 0,
            loop: true,
            // loopedSlides: 6,
        },
        direction : 'horizontal',
        mousewheel : true,
        slidesPerView : 2,
        slidesOffsetBefore : -215,
    })
})

document.querySelectorAll('.slider2').forEach((n, i) => {
    window[`slider2${i+1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        speed: 10,
        loop: true,
        // loopedSlides:2,
        autoplay: {
            delay: 800,
        },
        direction : 'horizontal',
        mousewheel : true,
        slidesPerView : 2,
        slidesOffsetBefore : -215,
    })
})

// bindSwipers(slider1, slider2, slider3, slider4)


const listElements = document.querySelectorAll('.block__element')
const blockImg = document.querySelector('.block__img')
const hero = document.querySelector('.hero')

listElements.forEach((click) => {
   hero.addEventListener('mouseover', () => {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      sleep(3000).then(() => { 
        listElements[0].classList.remove('child--active')
        listElements[1].classList.add('child--active')
        blockImg.style.backgroundImage = 'url(../img/kuchenland.png)'
     });
     sleep(7000).then(() => { 
        listElements[1].classList.remove('child--active')
        listElements[2].classList.add('child--active')
        blockImg.style.backgroundImage = 'url(../img/ralph-lauren.png)'
     });
     sleep(11000).then(() => { 
        listElements[2].classList.remove('child--active')
        listElements[3].classList.add('child--active')
        blockImg.style.backgroundImage = 'url(../img/easyDrive.png)'
     });
     sleep(15000).then(() => { 
        listElements[3].classList.remove('child--active')
        listElements[4].classList.add('child--active')
        blockImg.style.backgroundImage = 'url(../img/movie-night.png)'
     });
   })


    click.addEventListener('mouseover', () => {
        if (click === listElements[0]) {
            blockImg.style.backgroundImage = 'url(../img/real-estate.jpeg)'
        }
        else if (click === listElements[1]) {
            blockImg.style.backgroundImage = 'url(../img/kuchenland.png)'
        }
        else if (click === listElements[2]) {
            blockImg.style.backgroundImage = 'url(../img/ralph-lauren.png)'
        }
        else if (click === listElements[3]) {
            blockImg.style.backgroundImage = 'url(../img/easyDrive.png)'
        }
        else if (click === listElements[4]) {
            blockImg.style.backgroundImage = 'url(../img/movie-night.png)'
        }

        listElements.forEach((remove) => {
            remove.classList.remove('child--active')
        })
        click.classList.add('child--active')
        
    })
})

