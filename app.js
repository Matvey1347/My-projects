const santaImage = document.querySelector('[data-santa-image]');

santaImage.style.display = 'none';

document.getElementById("uploadPhoto").addEventListener("click", function () {
  document.getElementById("photoInput").click();
});

document.getElementById("photoInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("uploadedImage");
      img.src = e.target.result;
      img.style.display = "block";
      document.getElementById("dataImageWrap").appendChild(img);      
      img.classList.add('_active');
      interact(img)
        .draggable({
          onmove: dragMoveListener,
        })
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          listeners: {
            move(event) {
              let { target } = event;
              const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.deltaRect.left;
              const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.deltaRect.top;

              // Update the element's style
              // target.style.width = `${event.rect.width}px`;
              target.style.height = `${event.rect.height}px`;
              target.setAttribute("data-x", x);
              target.setAttribute("data-y", y);

              // Translate the element
              target.style.transform = `translate(${x}px, ${y}px)`;
            },
          },
        });

      santaImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("download").addEventListener("click", function () {
  const imageWrap = document.getElementById("dataImageWrap");
  imageWrap.style.borderRadius = "0";
  santaImage.style.zIndex = 3;
  html2canvas(imageWrap).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "image.png";
    link.click();
  });

  imageWrap.removeAttribute("style");
});

function dragMoveListener(event) {
  const target = event.target;
  const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = `translate(${x}px, ${y}px)`;
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

const dataImageWrap = document.querySelector(".data-image-wrap");

dataImageWrap.addEventListener("touchstart", function () {
  document.body.style.overflow = "hidden";
});

dataImageWrap.addEventListener("touchend", function () {
  document.body.style.overflow = "";
});

dataImageWrap.addEventListener("mouseenter", function () {
  santaImage.style.zIndex = 0;
});

dataImageWrap.addEventListener("mouseleave", function () {
  santaImage.style.zIndex = 2;
});

dataImageWrap.addEventListener("touchstart", function () {
  santaImage.style.zIndex = 0;
});

dataImageWrap.addEventListener("touchend", function () {
  santaImage.style.zIndex = 2;
});