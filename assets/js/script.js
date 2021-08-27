const navmenu = document.getElementById("nav_menu"),
      navtoggle = document.getElementById("nav_toggle"),
      navclose = document.getElementById("nav_close")


      if(navtoggle){
          navtoggle.addEventListener('click',() => {
              navmenu.classList.add('show_menu')
          })
      }

      if(navclose){
        navclose.addEventListener('click',() => {
            navmenu.classList.remove('show_menu')
        })
    }


    function scrollheader(){
        const header = document.getElementById('header');
        if(this.scrollY >= 100)header.classList.add('scroll_header');else header.classList.remove('scroll_header');
    }
    window.addEventListener('scroll',scrollheader);


    let swiper = new Swiper(".descover_container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
            rotate: 0,
        },
    })



    // 
    const videofile = document.getElementById("video_file"),
          videobutton= document.getElementById("video_button"),
          videoicon = document.getElementById("video_icon")


    function playpause(){
        if(videofile.paused){
            videofile.play()
            videoicon.classList.add("ri-pause-line")
            videoicon.classList.remove("ri-play-line")

        }else{
            videofile.pause()
            videoicon.classList.add("ri-play-line")
            videoicon.classList.remove("ri-pause-line")

        }
    }

    videobutton.addEventListener('click',playpause)

    function finalvideo(){

        videoicon.classList.add("ri-play-line")
        videoicon.classList.remove("ri-pause-line")

        }

        videofile.addEventListener("ended",finalvideo)



        function scrollUp(){
            const scrollUp = document.getElementById('scroll_up');
            // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if(this.scrollY >= 200) scrollUp.classList.add('show_scroll'); else scrollUp.classList.remove('show_scroll')
        }
        window.addEventListener('scroll', scrollUp)
        


        const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// 


const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
