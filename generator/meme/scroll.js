const customScrollbarWraps = document.querySelectorAll('[data-scroll-wrap]');
customScrollbarWraps.forEach((wrap) => {
  const thumb = wrap.querySelector('[data-trumb]');
  const scroll = wrap.querySelector('[data-scroll]');
  const content = wrap.querySelector('[data-scroll-content]');


  function updateThumbWidth() {
    const visibleRatio = content.clientWidth / content.scrollWidth;
    const thumbWidth = visibleRatio * wrap.clientWidth;
    thumb.style.width = `${thumbWidth}px`;

    if (content.clientWidth === thumbWidth) {
      scroll.style.display = 'none';
    }
  }

  updateThumbWidth();

  content.addEventListener('scroll', () => {
    const scrollPercentage = (content.scrollLeft / (content.scrollWidth - content.clientWidth)) * 100;
    const maxThumbPosition = wrap.clientWidth - thumb.clientWidth;
    const thumbPosition = (scrollPercentage / 100) * maxThumbPosition;
    thumb.style.transform = `translateX(${thumbPosition}px)`;
  });

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let thumbPosition = 0;

  thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    scrollLeft = thumbPosition;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  thumb.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    scrollLeft = thumbPosition;

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  });

  scroll.addEventListener('mousedown', (e) => {
    const clickX = e.clientX - wrap.getBoundingClientRect().left;
    const maxThumbPosition = wrap.clientWidth - thumb.clientWidth;
    const newThumbPosition = Math.min(maxThumbPosition, Math.max(0, clickX - thumb.clientWidth / 2));
    thumbPosition = newThumbPosition;
    thumb.style.transform = `translateX(${thumbPosition}px)`;
    const scrollPercentage = thumbPosition / maxThumbPosition;
    content.scrollLeft = scrollPercentage * (content.scrollWidth - content.clientWidth);
  });

  function onMouseMove(e) {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const maxThumbPosition = wrap.clientWidth - thumb.clientWidth;
    thumbPosition = Math.min(maxThumbPosition, Math.max(0, scrollLeft + deltaX));
    thumb.style.transform = `translateX(${thumbPosition}px)`;
    const scrollPercentage = thumbPosition / maxThumbPosition;
    content.scrollLeft = scrollPercentage * (content.scrollWidth - content.clientWidth);
  }

  function onTouchMove(e) {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const maxThumbPosition = wrap.clientWidth - thumb.clientWidth;
    thumbPosition = Math.min(maxThumbPosition, Math.max(0, scrollLeft + deltaX));
    thumb.style.transform = `translateX(${thumbPosition}px)`;
    const scrollPercentage = thumbPosition / maxThumbPosition;
    content.scrollLeft = scrollPercentage * (content.scrollWidth - content.clientWidth);
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  function onTouchEnd() {
    isDragging = false;
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  }


  let isDraggingTwo = false;
  let startXTwo;

  content.addEventListener('mousedown', (e) => {
    isDraggingTwo = true;
    startXTwo = e.clientX;
    scrollLeft = content.scrollLeft;
    content.style.cursor = 'grabbing';

    document.addEventListener('mousemove', onMouseMoveOnContent);
    document.addEventListener('mouseup', onMouseUpOnContect);
  });

  function onMouseMoveOnContent(e) {
    if (!isDraggingTwo) return;

    const deltaX = e.clientX - startXTwo;
    content.scrollLeft = scrollLeft - deltaX;
  }

  function onMouseUpOnContect() {
    isDraggingTwo = false;
    content.style.cursor = 'grab';
    document.removeEventListener('mousemove', onMouseMoveOnContent);
    document.removeEventListener('mouseup', onMouseUpOnContect);
  };

  content.addEventListener('mouseleave', () => {
    if (isDraggingTwo) {
      isDraggingTwo = false;
      content.style.cursor = 'grab';
      document.removeEventListener('mousemove', onMouseMoveOnContent);
      document.removeEventListener('mouseup', onMouseUpOnContect);
    }
  });
});