"use strict";

  document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.bn-number').forEach((element) => {
      element.addEventListener('click', () => {

        const value = element.querySelector('.bn-value').textContent;
        navigator.clipboard.writeText(value).then(() => {
          console.log('copied');

          const tooltip = document.querySelector('.tooltip');
          if (tooltip) {
            tooltip.classList.add('active');
            setTimeout(() => {
              tooltip.classList.remove('active');
            }, 2000);
          }

        }).catch((err) => {
          console.error('Copy error: ', err);
        });
      });
    });

});


document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  setTimeout(() => {
    header.classList.add('visible'); // Добавление класса для активации анимации
  }, 100);
});




document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.fgv-box');

  const observerOptions = {
    threshold: 0.4, // Элемент считается видимым, когда 20% его высоты появляется на экране
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Добавляем класс, когда элемент виден
      }
    });
  }, observerOptions);

  boxes.forEach((box) => {
    observer.observe(box); // Наблюдаем за каждым элементом с классом "fgv-box"
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.second-section');

  const observerOptions = {
    threshold: 0.4, // 20% высоты секции должны быть видимы для срабатывания
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Добавляем класс, чтобы активировать анимацию
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section); // Наблюдаем за каждой секцией с классом "second-section"
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.five-section'); // Находим все секции five-section

  const observerOptions = {
    threshold: 0.2, // Секция считается видимой, когда 20% ее высоты попадают в область экрана
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Добавляем класс для появления
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section); // Наблюдаем за каждой секцией "five-section"
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.bnx-img');

  const observerOptions = {
    threshold: 0.2, // Срабатывает, когда 20% элемента появляется на экране
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Добавляем класс для активации анимации
      }
    });
  }, observerOptions);

  images.forEach((image) => {
    observer.observe(image); // Наблюдаем за каждым элементом с классом "bnx-img"
  });
});