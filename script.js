class ButtonCheckBox {
    constructor(title, type) {
        this.title = title
        this.type = type
        this.isClick = false
    }
    changeStyle(){
        this.isClick = !this.isClick
        this.write()
    }
    write(){
        if(this.isClick){
            app.message += this.type +':'+ this.title + ' '
        }
        else {
            if(app.message.indexOf(this.title)){
                app.message = app.message.replace(this.type +':'+ this.title, '');
            }
        }

    }
}
class ServicePost{
    constructor(title, description) {
        this.title = title
       this.description = description
    }
}


let app = new Vue({
    el: '#up',
    data: {
        message: '',
        name: '',
        address: '',
        isSubmit: false,
        isUp: false,
        todoButtonList:[
            new ButtonCheckBox(
                'Вёрстка',
                'Необходимо сделать'
            ),
            new ButtonCheckBox(
                'SPA',
                'Необходимо сделать'
            ),
            new ButtonCheckBox(
                'Лэндинг',
                'Необходимо сделать'
            ),
            new ButtonCheckBox(
                'Сайт под ключ',
                'Необходимо сделать'
            ),
            new ButtonCheckBox(
                'Мобильное приложение',
                'Необходимо сделать'
            ),
            new ButtonCheckBox(
                'Проконсультироваться',
                'Необходимо сделать'
            ),
        ],
        priceList:[
            new ButtonCheckBox(
                'Минимальный',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '80$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '100$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '250$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                '400$',
                'Бюджет'
            ),
            new ButtonCheckBox(
                'Неограниченный',
                'Бюджет'
            ),
        ],
        serviceList: [
            new ServicePost(
                'Вёрстка',
                'Создание сайта с нуля по готовому макету. Создание функционала и необхожимых\n' +
                '                        анимации. Загрузка сайта на хостинг. Покупка доменного имени (если есть необходимость).'
            ),
            new ServicePost(
                'Адаптив',
                'Создание адаптивва для вашего сайта. Адаптив это правильное расположение\n' +
                '                            элементов на разных устройствах (мобильных телефонах, планшетах, экранов телевизоров).'
            ),
            new ServicePost(
                'SPA',
                'Создание SPA с помощью фрэймворка Vue JS. SPA - одностраничное приложение, все действия' +
                            'на таком сайте происходят без перезагрузки страницы.'
            ),
            new ServicePost(
                'Android',
                'Разработка и создание android-приложения про готовому макету.'
            ),
            new ServicePost(
                'Тех. поддержка',
                'Проверка сайта на ошибки и вирусы. Доработка и обновление компонентов сайта.'
            ),
        ],
    },
    methods:{
        checkForm(){
            if(this.name.length > 0 && this.address.length >0 && this.message.length > 0){
                this.isSubmit = true
            }
            else{
                this.isSubmit = false
            }
        },
        checkUp(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            //console.log( "Текущая прокрутка: " + scrollTop )
            if(scrollTop < 300){
                this.isUp = false

            }
            else{
                this.isUp = true

            }
        },
    }
})