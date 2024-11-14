// DOWLOAD PHOTO
const btnDownload = document.querySelector('[data-download-photo]');
const photo = document.querySelector('[data-generator-photo]');
btnDownload.addEventListener('click', (e) => {
  e.preventDefault();

  photo.style.borderRadius = 0;
  html2canvas(photo).then(canvas => {
    const link = document.createElement('a');
    link.download = 'Pepe B-DAY card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  photo.removeAttribute("style");
});

const generatorWrapText = document.querySelector('.generator-wrap__text');

// CHOOSE ITEMS
const wrapItems = document.querySelectorAll('[data-choose-items]');
wrapItems.forEach((wrap) => {
  const label = wrap.getAttribute('data-choose-items');
  const isForFont = label === 'font';
  const isForColor = label === 'color';
  const previewEl = document.querySelector(`[data-choose-preview="${label}"]`);
  const items = wrap.querySelectorAll('[data-item]');
  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const choosenValue = item.getAttribute('data-item');
      items.forEach((el) => el.classList.remove('_active'));
      item.classList.add('_active');

      if (isForFont) {
        const classesToRemove = [];
        for (const className of previewEl.classList) {
          if (className.startsWith('ff-')) {
            classesToRemove.push(className);
          }
        }
        // Удаление классов, которые начинаются на 'ff-'
        classesToRemove.forEach(className => previewEl.classList.remove(className));

        previewEl.classList.add(choosenValue);
      } else if (isForColor) {
        const color = item.getAttribute('data-item');
        generatorWrapText.style.color = color;
      } else if (previewEl) {
        previewEl.src = choosenValue;
        deleteImageDef();
      };
    })
  });
});


function initOneRotate(el) {
  let startValue = 69;
  let minValue = 36;
  if (window.innerWidth < 767) {
    startValue = 20;
    minValue = 10;
  }
  noUiSlider.create(el, {
    start: startValue,
    step: 1,
    connect: [true, false],
    range: {
      'min': minValue,
      'max': 120
    }
  });

  el.noUiSlider.on('update', function (values, handle) {
    const fontSizeValue = parseInt(values[handle], 10);
    if (generatorWrapText) generatorWrapText.style.fontSize = fontSizeValue + 'px';
  });
}

initOneRotate(document.querySelector('[data-font-size]'));

// document.querySelectorAll('.generator-text-color__item').forEach(function (elem) {
//   const color = elem.getAttribute('data-item');
//   elem.style.backgroundColor = color;
// });


const chooseColors = document.querySelectorAll('[data-color]');
chooseColors.forEach((input) => {
  input.addEventListener('change', () => {
    if (generatorWrapText) generatorWrapText.style.color = input.value;
    chooseColors.forEach((el) => el.value === input.value);
  })
});

// INPUT WITH CONTENT
const toShowValueInputs = document.querySelectorAll('[data-to-show-input]');
toShowValueInputs.forEach((input) => {
  const label = input.getAttribute('data-to-show-input');
  const showItems = document.querySelectorAll(`[data-to-show-content="${label}"]`);

  input.addEventListener('input', setItemsContent);
  setItemsContent();

  function setItemsContent() {
    const value = input.value;
    const safeValue = value.replace(/\n/g, '<br>');
    showItems.forEach((item) => {
      item.innerHTML = safeValue;
    });
  }
});

// TO MOVE TEXT
function initToMoveAndResizeText() {
  interact('.generator-wrap__text')
    .draggable({
      listeners: {
        move(event) {
          var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
          target.style.transform = generateTransformStr(target);
        }
      }
    })
}

function generateTransformStr(el) {
  const x = el.getAttribute('data-x');
  const y = el.getAttribute('data-y');
  const rotateValue = el.getAttribute('data-rotate');
  return ` ${(x !== null || y !== null) ? `translate(${x}px, ${y}px)` : ''} ${(rotateValue) ? `rotate(${rotateValue}deg)` : ''}`;
}

initToMoveAndResizeText();

document.addEventListener('DOMContentLoaded', function () {
  var photoElement = document.querySelector('[data-generator-photo]');

  document.addEventListener('touchstart', function (event) {
    if (photoElement.contains(event.target)) {
      // Касание началось внутри целевого элемента
      document.body.style.overflow = 'hidden';
    } else {
      // Касание началось вне целевого элемента
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

// Отключает двойной тап для масштабирования на некоторых устройствах
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);


document.addEventListener('DOMContentLoaded', function () {
  deleteImageDef();
});

function deleteImageDef() {
  const images = document.querySelectorAll('[data-generator-photo] img');
  images.forEach((img) => {
    const getRemoveCat = img.getAttribute('data-remove-cat');
    if (getRemoveCat === null) {
      img.addEventListener('contextmenu', function (event) {
        event.preventDefault();
      });
      img.addEventListener('touchstart', function (event) {
        event.preventDefault();
      });
      img.addEventListener('touchend', function (event) {
        event.preventDefault();
      });
    }
  });
}