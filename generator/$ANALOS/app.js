// CHOOSE ITEMS CLASS
class ChooseItems {
  constructor(selector) {
    this.wrapItems = document.querySelectorAll(selector);
    this.initChooseItems();

    this.addEventListeners('[data-reset-btn]', this.useDefaultImages.bind(this));
    this.addEventListeners('[data-generate-random-btn]', this.generateRandom.bind(this));
    this.addEventListeners('[data-download-photo]', this.downloadPhoto.bind(this));


    this.outfitItems = document.querySelector('[data-choose-items="outfit"]');
  }

  addEventListeners(selector, handler) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', handler);
      }
    });
  }

  initChooseItems() {
    this.wrapItems.forEach((wrap) => {
      const label = wrap.getAttribute('data-choose-items');
      const previewEl = document.querySelector(`[data-choose-preview="${label}"]`);
      const previewEl2 = document.querySelector(`[data-choose-preview="${label}-2"]`);
      const items = wrap.querySelectorAll('[data-item]');

      items.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const chosenValue = item.getAttribute('data-item');
          const chosenValue2 = item.getAttribute('data-item-2');
          items.forEach((el) => el.classList.remove('_active'));
          item.classList.add('_active');

          if (previewEl) {
            if (!chosenValue) previewEl.classList.add('none'); else previewEl.classList.remove('none');
            previewEl.src = chosenValue;
            deleteImageDef();
          }

          if (previewEl2) {
            if (!chosenValue2) previewEl2.classList.add('none'); else previewEl2.classList.remove('none');
            previewEl2.src = chosenValue2;
            deleteImageDef();
          }

          const activeType = document.querySelector('[data-type]._active');
          if (activeType) {
            const valueType = activeType.getAttribute('data-type');
            if (valueType) {
              const activeOutfit = this.outfitItems.querySelector('._active');

              if (activeOutfit) {
                const newValue = activeOutfit.getAttribute(`data-${valueType}-item`);
                const defValue = activeOutfit.getAttribute(`data-item`);
                const previewOutfitEl = document.querySelector(`[data-choose-preview="outfit"]`);
                (newValue) ? previewOutfitEl.src = newValue : previewOutfitEl.src = defValue;

                const previewAttribute = document.querySelector('[data-choose-preview="attribute"]');
                const previewAttribute1 = document.querySelector('[data-choose-preview="attribute-1"]');

                switch (valueType) {
                  case 'sword':
                    previewAttribute.src = './image/sword.png';
                    previewAttribute1.src = '';
                    break;
                  case 'fuck':
                    if (newValue) {
                      previewAttribute.src = '';
                      previewAttribute1.src = '';
                    } else {
                      previewAttribute.src = './image/fuck.png';
                      previewAttribute1.src = '';
                    }
                    break;
                  case 'gun':
                    if (newValue) {
                      previewAttribute.src = '';
                      previewAttribute1.src = '';
                    } else {
                      previewAttribute.src = './image/gun.png';
                      previewAttribute1.src = '';
                    }
                    break;
                  case 'automaton':
                    if (newValue) {
                      previewAttribute.src = '';
                      previewAttribute1.src = '';
                    } else {
                      previewAttribute.src = './image/automaton.png';
                      previewAttribute1.src = '';
                    }
                    break;
                  case 'junkie':
                    previewAttribute.src = './image/junkie.png';
                    if (newValue) {
                      previewAttribute1.src = '';
                    } else {
                      previewAttribute1.src = './image/junkie-arm.png'
                    }
                    break;
                  default:
                    previewAttribute.src = '';
                    previewAttribute1.src = '';
                    break;
                }
              }
            }
          }

          const facePreview = document.querySelector('[data-choose-preview="face"]');
          const hatsPreview = document.querySelector('[data-choose-preview="hats"]');
          const activeHatItem = document.querySelector('[data-choose-items="hats"] ._active');

          if (facePreview.src.includes('face-5.png') || facePreview.src === './image/face-4.png') {
            if (hatsPreview.src.includes('hats-3.png')) {
              hatsPreview.src = './image/hats-3-full.png';
            } else if (hatsPreview.src.includes('hats-11.png')) {
              hatsPreview.src = './image/hats-11-full.png';
            } else if (hatsPreview.src.includes('hats-12.png')) {
              hatsPreview.src = './image/hats-12-full.png';
            }
          } else {
            if (activeHatItem) hatsPreview.src = activeHatItem.getAttribute('data-item');
          }
        });
      });
    });
  }

  useDefaultImages() {
    this.wrapItems.forEach((wrap) => {
      const defItem = wrap.querySelector('[data-def-item]');
      if (defItem) defItem.click();
    });
    deleteImageDef();
  }

  generateRandom() {
    this.wrapItems.forEach((wrap) => {
      const items = wrap.querySelectorAll('[data-item]');
      if (items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        randomItem.click();
      }
    });
    deleteImageDef();
  }

  downloadPhoto() {
    const photo = document.querySelector('[data-generator-photo]');
    photo.style.borderRadius = 0;
    html2canvas(photo).then(canvas => {
      const link = document.createElement('a');
      link.download = 'Analos.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
    photo.removeAttribute('style');
  }
}

const itemSelector = new ChooseItems('[data-choose-items]');
itemSelector.useDefaultImages();

const swiperWraps = document.querySelectorAll('[data-swiper-wrap]');
swiperWraps.forEach((wrap) => {
  const swiperEl = wrap.querySelector('.swiper');
  const btnPrev = wrap.querySelector('.swiper__items-prev');
  const btnNext = wrap.querySelector('.swiper__items-next');

  new Swiper(swiperEl, {
    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },
    slidesPerView: 'auto',
    spaceBetween: 20
  })
});


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