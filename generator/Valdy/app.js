// DOWLOAD PHOTO
const wraps = document.querySelectorAll('[data-photo-wrap]');
wraps.forEach((wrap) => {
  const btnDownload = wrap.querySelector('[data-download-photo]');
  const photo = wrap.querySelector('[data-content-photo]');
  const btnUpload = wrap.querySelector('[data-create-photo]');
  const uploadHideInput = wrap.querySelector('[data-hidden-file]');
  const uploadPhotoPreview = wrap.querySelector('[data-upload-photo-preview]');

  btnDownload.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllResizeIcons();
    html2canvas(photo).then(canvas => {
      const link = document.createElement('a');
      link.download = 'selfie-cat.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });

    showAllResizeIcons()
  })

  // UPLOAD PHOTO
  btnUpload.addEventListener('click', (e) => {
    e.preventDefault();
    uploadHideInput.click();
  })

  uploadHideInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadPhotoPreview.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  });

  initToMoveAndResizeImages();

  // SHARE IN TWITTER
  const twitterShareBtns = document.querySelectorAll('[data-share-twitter-btn]');
  // const twitterImageTag = document.querySelector('[data-twitter-image]');

  twitterShareBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      hideAllResizeIcons();
      html2canvas(photo).then(canvas => {
        let imagePath = canvas.toDataURL('image/png');
        fetch('get-image-link.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imagePath }),
        })
          .then(response => response.json())
          .then(res => {
            imagePath = res.imageUrl;
            // twitterImageTag.content = imagePath;
            setCurrentUrlWithImage(imagePath);
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Здесь ваш текст для твита");
            const hashtags = encodeURIComponent("хештег1,хештег2");
            // 
            window.open(`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${url}`, '_blank', 'width=400,height=500');
            void (0);
          })
          .catch((error) => {
            console.error('Ошибка:', error);
          });
      })
      showAllResizeIcons();
    })
  });
});

function setCurrentUrlWithImage(value) {
  // Получаем текущий URL без строки запроса
  let baseUrl = window.location.href.split('?')[0];

  // Добавляем параметр к URL
  let newUrl = `${baseUrl}?cur-image=${encodeURIComponent(value)}`;

  // Изменяем URL в адресной строке без перезагрузки страницы
  history.pushState(null, '', newUrl);
}

function hideAllResizeIcons() {
  const resizeHandles = document.querySelectorAll('.resize-handle, [data-remove-cat]');
  resizeHandles.forEach((e) => e.classList.add('none'));
}

function showAllResizeIcons() {
  const resizeHandles = document.querySelectorAll('.resize-handle, [data-remove-cat]');
  resizeHandles.forEach((e) => e.classList.remove('none'));
}

// ROTATE
const rotateWrap = document.querySelector('[data-attr-rotate-wrap]');

function initRotates() {
  const attrRotates = rotateWrap.querySelectorAll('[data-attr-rotate]');
  attrRotates.forEach(el => {
    initOneRotate(el);
  });
}

function initOneRotate(el) {
  const attr = el.getAttribute('data-attr-rotate');
  const rotateEl = document.querySelector(`[data-several-preview] [data-choose-cat-preview="${attr}"]`);
  noUiSlider.create(el, {
    start: [0],
    step: 1,
    connect: [true, false],
    range: {
      'min': -180,
      'max': 180
    }
  });

  el.noUiSlider.on('update', function (values, handle) {
    const rotateValue = parseInt(values[handle], 10);
    if (rotateEl) {
      const wrapRotateEl = rotateEl.parentElement;
      wrapRotateEl.setAttribute('data-rotate', rotateValue);
      wrapRotateEl.style.transform = generateTransformStr(wrapRotateEl);
    }
  });
}

function addNewRotate(dataIndex) {
  rotateWrap.insertAdjacentHTML('beforeend', `<div data-attr-rotate="${dataIndex}"></div>`);
  setTimeout(() => {
    const el = rotateWrap.querySelector(`[data-attr-rotate="${dataIndex}"]`);
    initOneRotate(el);
  })
}

function deleteRotate(dataIndex) {
  const el = rotateWrap.querySelector(`[data-attr-rotate="${dataIndex}"]`);
  if (el) el.remove();
}

initRotates();

// INPUT WITH CONTENT
const toShowValueInputs = document.querySelectorAll('[data-to-show-input]');
toShowValueInputs.forEach((input) => {
  const label = input.getAttribute('data-to-show-input');
  const showItems = document.querySelectorAll(`[data-to-show-content="${label}"]`);

  input.addEventListener('input', setItemsContent);
  setItemsContent();

  function setItemsContent() {
    const value = input.value;
    showItems.forEach((item) => {
      item.textContent = value;
    });
  }
});

