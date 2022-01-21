document.addEventListener("DOMContentLoaded", function () {
    // получение элементов, связанных с кнопкой входа
    const signInWrapper = document.querySelector(".sign-in__wrapper");
    const signInBtn = document.querySelector(".header__sign-in-btn");
    const closeSignInBtn = document.querySelector(".sign-in__close");

    // добавление слушателей на нажатие по кнопке входа
    signInBtn.addEventListener('click', function (e) {
        signInWrapper.classList.add('modal__wrapper-active')
    })

    closeSignInBtn.addEventListener('click', function(e) {
        signInWrapper.classList.remove('modal__wrapper-active')
    })

    // получение элементов, связанных с кнопкой регистрации
    const signUpWrapper = document.querySelector(".sign-up__wrapper");
    const signUpBtn = document.querySelector(".header__sign-up-btn");
    const closeSignUpBtn = document.querySelector(".sign-up__close");

    // добавление слашателей на нажание по кнопке регистрации
    signUpBtn.addEventListener('click', function (e) {
        signUpWrapper.classList.add('modal__wrapper-active')
    })

    closeSignUpBtn.addEventListener('click', function(e) {
        signUpWrapper.classList.remove('modal__wrapper-active')
    })

    // добавление события при нажатии на ссылку уже зарегистрированы?
    document.querySelector('.sign-in__open-sign-up').addEventListener('click', function () {
        signInWrapper.classList.remove('modal__wrapper-active');
        signUpWrapper.classList.add('modal__wrapper-active');
    });

    // получение элементов фомы регистрации
    const signUpLogin = docGet(".sign-up__login");
    const signUpPassword = docGet(".sign-up__password");
    const signUpRepeatPassword = docGet(".sign-up__repeat-password");
    const signUpEmail = docGet(".sign-up__email");
    const signUpPhone = docGet(".sign-up__phone");

    // валидация элементов формы регистрации
    signUpLogin.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 15 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 5 символов");
        } else if (validity.patternMismatch) {
            _this.setCustomValidity("Неверный формат ввода. Доступны только английские буквы.")
        } else {
            _this.setCustomValidity("");
        }

    });

    signUpPassword.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 15 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 5 символов");
        } else if (validity.patternMismatch) {
            _this.setCustomValidity("Неверный формат ввода. Доступны только английские буквы, цифры и знак _")
        }
        else {
            _this.setCustomValidity("");
        }
    });

    signUpRepeatPassword.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 15 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 5 символов");
        } else if (_this.value !== signUpPassword.value) {
            _this.setCustomValidity("Пароли не совпадают")
        } else if (validity.patternMismatch) {
            _this.setCustomValidity("Неверный формат ввода. Доступны только английские буквы, цифры и знак _")
        } else {
            _this.setCustomValidity("");
        }
    });

    signUpEmail.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;
        console.log(validity);

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 15 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 4 символов");
        } else if (validity.typeMismatch) {
            _this.setCustomValidity("Введен некорректный email-адрес")
        } else {
            _this.setCustomValidity("");
        }
    });


    signUpPhone.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 11 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 3 символов");
        } else if (validity.typeMismatch) {
            _this.setCustomValidity("Введен некорректный телефон")
        } else if (validity.patternMismatch) {
            _this.setCustomValidity("Неверный формат ввода. Доступны только цифры.")
        } else {
            _this.setCustomValidity("");
        }
    });

    // получение элементов формы входа
    const signInLogin = docGet(".sign-in__login");
    const signInPassword = docGet(".sign-up__password");

    // валидация элементов формы входа
    signInLogin.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 15 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 5 символов");
        } else if (validity.patternMismatch) {
            _this.setCustomValidity("Неверный формат ввода. Доступны только английские буквы.")
        } else {
            _this.setCustomValidity("");
        }
    });

    signInPassword.addEventListener("input", function (e) {
        const _this = e.target;
        const validity = _this.validity;

        if (validity.valueMissing) {
            _this.setCustomValidity("Поле обязательно для заполнения");
        } else if (validity.tooLong) {
            _this.setCustomValidity("Введенное значение должно содержать меньше 15 символов");
        } else if (validity.tooShort) {
            _this.setCustomValidity("Введенной значение должно содержать минимум 5 символов");
        } else if (validity.patternMismatch) {
            _this.setCustomValidity("Неверный формат ввода. Доступны только английские буквы, цифры и знак _")
        } else {
            _this.setCustomValidity("");
        }
    });

    // обработка нажатия кнопок "войти" и "зарегистрароваться"
    const signInForm = docGet(".sign-in__form");
    const signUpForm = docGet(".sign-up__form");

    signInForm.addEventListener("submit", function (e) {
        console.log(signInLogin.value);
        // пароль не выводится
        console.log(signInPassword.value);
        e.preventDefault();
    })


    signUpForm.addEventListener("submit", function (e) {
        console.log(signUpLogin.value);
        console.log(signUpPassword.value);
        console.log(signUpRepeatPassword.value);
        console.log(signUpEmail.value);
        console.log(signUpPhone.value);
        e.preventDefault();
    });

    function docGet(selector) {
        return document.querySelector(selector);
    }


    const btnLoadMore = document.querySelector('.btn-load-more');
    // событие на подгрузку скриншотов
    btnLoadMore.addEventListener('click', function (e) {
        const screenshots = document.querySelector('.screenshots')
        let offset = parseInt(e.target.getAttribute("last-screenshot-id"))
        const url = `load-more.php?offset=${offset}`
        fetch(url)
            .then(response => response.text())
            .then(result => {
                screenshots.insertAdjacentHTML('beforeend', result)
                btnLoadMore.setAttribute("last-screenshot-id", (offset - 9).toString())
                if (offset < 0) {
                    btnLoadMore.style.display = 'none';
                }
            }).catch(error => console.log(error))

    })
});


