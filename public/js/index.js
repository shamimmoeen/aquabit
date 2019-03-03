var animation_website = bodymovin.loadAnimation ({
    container: document.getElementById('animation-website'),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "website-animated-icon.json"
})
var animation_marketing = bodymovin.loadAnimation ({
    container: document.getElementById('animation-marketing'),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "marketing-animated-icon.json"
})
var animation_uxuidesign = bodymovin.loadAnimation ({
    container: document.getElementById('animation-ux_ui'),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "ux_ui-animated-icon.json"
})
var animation_image = bodymovin.loadAnimation ({
    container: document.getElementById('animation-image'),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "image-creatives-icon.json"
})
var animation_branding = bodymovin.loadAnimation ({
    container: document.getElementById('animation-branding'),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "ux_ui-animated-icon.json"
})
var animation_video = bodymovin.loadAnimation ({
    container: document.getElementById('animation-video'),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "videography-icon.json"
})

$(document).ready(function(){
    $('.recent-project-items').slick({
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
})
