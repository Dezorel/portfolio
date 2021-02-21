class Card{
    constructor(id,title, description, price, urlPicture) {
        this.id= id
        this.title = title
        this.description = description
        this.price = price
        this.urlPicture = urlPicture
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
                    'От 350 €',
                    'images/servicesIcon/landing.svg'
                ),
                new Card(
                    2,
                    'Сайт визитка',
                    'Сайт-визитка — направлен в первую очередь на ' +
                    'коммуникацию с основной аудиторией. Это место для размещения' +
                    ' главной информации о товаре, услугах и что самое главное о самой ' +
                    'компании.  Такой сайт состоит из одной или нескольких страниц, что ' +
                    'позволяет ознакомиться с важной информацией.',
                    'От 500 €',
                    'images/servicesIcon/business_site.svg'
                )
            ],
            listDesign:[
                new Card(
                    1,
                    'Разработка логотипа',
                    'Логотип это графическое изображение, знак или символ, который ' + 
                     'используется в качестве инструмента для повышения узнаваемости компании ' +
                     'среди конкурентов. Товарный знак это обязательная составляющая уникального ' +
                     'стиля бренда. Он может присутствовать на различных видах одежды и рекламных материалах.',
                    'От 150 €',
                    'images/servicesIcon/logo_dev.svg'
                ),
                new Card(
                    2,
                    'Брендбук',
                    'Brandbook - это документ, описывающий общие правила позиционирования ' +
                    'компания и правила использования фирменного стиля. Брендбук позволяет качественно ' +
                    'интегрировать фирменный стиль в корпоративную среду. Данный документ позволит ' +
                    'упростить задачи связанные с продвижением и позиционированием компании на рынке.',
                    'От 250 €',
                    'images/servicesIcon/brandbook.svg'
                ),
            ],
            listMarketing:[
                new Card(
                    1,
                    'Сбор семантического ядра',
                    'Семантическое ядро — это разделённые по категориям ключевые слова, ' +
                    'связанные со структурой вашего сайта, которые происходят от запросов в интернете. ' +
                    'Количество запросов формируется на основе популярности отрасли и от определённого ' +
                    'вида товара. Ядро необходимо для оптимизации сайта под определённые поисковые запросы.',
                    'От 50 €',
                    'images/servicesIcon/semantic_core.svg'
                ),
                new Card(
                    2,
                    'SMM продвижение',
                    'SMM - это уникальное направление интернет-маркетинга, включающее ' +
                    'в себя весь список возможностей продвижения и достижения целей в социальных ' +
                    'сетях. В данной отрасли есть разные виды проектов и способов их продвижения, ' +
                    'однако главной целью остаётся увеличение популярности бренда, а так же ' +
                    'продажа товаров',
                    'От 100 €',
                    'images/servicesIcon/smm.svg'
                )
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