// CAT ITEM
const dataChooseWraps = document.querySelectorAll('[data-choose-cat]');
dataChooseWraps.forEach((wrap) => {
  const items = wrap.querySelectorAll('.filters__item');
  items.forEach((item, index) => {
    item.setAttribute('data-index', index);
    const attr = wrap.getAttribute('data-choose-cat');
    const isSeveral = wrap.getAttribute('data-several');
    item.addEventListener('click', () => {
      if (isSeveral) {
        item.classList.add('_active');
        const dataIndex = item.getAttribute('data-index');
        const image = item.querySelector('img');
        const severalPreview = document.querySelector(`[data-several-preview="${attr}"]`);
        let previewEl = severalPreview.querySelector(`[data-choose-cat-preview="${dataIndex}"]`);
        if (!previewEl) {
          severalPreview.insertAdjacentHTML('beforeend', generateWrapHtml(image.src, dataIndex));
          addNewRotate(dataIndex);
          initDeleteBtns();
          deleteImageDef();

          // previewEl = severalPreview.querySelector(`[data-choose-cat-preview="${dataIndex}"]`);
          // setTimeout(() => {
          //   initToMoveAndResizeImages(previewEl.parentElement);
          // }, 1000)
        }
      } else {
        const imagePreview = document.querySelector(`[data-choose-cat-preview="${attr}"]`);
        const image = item.querySelector('img');

        items.forEach((e) => e.classList.remove('_active'));
        item.classList.add('_active');

        imagePreview.parentElement.classList.remove('none');
        imagePreview.src = image.src;
      }
    })
  });
});

function generateWrapHtml(src, dataIndex) {
  return `
    <div class="wrap" style="width: 100px">
      <img src="${src}" data-choose-cat-preview="${dataIndex}">
      <div class="resize-handle"></div>
      <img src="./image/close.webp" alt="" data-remove-cat="${dataIndex}">
    </div>
  `;
}

// TO REMOVE CAT ITEM
function initDeleteBtns() {
  const removeCatBtns = document.querySelectorAll('[data-remove-cat]');
  removeCatBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const attr = btn.getAttribute('data-remove-cat');
      const wrap = btn.parentElement;
      const wrapW = wrap.parentElement;
      const isSeveral = wrapW.getAttribute('data-several-preview');
      if (isSeveral) {
        wrap.remove();
        deleteRotate(attr)
        const item = document.querySelector(`[data-index="${attr}"]`);
        item.classList.remove('_active');
      } else {
        wrap.classList.add('none');
        const items = document.querySelectorAll(`[data-choose-cat="${attr}"] .filters__item`);
        items.forEach((e) => e.classList.remove('_active'));
      }
    })
  });
}

initDeleteBtns();

// TO MOVE IMAGE
function initToMoveAndResizeImages() {
  interact('.wrap')
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
    .resizable({
      edges: { left: false, right: true, bottom: true, top: false },
      aspectRatio: true,
      listeners: {
        move(event) {
          var target = event.target;
          var x = (parseFloat(target.getAttribute('data-x')) || 0);
          var y = (parseFloat(target.getAttribute('data-y')) || 0);
          target.style.width = event.rect.width + 'px';
          target.style.height = event.rect.height + 'px';
          x += event.deltaRect.left;
          y += event.deltaRect.top;
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
          target.style.transform = generateTransformStr(target);
        }
      },
      modifiers: [
        interact.modifiers.restrictSize({
          min: { width: 20, height: 20 }
        })
      ],
      inertia: true
    });

  // if (window.innerWidth > 767) {
  //   interact('.wrap-full')
  //     .draggable({
  //       listeners: {
  //         move(event) {
  //           var target = event.target,
  //             x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
  //             y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  //           target.setAttribute('data-x', x);
  //           target.setAttribute('data-y', y);
  //           target.style.transform = generateTransformStr(target);
  //         }
  //       }
  //     })
  //     .resizable({
  //       edges: { left: true, right: true, bottom: true, top: true },
  //       aspectRatio: true,
  //       listeners: {
  //         move(event) {
  //           var target = event.target;
  //           var x = (parseFloat(target.getAttribute('data-x')) || 0);
  //           var y = (parseFloat(target.getAttribute('data-y')) || 0);
  //           target.style.width = event.rect.width + 'px';
  //           target.style.height = event.rect.height + 'px';
  //           x += event.deltaRect.left;
  //           y += event.deltaRect.top;
  //           target.setAttribute('data-x', x);
  //           target.setAttribute('data-y', y);
  //           target.style.transform = generateTransformStr(target);
  //         }
  //       },
  //       modifiers: [
  //         interact.modifiers.restrictSize({
  //           min: { width: 100, height: 10 }
  //         })
  //       ],
  //       inertia: true
  //     });
  // }
}

function generateTransformStr(el) {
  const x = el.getAttribute('data-x');
  const y = el.getAttribute('data-y');
  const rotateValue = el.getAttribute('data-rotate');
  return ` ${(x !== null || y !== null) ? `translate(${x}px, ${y}px)` : ''} ${(rotateValue) ? `rotate(${rotateValue}deg)` : ''}`;
}


document.addEventListener('DOMContentLoaded', function () {
  var photoElement = document.querySelector('[data-content-photo]');

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
  const images = document.querySelectorAll('[data-content-photo] img');
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