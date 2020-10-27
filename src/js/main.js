import LazyLoad from 'vanilla-lazyload'
import Splitting from 'splitting'
import anime from 'animejs'

const animateIntro = () => {
    anime.timeline({
        easing: 'easeOutExpo'
    })
    .add({
        targets: '.animate-in .char',
        easing: 'easeOutExpo',
        duration: 1200,
        translateY: ['120%', "10%"],
        delay: anime.stagger(50, {
            start: 100
        })
    })
    .add({
        targets: '.homeHeader img',
        easing: 'easeOutExpo',
        duration: 8000,
        scale: ['1.2', "1"]
    }, 0)
}

window.addEventListener("load", () => {
    new LazyLoad({ })
    Splitting()
    animateIntro()
})
