const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============================================*/
let mixerPortfolio=mixitup('.work_container', {
    selectors: {
        target:'.work_card'
    },
    animation: {
        duration:300
    }
});

const linkWork=document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(i=>i.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(i=>i.addEventListener('click', activeWork))

/*=============================================*/
const section=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset

    section.forEach(current=>{
        const sectionHeight=current.offsetHeight,
              sectionTop=current.offsetTop-58,
              sectionId=current.getAttribute('id')

        if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============================================*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============================================*/
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
    reset: true,
})

sr.reveal('.home_data')
sr.reveal('.home_handle', {delay:700})
sr.reveal('.home_social, .home_scroll', {delay:900, origin: 'bottom'})