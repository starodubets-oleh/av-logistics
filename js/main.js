
    document.getElementById('map').addEventListener("click", function(){
        document.getElementById("map_box").innerHTML = `<iframe class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.961765979402!2d35.02006361585791!3d48.418878339505184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe35556e48d95%3A0xe57568a73abfd068!2z0JfQsNC_0L7RgNGW0LfRjNC60LUg0YjQvtGB0LUsIDI2LCDQlNC90ZbQv9GA0L7MgSwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1594647666276!5m2!1suk!2sua"
        frameborder="0" style="border:0" allowfullscreen></iframe>`
    })

    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages = document.querySelectorAll("img.lazy");    
        var lazyloadThrottleTimeout;
        
        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }    
          
          lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                  }
              });
              if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
              }
          }, 20);
        }
        
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
      });