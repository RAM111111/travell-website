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