const modal = document.querySelector(".copied_modal");

const copies = document.querySelectorAll("[data-copy]");
copies.forEach((copy) => {
   // copy.addEventListener('click', () => {
   const clipboard = new ClipboardJS(copy, {
      text: function () {
         // Получаем текст содержимого элемента
         let text = copy.textContent.trim();

         if (!text) {
            text = copy.getAttribute("data-copy");
         }

         // Удаляем все <br> теги
         text = text.replace(/<br\s*\/?>/gi, "");

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

// Находим модальное окно
const detectModal = document.querySelector(".detect_modal");

// Находим все элементы с классом detect_btn
const detectButtons = document.querySelectorAll(".detect_btn");

// Добавляем обработчик событий для каждого элемента detect_btn
detectButtons.forEach((button) => {
   button.addEventListener("click", () => {
      // Устанавливаем текст в модальное окно
      detectModal.textContent = "Detect AI has started object recognition...";

      // Добавляем класс _show к модальному окну
      detectModal.classList.add("_show");

      // Убираем класс _show через 2 секунды
      setTimeout(() => {
         detectModal.classList.remove("_show");
      }, 2000);
   });
});

// Находим input для загрузки файла
