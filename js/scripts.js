// nav bar transparent at top and filled when scrolled

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});





// typing effect 

typing_effect(['data analyst', 'programmer', 'developer'], ['#fed541']);

  function typing_effect(words, colors) {

  var cursor = document.getElementById('cursor'); //cursor
  var text = document.getElementById('text') //text

  var blink = true;
  var wait = false;
  var letters_count = 1;
  var temp = 1;

  text.style.color = colors[0]
  window.setInterval(function () { //wait between words when it starts writting
    if (letters_count === 0 && wait === false) {
      wait = true;

      text.innerHTML = '' // leave a blank
      window.setTimeout(function () {
        var usedColor = colors.splice(0, 1)[0] //remove first element and get it as str
        colors.push(usedColor);
        var usedWord = words.splice(0, 1)[0]
        words.push(usedWord);
        temp = 1;
        text.style.color = colors[0]
        letters_count += temp;
        wait = false;
      }, 1000)
    } else if (letters_count === words[0].length + 1 && wait === false) {
      wait = true;
      window.setTimeout(function () { //wait a bit until words finished and start deleting
        temp = -1;
        letters_count += temp;
        wait = false;
      }, 5000)
    } else if (wait === false) { //write words                    
      text.innerHTML = words[0].substr(0, letters_count)
      letters_count += temp;
    }
  }, 120)
  window.setInterval(function () {
    if (blink) {
      cursor.style.opacity = "0";
      blink = false;
    } else {
      cursor.style.opacity = "1";
      blink = true;
    }
  }, 400)
}

