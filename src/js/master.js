// ---------------------menu-----------------------
let menu = document.getElementById('menu')
let openMenu = false
menu.style.height = '0px'
menu.style.padding = '0px'
menu.style.overflow = 'hidden'
menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', () => {
    if (openMenu == false) {
        menuBtn.innerText = 'close'
        menu.style.height = '90vh'
        menu.style.padding = '40px'
        menuBtn.style.transform = 'rotate(180deg)'
        menu.style.transition = '.5s'
        openMenu = true
    } else {
        menuBtn.innerText = 'dehaze'
        menu.style.height = '0px'
        menu.style.padding = '0px'
        menu.style.overflow = 'hidden'
        menuBtn.style.transform = 'rotate(0deg)'
        openMenu = false
    }
})

let fullHeight = window.innerHeight
let jam = document.querySelectorAll('#jam>figure')

window.addEventListener('scroll', () => {
    const scrollT = window.scrollY

    // -------------------slide 1 parallax--------------------
    jam.forEach((val, i) => {
        if (scrollT <= fullHeight) {
            jam[0].style.transform = 'translateX(50px) translateY(-100px) scale(0.9) rotate(30deg)'
            jam[1].style.transform = 'translateX(90px) translateY(-100px) scale(1.08) rotate(-30deg)'
            jam[2].style.transform = 'translateX(120px) translateY(-100px) scale(0.8) rotate(20deg)'
            val.style.transition = '1s ease-in-out'
        } else {
            jam[0].style.transform = 'translateX(0px) translateY(0px) scale(1) rotate(0deg)'
            jam[1].style.transform = 'translateX(0px) translateY(0px) scale(1) rotate(0deg)'
            jam[2].style.transform = 'translateX(0px) translateY(0px) scale(1) rotate(0deg)'
        }
    })

    // -------------------slide 2 parallax--------------------
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const arrow = document.getElementById('arrow')
    const moveX = scrollY * 0.1
    const moveY = scrollY * 0.15
    line1.style.transform = `translateX(${moveX}px)`
    line2.style.transform = `translateX(${-moveX}px)`
    arrow.style.height = moveY + 'px'

    // -------------------slide 4 parallax--------------------
    let page1 = document.getElementById('page1')
    let page2 = document.getElementById('page2')
    let page3 = document.getElementById('page3')
    let slide4 = document.getElementById('slide4')
    let sc = document.getElementById('sc')
    let jam1 = document.getElementById('jam1')
    let content4 = document.getElementById('slide4Content')

    window.addEventListener('scroll', () => {
        let fullHeight = window.innerHeight
        let scrollT = window.scrollY
        let slide4Top = slide4.offsetTop
        let slide4Height = slide4.offsetHeight
        let Scroll4 = scrollT - slide4Top

        if (scrollT >= slide4Top && scrollT < slide4Top + slide4Height - fullHeight) {
            content4.style.position = 'fixed'
            content4.style.top = '0'
        } else {
            content4.style.position = 'absolute'
            if (scrollT < slide4Top) {
                content4.style.top = '0'
            } else {
                content4.style.top = `${slide4Height - fullHeight}px`
            }
        }

        if (Scroll4 >= 0 && Scroll4 < fullHeight * 3) {
            content4.style.zIndex = '5'
            page1.style.opacity = 1
            page1.style.transition = '0.5s'
            page1.style.zIndex = '10'
            page1.style.transform = "translateY(0)"
            jam1.style.opacity = "1"
            sc.style.transform = 'rotate(-12deg)'
            sc.style.transition = '1s'

            if (Scroll4 >= fullHeight && Scroll4 < fullHeight * 2) {
                const progress2 = (Scroll4 - fullHeight) / fullHeight
                jam1.style.opacity = `${1 - progress2}`
                page2.style.opacity = progress2
                page2.style.transform = `translateY(${(1 - progress2) * 200}px)`
                page2.style.transition = '0.5s'
            } else {
                page2.style.opacity = 0
            }

            if (Scroll4 >= fullHeight * 2) {
                const progress3 = (Scroll4 - fullHeight * 2) / fullHeight
                if (progress3 < 0.5) {
                    page2.style.opacity = 1
                    page3.style.opacity = 0
                    page3.style.transform = 'translateY(200px)'
                } else {
                    page2.style.opacity = `${1 - progress3}`
                    page3.style.opacity = progress3
                    page3.style.transform = `translateY(${(1 - progress3) * 200}px)`
                    page3.style.transition = '0.5s'
                }
                jam1.style.opacity = 0
            } else {
                page3.style.opacity = 0
            }
        } else {
            page1.style.opacity = 0
            page2.style.opacity = 0
            page3.style.opacity = 0
            content4.style.zIndex = '-100'
        }
    })

    // -------------------slide 6 parallax--------------------
    let p = document.querySelectorAll('#slide6>p')
    const slide6 = document.getElementById('slide6')
    const fig = document.querySelector('#slide6>figure')
    const slide6Top = slide6.offsetTop
    const Scroll6 = scrollT - slide6Top

    if (Scroll6 >= 0 && Scroll6 < fullHeight) {
        p.forEach((val, i) => {
            val.style.transition = '0.2s'
            p[0].style.transform = 'rotate(-12deg)'
            p[0].style.opacity = '1'
            p[1].style.transform = 'rotate(12deg)'
            p[1].style.opacity = '1'
            p[1].style.transitionDelay = '0.5s'
            p[2].style.transform = 'rotate(-12deg)'
            p[2].style.opacity = '1'
            p[2].style.transitionDelay = '0.8s'
        })
        fig.style.transition = '1s'
        fig.style.transitionDelay = '1.1s'
        fig.style.bottom = '30%'
        fig.style.opacity = '1'
    }
    // -------------------slide 7 parallax--------------------
    let slide7 = document.getElementById('slide7')
    let div1 = document.querySelector('#slide7>div')
    let fig1 = document.querySelector('#slide7>figure')
    const slide7Top = slide7.offsetTop
    const Scroll7 = scrollT - slide7Top
    if (Scroll7 >= 0 && Scroll7 < fullHeight) {
        fig1.style.transition = '0.5s'
        fig1.style.height = 'fit-content'
        div1.style.transitionDelay = '0.4s'
        div1.style.transition = '0.5s'
        div1.style.opacity = '1'
    }
})