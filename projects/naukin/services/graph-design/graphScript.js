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
                    'Печатная продукция',
                    'Материалы печатной продукцию выполняют множество разных целей. ' +
                    'Визитки, плакаты, журналы - всё это необходимо для качественного представления компании.',
                    'От 40 €',
                    '../../images/servicesIcon/print_products.svg'
                ),
                new Card(
                    5,
                    'Разработка упаковки и этикетки',
                    'Упаковка — важный фактор влияющий на первое впечатление, благодаря её виду потребитель ' +
                    'выделит ваш товар среди конкурентов. Также упаковка выполняет следующие функции: защита товара и ' +
                    'увеличение внимания потребителя.',
                    'От 150 €',
                    '../../images/servicesIcon/label_dev.svg'
                ),
                new Card(
                    6,
                    'Дизайн презентаций',
                    'Презентация — это возможность в визуальном формате подать рекламную и не только информацию. ' +
                    'Из преимуществ этого инструмента можно выделить использование графики, анимации и звукового ' +
                    'сопровождения. Для презентации дизайн разрабатывается, основываясь на фирменном стиле компании.',
                    'От 50 €',
                    '../../images/servicesIcon/presentation_design.svg'
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
