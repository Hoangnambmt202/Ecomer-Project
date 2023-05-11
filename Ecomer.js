//đối tượng 'Validator'
function Validator(options) {

//* thực hiện Validate
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            if(errorMessage) {
                errorElement.innerText = errorMessage;
                inputElement.classList.add('invalid');
            }
            else {
                errorElement.innerText = '';
                inputElement.classList.remove('invalid');
            }
    }

//* Lấy element của form
    var formElement = document.querySelector(options.form);
    if (formElement) {
       options.rules.forEach(function(rule) {
        var inputElement = formElement.querySelector(rule.selector);
        
        if (inputElement) {
            //* xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                validate(inputElement, rule);
            }
            
            //* xử lý mỗi khi người dùng nhập vào input
            inputElement.oninput = function () {
                var errorElement = inputElement.parentElement.querySelector('.form-message');
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.remove('invalid');
            }
        }
       });
    }
}   


//định nghĩa các rules
// Nguyên tắc các rules:
//* 1. Khi có lỗi  => trả ra message lỗi
//* 2. Khi hợp lệ => khong trả ra cái gì cả (undefined)
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này !!!'
        }
    };
}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Chưa đúng email. Vui lòng nhập lại !!!'
        }
    };
}

const logIn_btn = document.querySelector(".modal-header__link-logIn");
const signUp_btn = document.querySelector(".modal-header__link-signUp");
const form_logIn = document.querySelector(".js-from-logIn");
const form_signUp = document.querySelector(".js-from-signUp");
const user_btn = document.querySelector(".navbar-list__link");
const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog")
const cancel_btn = document.querySelector(".btn-cancel");
const send_btn = document.querySelector(".btn-submit");

// const modalClose = document.querySelector(".js-modal-close");
function showFormlogIn() {
    form_logIn.classList.add("open");
}
function showFormsignUp() {
    form_signUp.classList.add("open");
}
function hideFormlogIn() {
    form_logIn.classList.remove("open");
}
function hideFormsignUp() {
    form_signUp.classList.remove("open");
}
function openModal() {
    modal.classList.add("d-flex");
}
function cancel() {
    modal.classList.remove("d-flex");
}
function send() {
    
}
logIn_btn.addEventListener("click", showFormlogIn);
signUp_btn.addEventListener("click", hideFormlogIn);
signUp_btn.addEventListener("click", showFormsignUp);
logIn_btn.addEventListener("click", hideFormsignUp);
user_btn.addEventListener("click", openModal);
cancel_btn.addEventListener("click", cancel);
modal.addEventListener("click", cancel);
modalDialog.addEventListener("click", function (event) {
    event.stopPropagation();
});
