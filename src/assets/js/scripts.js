//javascript funtions
function scrollBar() {
    window.addEventListener('scroll', function() {
        const topScrollbarElement = document.getElementsByClassName('top-scroll-bar')[0];

        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        topScrollbarElement.style.width = scrollPercent +'%';

        // sticky header on scroll
        stickMenu();
  
        //back-to-top event
        backToTop();
    })
}

function stickMenu() {
  const headerElement = document.getElementsByClassName('stick')[0];
  if(window.scrollY > 83) {
    headerElement?.classList.add('fixed-header-position');
  } else {
    headerElement?.classList.remove('fixed-header-position');
  }
}

function backToTop() {
  const backToTopElement = document.querySelector('.back-to-top');

  backToTopElement.addEventListener("click", () => {
    window.scrollTo({
     top: 0,
    })
  });

  if(window.scrollY > 100) {
    backToTopElement.style.opacity = "1"; 
    backToTopElement.style.pointerEvents = 'auto';
  }
  else {
      backToTopElement.style.opacity = '0';
      backToTopElement.style.pointerEvents = 'none';
  }
}

window.addEventListener('load', () => {
  stickMenu();
  backToTop();
  scrollBar();
})