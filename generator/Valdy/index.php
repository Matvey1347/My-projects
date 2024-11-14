<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Selfie Generator</title>
  <link rel="stylesheet" href="./null.css">
  <link rel="stylesheet" href="./style.css">
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik+Bubbles&display=swap"
    rel="stylesheet">
  <!-- noUiSlider -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.js"></script>
  <link rel="icon" type="image/png" href="./image/favicon.png">

  <!-- TWITTER -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@username">
  <meta name="twitter:title" content="Заголовок страницы">
  <meta name="twitter:description" content="Описание страницы">
  <?php
    $curImage = isset($_GET['cur-image']) ? htmlspecialchars($_GET['cur-image']) : './image/1.png';
  ?>
  <meta name="twitter:image" content="<?= $curImage ?>">
  <!-- TWITTER -->

  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
</head>

<body>
  <div class="custom-instagram__head">
    <img src="./image/logo.svg" alt="" class="instagram-logo">
    <div class="custom-instagram__head_items">
      <a href="https://twitter.com/SelfieCat_sol">
        <img src="./image/x.svg" alt="">
      </a>
      <a href="https://t.me/selfiecat_portal">
        <img src="./image/tg.svg" alt="">
      </a>
    </div>
  </div>
  <div class="custom-instagram__wrap" data-photo-wrap>
    <img src="./image/instagram-bg.png" class="custom-instagram__wrap_bg">
    <div class="custom-instagram__filters filters">
      <div class="label">
        Select attributes
      </div>
      <div class="filters__items" data-choose-cat="1" data-several="true">
        <div class="filters__item">
          <img src="./image/1.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/2.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/3.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/4.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/5.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/6.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/7.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/8.png" alt="">
        </div>
      </div>
      <div class="label">
        Rotate attributes
      </div>
      <div data-attr-rotate-wrap></div>
      <div class="filters__line"></div>
      <div class="label">
        Choose your cat
      </div>
      <div class="filters__items" data-choose-cat="2">
        <div class="filters__item">
          <img src="./image/cat-1.png" alt="">
        </div>
        <div class="filters__item">
          <img src="./image/cat-2.png" alt="">
        </div>
        <div class="filters__item filters__item-height">
          <img src="./image/cat-3.png" alt="">
        </div>
        <div class="filters__item filters__item-height">
          <img src="./image/cat-4.png" alt="">
        </div>
      </div>

      <div class="label">
        Number of views
      </div>
      <input type="number" value="12000" data-to-show-input="views">
      <div class="label">
        Write your meowent
      </div>
      <textarea
        data-to-show-input="texts">Say MEOOW</textarea>
    </div>
    <div class="left-inst__wrap">
      <div class="content-instagram" data-content-photo>
        <div class="custom-instagram">
          <div class="custom-instagram__image">
            <div class="wrap-full">
              <img src="./image/cat-w-bg-1.jpg" alt="" class="custom-instagram__image_img" data-upload-photo-preview>
              <div class="resize-handle"></div>
              <div class="resize-handle resize-handle-top"></div>
            </div>
            <div data-several-preview="1"></div>
            <div class="wrap none">
              <img src="" data-choose-cat-preview="2">
              <div class="resize-handle"></div>
              <img src="./image/close.webp" alt="" data-remove-cat="2">
            </div>
          </div>
          <div class="custom-instagram__icons">
            <div class="icons__left">
              <img src="./image/like.jpg" alt="">
              <img src="./image/comment.jpg" alt="">
              <img src="./image/share.jpg" alt="">
            </div>
            <img src="./image/saved.jpg" alt="">
          </div>
          <div class="custom-instagram__views">
            <span data-to-show-content="views" class="instagram-text">12000</span> <span
              class="instagram-text">views</span>
          </div>
          <div class="custom-instagram__text">
            <span class="instagram-text instagram-text-weight">$SELFIE CAT</span><span data-to-show-content="texts"
              class="instagram-text"></span>
          </div>
        </div>
      </div>
      <div class="instagram-btns">
        <button data-create-photo class="instagram-btn">
          Create Selfie
        </button>
        <input type="file" data-hidden-file style="display: none;" accept="image/*">
        <button data-download-photo class="instagram-btn instagram-btn-orange">
          Download
        </button>
      </div>
      <button data-share-twitter-btn class="instagram-btn">Share on X</button>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/interactjs@1.10.11/dist/interact.min.js"></script>
  <script src="app.js"></script>
</body>

</html>