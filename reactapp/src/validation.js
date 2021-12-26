const nameValidation = (name) => {
    if (!name) return '名前を入力してください';
    const regex = /[^0-9０-９]+/;
    if (!regex.test(name)) return '数値以外の形式で名前を入力してください';
    return '';
};
  
const ageValidation = (age) => {
    if (age < 1) return '年齢は1以上で入力してください';

    return '';
};

class Validation {
    static formValidate = (type, value) => {
      switch (type) {
        case 'name':
          return nameValidation(value);
        case 'age':
          return ageValidation(value);
      }
    };
}
  
export default Validation;