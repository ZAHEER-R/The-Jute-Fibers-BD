
// menu dropdown
let dropdowns = document.querySelectorAll('.dropdown-toggle')
    dropdowns.forEach((dd)=>{
        dd.addEventListener('click', function (e) {
            var el = this.nextElementSibling
            el.style.display = el.style.display==='block'?'none':'block'
        })
    })



// md-speech-slider
$('.md-speech-slider').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots: true,
  autoplay: false,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
  ],
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:2
      }
  }
});

// Company Overview
$('.slider_1').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:1000,
  navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
  ],
  responsive:{
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:1
      },
      992:{
          items:1
      }
  }
});
$('.slider_2').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:1000,
  navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
  ],
  responsive:{
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:1
      },
      992:{
          items:1
      }
  }
});
$('.slider_3').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:1000,
  navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
  ],
  responsive:{
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:1
      },
      992:{
          items:1
      }
  }
});

// tif slider
$('.tif_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:1000,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
  });


  $('.hero-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
});


 // 

//  var videoplayer = document.getElementById("videoplayer");
//  var videoitem = document.getElementById("videoitem");

//  function stopVideo(){
//     videoplayer.style.display = "none";
//  }

//  function playVideo(file){
//     videoitem.src = file;
//     videoplayer.style.display = "block";
//  }

 //


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);


 //

 function ethicscontent() {
  var reveals = document.querySelectorAll(".ethicscontent");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", ethicscontent);


 //

 function openSearch() {
  document.getElementById("navsrc").style.display = "block";
}

function closeSearch() {
  document.getElementById("navsrc").style.display = "none";
}
// ===AOS INIT START
AOS.init();
// ===AOS INIT END