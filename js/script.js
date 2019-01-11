        var button = document.querySelector(".feedback-button");

        var popup = document.querySelector(".feedback");
        var overlay = document.querySelector(".overlay");
        var close = popup.querySelector(".modal-close");

        var form = popup.querySelector("form");
        var identity = popup.querySelector("[name=name]");
        var email = popup.querySelector("[name=email]");
        var claim = popup.querySelector("[name=claim]");

        var isStorageSupport = true;
        var storage = "";
        var storage2 = "";
  
        try {
          storage2 = localStorage.getItem("email");
          storage = localStorage.getItem("identity");
        } catch (err) {
          isStorageSupport = false;
        }

        button.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.add("feedback-show");
          overlay.classList.add("overlay-show");

          if (storage) {
            identity.value = storage;
            email.value = storage2;
          }
            claim.focus();
        });

        close.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.remove("feedback-show");
          overlay.classList.remove("overlay-show");
          popup.classList.remove("feedback-error");
        });

        form.addEventListener("submit", function (evt) {
          if (!identity.value || !email.value || !claim.value) {
            evt.preventDefault();
            popup.classList.remove("feedback-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("feedback-error");
            console.log("Нужно заполнить все поля формы");
          } else {
            if (isStorageSupport) {
              localStorage.setItem("identity", identity.value);
              localStorage.setItem("email", email.value);
            }
          }   
        });

        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("feedback-show")) {
              popup.classList.remove("feedback-show");
              overlay.classList.remove("overlay-show");
              popup.classList.remove("feedback-error");
            }
          }
        });