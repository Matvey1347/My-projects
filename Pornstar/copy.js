const modal = document.querySelector(".copied_modal");

const copies = document.querySelectorAll("[data-copy]");
copies.forEach((copy) => {
   // copy.addEventListener('click', () => {
   const clipboard = new ClipboardJS(copy, {
      text: function () {
         // Получаем текст из атрибута data-copy
         let text = copy.getAttribute("data-copy") || ""; // Если атрибут отсутствует, возвращаем пустую строку

         return text;
      },
   });

   clipboard.on("success", function (e) {
      console.log("Текст успешно скопирован: " + e.text);
      e.clearSelection();

      // Добавляем класс _show к модальному окну
      modal.classList.add("_show");

      // Убираем класс _show через 2 секунды
      setTimeout(() => {
         modal.classList.remove("_show");
      }, 2000);
   });

   clipboard.on("error", function (e) {
      console.error("Ошибка при копировании");
   });
   // });
});
