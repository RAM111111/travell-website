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