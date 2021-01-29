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
                'Интернет-магазин',
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
                'Создание адаптива для вашего сайта. Адаптив это правильное расположение\n' +
                '                            элементов на разных устройствах (мобильных телефонах, планшетах, экранах телевизоров).'
            ),
            new ServicePost(
                'Интернет-магазин',
                'Интернет-магазин — сайт, позволяющий пользователям онлайн, в ' +
                'своём браузере сформировать заказ на покупку, выбрать способ оплаты и доставки ' +
                'заказа, оплатить заказ.'
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
        faqList: [
            new ServicePost(
                'Как быстро будет выполнен заказ?',
                'Заказ будет выполнен в сроки, сроки выполнения обговариваются при составлении договора. ' +
                'В среднем на простой лэндинг уходит от 2х до 3х недель.'
            ),
            new ServicePost(
                'Можно ли вносить правки сайта после заключения договора?',
                'Данный пункт обговаривается в договоре. Я не предоставляю возможность правки структуры приложения, сайта'
            ),
            new ServicePost(
                'Работаете по договору?',
                'Да, перед началом работы заключается договор и только потом начинается работа над вашим проектом.'
            ),
            new ServicePost(
                'Работаете по предоплате?',
                'Да. Размер предоплаты 30-50% от финальной суммы. Можно договорится о разделения проекта на этапы, ' +
                'каждый этап имеет предоплату и постоплату. Для меня предоплата не способ получения денег ни за что, а гарантия ' +
                'вовлечённости обеих сторон в процесс разработки.'
            ),
            new ServicePost(
                'У меня нет готового дизайн-макета сайта, предоставляете ли вы услуги дизайнера?',
                'Я лично не предоставляю услуги дизайнера, однако я могу порекомендовать человека, который предоставляет' +
                ' данную услугу.'
            ),

        ],
    },
    methods:{
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