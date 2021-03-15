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
            listServices:[
                new Card(
                    1,
                    'Разработка логотипа',
                    'Логотип это графическое изображение, знак или символ, который ' +
                    'используется в качестве инструмента для повышения узнаваемости компании ' +
                    'среди конкурентов. Товарный знак это обязательная составляющая уникального ' +
                    'стиля бренда. Он может присутствовать на различных видах одежды и рекламных материалах.',
                    'От 150 €',
                    '../../images/servicesIcon/logo_dev.svg'
                ),
                new Card(
                    2,
                    'Брендбук',
                    'Brandbook - это документ, описывающий общие правила позиционирования ' +
                    'компания и правила использования фирменного стиля. Брендбук позволяет качественно ' +
                    'интегрировать фирменный стиль в корпоративную среду. Данный документ позволит ' +
                    'упростить задачи связанные с продвижением и позиционированием компании на рынке.',
                    'От 250 €',
                    '../../images/servicesIcon/brandbook.svg'
                ),
                new Card(
                    3,
                    'Разработки фирм. стиля',
                    'Фирменный стиль компании – это набор графических элементов и форм, концепция и ' +
                    'стилистика которых является единой. Визуальный стиль позволяет донести нужную визуальную ' +
                    'информацию до пользователей и сформировать связь с вашим брендом.',
                    'От 350 €',
                    '../../images/servicesIcon/firm_style.svg'
                ),
                new Card(
                    4,
                    'Сайт каталог',
                    'Сайт-каталог – уникальный вид сайта. Являясь каталогом, данный вид веб-страниц ' +
                    'предназначен для точечного описания услуг и предметов, которые предлагаются компанией. ' +
                    'Цели сайта-каталога в том, чтобы привлечь потенциального клиента и ознакомить его удобном ' +
                    'формате с продукцией.',
                    'От 800 €',
                    '../../images/servicesIcon/catalog.svg'
                ),
                new Card(
                    5,
                    'Интернет магазин',
                    'Интернет-магазин является одним из важнейших инструментов современного бизнеса, ' +
                    'магазин в зависимости от размера и функционала будет полезен всем видам бизнеса. Даже при ' +
                    'наличии интернет-магазина нужно его постоянно развивать и дорабатывать, чтобы ' +
                    'успевать отвечать на изменяющиеся запросы покупателей.',
                    'От 1000 €',
                    '../../images/servicesIcon/shop.svg'
                ),
                new Card(
                    6,
                    'Мобильное приложение',
                    'Мобильная разработка это серьёзный инструмент современного бизнеса. ' +
                    'Возможностями данного инструмента являются эффективная коммуникация со своей аудиторией ' +
                    'и сбор её в более удобном, чем соц. сети месте, возможность перенести на мобильные ' +
                    'устройства интернет-магазин и тд.',
                    'От 1300 €',
                    '../../images/servicesIcon/mobile.svg'
                ),
                new Card(
                    7,
                    'Промо сайт',
                    'Промо-сайт является — узконаправленным видом сайта, который направлен исключительно ' +
                    'на эффективную продажу определённого вида товара или услуги с целью получить максимальную прибыль. ' +
                    'Промо-сайт имеет сходства с лендингом, однако в данном случае на первом месте основной товар и ' +
                    'его представление.',
                    'От 800 €',
                    '../../images/servicesIcon/promo.svg'
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
