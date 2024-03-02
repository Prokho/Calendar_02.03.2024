

function SpecialistController(base_selector){
    this.base_selector = base_selector;// this.base_selector - создали атрибут для дальнейшего использования, это поле которое будет хранить селектор и отдавать его тем функциям который им будет нужен, селектор - это последовательность символов позволяющая отличить один элемент от другого
   // this.api = new API();//создание обьекта по существующей функции в другом файле. Импорт происходит через хтмл файл. Смотри файл api.js
    this.specialistId = null;// обьявление переменной, this нужно для обозначентя области видимости этой переменной, она будет работать на уровне обьекта.
    this.token = null;// создали переменную для хранения токена специалиста. При отправке запроса мы должны передавать токен специалиста для его авторизации
    //почитать local storage js. https://learn.javascript.ru/localstorage
    this.start = function(){
    this.loadAuthData(); //вызвали функцию на 15ой строке   
    } 
    this.login = function(){

    }
    this.loadAuthData = function(){
        let specialist_id = localStorage.getItem(specialistIdKeyStorage);//получение ай ди специалиста от сервера
        let token = localStorage.getItem(tokenKeyStorage);//получение токена от сервера
        

        if(!token){
            var formData = new FormData();
            formData.append('username', document.getElementById('username').value)
            formData.append('password', document.getElementById('auth_pass').value)
            
            fetch('/api-token-auth/', { //   /api-token-auth/ - это урл общей авторизации
                method: 'POST',    
                body: formData
                })//на этом этапе происходит отправка запроса и получение ответа и предполагаем, что получем ответ в виде строки в формате json (для данного случая)
                .then(function(response){
                    return response.json();//здесь из ответа сервера в виде строки (см обьяснения выше) формируем js объект
                })
                .then(function(data){
                    localStorage.setItem(tokenKeyStorage, data.token)//здесь обрабатываем обьект и сохраняем все в localStorage
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });
            
    }}
}

//если нет, то запросить авторизацию
// смотри пример https://www.articleshub.net/2023/05/js-kak-sdelat-avtorizatsiyu.html, только задать правильные имена полей
// смотри https://learn.javascript.ru/formdata, 

//см пример на https://learn.javascript.ru/localstorage

//дз на 11.12.2023 - получить ай ди специалиста, для этого нужно дополнить апи (джанго), для этого нужно дописать код в соответствующих файлах
//в папке specialist в файлах views и url дописать обработчик запросов возвращающий ай ди специалиста по его юзернейму.

//нужно сделать поиск для js - js должен найти кнопку "войти" и при нажатии на кнопку отреагировать на нажатие кнопки - пароль и емейл дхс отправляет на сервер и получает токен
// далее сохраняет токен в локалсторедж.
// запросы - js поиск элементов, js привязка к событиям, 
// то есть нужно взять 2 инпута и по селектору 

// по строкам 22, 23 в то что в кавычках брать данные из формы psychologist, то есть пароль и логин должен каждый раз приходить из формы
// то есть нужно взять 2 инпута и по селектору и вставить в строку 22, 23

//нарисовать интерфейс специалиста (нарисовать личный кабинет с нужными полями)

//далее js получает данные от отправленного запроса и должен отрисовать личный кабинет
//разобрать весь код который писался до этого

//ДЗ 1 - вывести сообщение о том, что поле юзернейм и пассворд не заполнены
// найти инпуты по их ай ди и сохранить их в отдельные переннын (строки 18,19)
// на строке 20 (в иф там где токен) проверить, что переменные не равны null
// далее в теле того же ифа завести 2 переменный и в каждые сохранить значения из своего инпута
//всего две строки кода
//написать еще один иф - проверить, что юзернейм после удаления начальных и конечных пробелов не пустой
//все то же самое сделать для пароля без удаления (пароль может быть пробелом)

//Дз 2 - прописать логику успешного получения токена (после строки 33)
//  
