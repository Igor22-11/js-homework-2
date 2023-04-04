/* Task 1 */


const firstName = prompt('Введите ваше имя:', '');
const lastName = prompt('Введите вашу фамилию:', '');
const nickName = prompt('Введите ваш никнейм:', '');

if (!!firstName && !!lastName && !!nickName) {

  alert(`Привет ${firstName} ${lastName}`)

} else if (!!firstName && !!lastName) {

  alert(`Привет ${firstName} ${lastName}`)

} else if (!!lastName && !!nickName) {

  alert(`Привет ${nickName}`)

} else if (!!firstName && !!nickName) {

  alert(`Привет ${firstName}`)

} else {

  alert('Привет Noname')
}



/* Task 2 */

const enterNumber = prompt('Введите любое число:', '');


if (!isNaN(enterNumber)) {
  let result = 'Введённое вами число';

  if (+enterNumber > 100) {
    result += ` больше ста`
  } else if (+enterNumber < 100) {
    result += ` меньше ста`
  } else {
    result += ` равно сто`
  }
  if (+enterNumber % 2 === 0) {
    result += ` , четное`
  } else {
    result += ` , нечетное`
  }
  if (+enterNumber < 0) {
    result += ` , отрицательное`
  } else if (+enterNumber > 0) {
    result += ` , положительное`
  } else {
    result += ` , равно 0`
  }

  if (Number.isInteger(+enterNumber)) {
    result += ` , недробное`
  } else {
    result += ` , дробное`
  }
  alert(result)
} else {
  let rusLetter = /[а-яё]/i.test(enterNumber);
  let engLetter = /[a-z]/i.test(enterNumber);
  if (rusLetter) {
    alert('Введен русский язык');
  } else if (engLetter) {
    alert('Введен английский язык');
  } else {
    alert('Язык не определен')
  }
}

/* Task 3.1 */

const number_one = +prompt('Введите число №1:', '');
const number_two = +prompt('Введите число №2:', '');

(!isNaN(number_one) && !isNaN(number_two)) ? alert(`Сумма: ${number_one + number_two}`) : alert('Введены не числовые значения!')

/* Task 3.2 */

const yourName = prompt('Введите Ваше имя:', '');
const yourAge = +prompt('Сколько Вам лет?', '18');

(!isNaN(yourAge)) ?
  (yourAge >= 18) ? alert(`Добро пожаловать ${yourName}`) : alert(`Простите, ${yourName}, доступ закрыт`)
  : alert('Введён некоректный возраст!')


/* Task 4 */

const getNumber = prompt('Введите число от 0 до 9', '');

if (!isNaN(getNumber) && getNumber !== null) {
  switch (+getNumber) {
    case 0:
      alert('Ноль');
      break;

    case 1:
      alert('Один');
      break;

    case 2:
      alert('Два');
      break;

    case 3:
      alert('Три');
      break;

    case 4:
      alert('Четыре');
      break;

    case 4:
      alert('Четыре');
      break;

    case 5:
      alert('Пять');
      break;

    case 6:
      alert('Шесть');
      break;

    case 7:
      alert('Семь');
      break;

    case 8:
      alert('Восемь');
      break;

    case 9:
      alert('Девять');
      break;

    default:
      alert('Введенное значение находится вне диапазона 0 - 9');
      break
  }
} else {
  alert('Введены некорректные данные')
}