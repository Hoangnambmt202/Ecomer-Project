Validator({
    form:'#form-control',
    errorSelector: '.form-message',

    rules: [
      Validator.isRequired('#full-name'),
      Validator.isEmail('#email'),
      Validator.isRequired('#password'),
    ]

  });