// актуален на 27/01/2023
// v 1.1.2
// массив с говном
const insults = [
    'дебилка',
    'идиотка', 
    'долбоёбка', 
    'хуесоска', 
    'аутистка', 
    'дегенеративная', 
    'хуерыга', 
    'тупорылая', 
    'ебанутая', 
    'шизоидная',
    "омежка", 
    "двачерка", 
    "ебланка", 
    "уёбище", 
    "слепая", 
    "еблище", 
    "несчастное существо", 
    "негр", 
    "бессмысленное существо", 
    "и твоя мать - проститутки",
    "котак",
    "котакбас", 
    "котакжеме", 
    "шешен сыгин", 
    "пидорасина",
    "пидрила",  
    "блядь", 
    "блядина",
    "шлюха",  
    "гидроцефалка",
    'дочь ебаной шлюхи',
    'дочь хуйни',
    "дочь долбоёба",
    "лучше закрой своё ебало",
    "дочь шлюхи",
    "дочь говна",
    "дочь проститутки",
    "кусок говна",
    ];
    
// получение кнопки отправки сообщения
const sendMessageButton = document.querySelectorAll('.im-send-btn');
const toArrSendMessageButton = Array.from(sendMessageButton);
const sendButtonFromArray = toArrSendMessageButton[1];

//  получение поля ввода
const inputField = document.querySelector('.im_editable');

//  получение всех пользователей
const userNameAndSurname = document.querySelectorAll('.im-mess-stack--lnk');

// преобразование нодлиста в массив
const toArrUserNameAndSurname = Array.from(userNameAndSurname);

// получение последнего элемента
const lastElementInArr = toArrUserNameAndSurname[toArrUserNameAndSurname.length-1];


setInterval(() => {
        // рандомизация оскорблений
            const insultsWord = insults[Math.floor(Math.random() * insults.length)]; 
        // проверка пользователя
            if (lastElementInArr.textContent = lastElementInArr) {
                inputField.textContent = "@imay88 (Ирина Бормотина) " + insultsWord;
                sendButtonFromArray.click();
            }  else{
                console.log('something went wrong');
            }
}, 1500);