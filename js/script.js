let items = document.querySelectorAll('.contact-info-item')
let icons = document.querySelectorAll('.contact-info-item .icon')
let overlay = document.querySelector('.overlay')
let colors = document.querySelectorAll('[--color]')
let styletoggler = document.querySelector('.style-switcher-toggler')
let darktoggler = document.querySelector('.day-night')

for(let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', () => {
        items[i].classList.toggle('active')
    })
}

for(let i = 0; i < colors.length; i++) {
    let select = colors[i].getAttribute('--color')
    colors[i].style.setProperty("background-color", select)
    colors[i].addEventListener('click', () => {
        document.documentElement.style.setProperty("--skin-color", select)
        localStorage.setItem('selected-color', select)
    })
}

darktoggler.addEventListener('click', () => {
    darktoggler.querySelector("i").classList.toggle('fa-sun')
    darktoggler.querySelector("i").classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')) localStorage.setItem('dark-mode', true)
    else localStorage.setItem('dark-mode', false)
})

styletoggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open')
})

overlay.addEventListener('click', () => {
    items.forEach(item => item.classList.remove('active'))
})

if(!localStorage.getItem('selected-color')) localStorage.setItem('selected-color', "#ec1839")
if(!localStorage.getItem('dark-mode')) localStorage.setItem('dark-mode', false)

if(localStorage.getItem('dark-mode') === "true"){
    darktoggler.querySelector("i").classList.add('fa-sun')
    darktoggler.querySelector("i").classList.remove('fa-moon')
    document.body.classList.add('dark')
}

let selected_color = localStorage.getItem('selected-color')
document.documentElement.style.setProperty("--skin-color", selected_color)

window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')) 
        document.querySelector('.style-switcher').classList.remove('open')
})

/*                  Typing Animation                       */

let typing = new Typed(".typing", {
    strings: ["" ,"Web Designer", "Web Developer", "Graphic Designer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    shuffle: false,
    smartBackspace: false,
    showCursor: false
})

// Aside Script

const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li');

for(const navLi of navList) {
    const a = navLi.querySelector('a')
    a.addEventListener('click', function(){
        
        for(const navLi of navList) {                                           // Looping to remove active and add back class
            const a = navLi.querySelector('a')
            const target = a.getAttribute('href')
            a.classList.remove('active')                                                // Removing active class from li a
            if(document.querySelector(target).classList.contains('active')){            // Condition to check old active class in section
                document.querySelector(target).classList.add('back')
                document.querySelector(target).classList.remove('active')
            }
            else document.querySelector(target).classList.remove('back')
        }

        this.classList.add('active')                                            //Adding active class to li a
        document.querySelector(this.getAttribute('href')).classList.add('active')
        if(window.innerWidth < 1200) asideButtonToggle()
    })
}

// Aside NAV Toggler 

const toggler = document.querySelector('.nav-toggler'),
aside = document.querySelector('.aside'),
sections = [...document.querySelectorAll('.section')];

toggler.addEventListener('click', asideButtonToggle)

function asideButtonToggle() {
    aside.classList.toggle('open')
    sections.forEach((section) => section.classList.toggle('open'))
}


const hire_mes = document.querySelectorAll('.hire-me'),
contact_li = document.querySelector(`a[href="#contact"]`)
hire_mes.forEach((hire_me) => hire_me.addEventListener('click', () => contact_li.click()))

// Setting active class in sections

const hash = window.location.hash || "#home"
const target = sections.find((section) => section.id == hash.split('#')[1])
if(target) {
    target.classList.add('active')
    document.querySelector(`a[href="#${target.id}"]`).classList.add('active')
}
else {
    sections[0].classList.add('active')
    document.querySelector(`a[href="#${sections[0].id}"]`).classList.add('active')
}