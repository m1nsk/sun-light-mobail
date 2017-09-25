export function validateOptions(VeeValidate) {
  const dictionary = {
    ru: {
      messages:{
        regex: () => 'Неверное значение',
        required: () => "Это поле необходимо к заполнению",
        email: () => "Введите корректный адрес"
      }
    }
  };
  VeeValidate.Validator.updateDictionary(dictionary);
  VeeValidate.Validator.setLocale('ru')
  VeeValidate.Validator.extend('phone', {
    getMessage: field => 'Введите телефон в формате +79...',
    validate: value => value.search(/\+7[0-9]{10}$/) != -1
  });
  VeeValidate.Validator.extend('phoneRequire', {
    getMessage: field => 'Это поле необходимо к заполнению',
    validate: value => value != '+7'
  });
}
