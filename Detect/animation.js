/* 
  АНИМАЦИЯ ПРИ СКРОЛЛЕ
  когда ты доскролишь до элемента с классом data-anim-on-scroll,
  ему добавиться класс _animate, к котрому можно привезываться, 
  уже есть примеры ._bottom_opacity, ._top_opacity что
*/

function anim_on_scroll() {
   const animItems = document.querySelectorAll("[data-anim-on-scroll]");
   if (animItems.length > 0) {
      window.addEventListener("scroll", animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
               animItem.classList.add("_animate");
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }

      setTimeout(() => {
         animOnScroll();
      }, 300);
   }
}

anim_on_scroll();
