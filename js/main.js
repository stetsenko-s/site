function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth',
    })
}

// let homeScroll = document.querySelector('.home-scroll')
// let aboutScroll = document.querySelector('.about-scroll')
// let skillsScroll = document.querySelector('.skills-scroll')
// let portfolioScroll = document.querySelector('.portfolio-scroll')
// let contactsScroll = document.querySelector('.contacts-scroll')

// let home = document.querySelector('.header')
// let about = document.querySelector('.about-me')
// let skills = document.querySelector('.skills')
// let portfolio = document.querySelector('.portfolio')
// let contacts = document.querySelector('.contacts')

// console.log(home.offsetTop);
// console.log(about.offsetTop);
// console.log(skills.offsetTop);
// console.log(portfolio.offsetTop);
// console.log(contacts.offsetTop);

// aboutScroll.addEventListener('click', () => {
//     scrollTo(about)
// })
// skillsScroll.addEventListener('click', () => {
//     scrollTo(skills)
// })
// portfolioScroll.addEventListener('click', () => {
//     scrollTo(portfolio)
// })
// contactsScroll.addEventListener('click', () => {
//     scrollTo(contacts)
// })

// let header = document.querySelector('.header__nav')

// let click = document.addEventListener('click', () => {
//     console.log('click');
// })

// if (click === header) {
//     console.log('header');
// }
