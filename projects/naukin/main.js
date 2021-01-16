class Card{
    constructor(id,title, description, price) {
        this.id= id
        this.title = title
        this.description = description
        this.price = price
    }
}
class QA{
    constructor(id,question, answer) {
        this.id = id
        this.question = question
        this. answer = answer
    }
}

let app = new Vue({
    el: '#app',
    data(){
        return{
            listWebDesign:[
                new Card(
                    1,
                    'Лендинг',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 350 €'
                ),
                new Card(
                    2,
                    'Сайт визитка',
                    'Сайт-визитка — направлен в первую очередь на ' +
                    'коммуникацию с основной аудиторией. Это место для размещения' +
                    ' главной информации о товаре, услугах и что самое главное о самой ' +
                    'компании.  Такой сайт состоит из одной или нескольких страниц, что ' +
                    'позволяет ознакомиться с важной информацией.',
                    'От 500 €'
                ),
                new Card(
                    3,
                    'Сайт Tilda',
                    'Tilda является профессиональным конструктором сайтов.  ' +
                    'Главная особенность этого конструктора - это работа без языков ' +
                    'программирования, что позволяет сэкономить на услугах программиста. ' +
                    'Tilda - отличный выход для тех, чьи финансы для создания сайта сильно ограничены.',
                    'От 150 €'
                ),
                new Card(
                    4,
                    'Сайт-каталог',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью продвижения определённого ' +
                    'продукта, товара, услуги. Также посадочная страница может быть нужна для оформления' +
                    ' онлайн заказа, онлайн оплаты или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 800 €'
                ),
                new Card(
                    5,
                    'Интернет-магазин',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью продвижения ' +
                    'определённого продукта, товара, услуги. Также посадочная страница может ' +
                    'быть нужна для оформления онлайн заказа, онлайн оплаты или нахождения аудитории' +
                    ' заинтересованной в приобретении продукта.',
                    'От 1000 €'
                ),
                new Card(
                    6,
                    'Мобильное приложение',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 350 €'
                ),
                new Card(
                    7,
                    'Промо-сайт',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 350 €'
                )
            ],
            listDesign:[
                new Card(
                    1,
                    'Разработка логотипа',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 150 €'
                ),
                new Card(
                    2,
                    'Брендбук',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 250 €'
                ),
                new Card(
                    3,
                    'Разработки фирм. стиля',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 350 €'
                ),
                new Card(
                    4,
                    'Печатная продукция',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 40 €'
                ),
                new Card(
                    5,
                    'Разработка упаковки и этикетки',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 150 €'
                ),
                new Card(
                    6,
                    'Дизайн презентаций',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 50 €'
                ),
            ],
            listMarketing:[
                new Card(
                    1,
                    'Сбор семантического ядра',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 50 €'
                ),
                new Card(
                    2,
                    'SMM продвижение',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 100 €'
                ),
                new Card(
                    3,
                    'Анализ и доработка сайта',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 100 €'
                ),
                new Card(
                    4,
                    'SEO-продвижение сайта',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'От 150 €'
                ),
                new Card(
                    5,
                    'Контекстная реклама',
                    'Лендинг пейдж – сайт имеющий одну страницу с целью ' +
                    'продвижения определённого продукта, товара, услуги. Также посадочная' +
                    ' страница может быть нужна для оформления онлайн заказа, онлайн оплаты ' +
                    'или нахождения аудитории заинтересованной в приобретении продукта.',
                    'Сдельная'
                ),
            ],
            listQuestion:[
                new QA(
                    'first',
                    'У меня есть задача1, но не знаю какой инструмент мне необходим для ее решения.',
                    'Это ipsum dolor sit amet, consectetur adipisicing elit. Vel incidunt, maxime, ' +
                    'excepturi sit eaque possimus necessitatibus non ducimus quia aperiam minus deleniti tempora ' +
                    'facilis inventore qui laudantium aliquam dolorum magni?'
                ),
                new QA(
                    'second',
                    'У меня есть задача2, но не знаю какой инструмент мне необходим для ее решения.',
                    'Тоже ipsum dolor sit amet, consectetur adipisicing elit. Vel incidunt, maxime, ' +
                    'excepturi sit eaque possimus necessitatibus non ducimus quia aperiam minus deleniti tempora ' +
                    'facilis inventore qui laudantium aliquam dolorum magni?'
                ),
                new QA(
                    'third',
                    'У меня есть задача3, но не знаю какой инструмент мне необходим для ее решения.',
                    'Работает ipsum dolor sit amet, consectetur adipisicing elit. Vel incidunt, maxime, ' +
                    'excepturi sit eaque possimus necessitatibus non ducimus quia aperiam minus deleniti tempora ' +
                    'facilis inventore qui laudantium aliquam dolorum magni?'
                ),
                new QA(
                    'fourth',
                    'У меня есть задача4, но не знаю какой инструмент мне необходим для ее решения.',
                    'На VUE ipsum dolor sit amet, consectetur adipisicing elit. Vel incidunt, maxime, ' +
                    'excepturi sit eaque possimus посхалка non ducimus quia aperiam minus deleniti tempora ' +
                    'facilis inventore qui laudantium aliquam dolorum magni?'
                ),
            ],
        }
    },
    methods:{
        clicked(id){
            console.log(id)
        }
    }
})