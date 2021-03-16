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
                    'Сбор семантического ядра',
                    'Семантическое ядро — это разделённые по категориям ключевые слова, ' +
                    'связанные со структурой вашего сайта, которые происходят от запросов в интернете. ' +
                    'Количество запросов формируется на основе популярности отрасли и от определённого ' +
                    'вида товара. Ядро необходимо для оптимизации сайта под определённые поисковые запросы.',
                    'От 50 €',
                    '../../images/servicesIcon/semantic_core.svg'
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
                    '../../images/servicesIcon/smm.svg'
                ),
                new Card(
                    3,
                    'Анализ и доработка сайта',
                    'Анализ и доработка готового сайта включают в себя действия направленные ' +
                    'на поиск ошибок и слабых мест сайта с последующим их исправлением. По мимо этого в ' +
                    'услугу входит внутрянняя и внешняя SEO-оптимизация сайта',
                    'От 100 €',
                    '../../images/servicesIcon/analiz_site.svg'
                ),
                new Card(
                    4,
                    'SEO-продвижение сайта',
                    'SEO-продвижение - это ряд действий, направленных на улучшение показателей ' +
                    'веб-сайта в результатах поисковых систем. Сюда входят внутренняя и внешняя оптимизация ' +
                    'сайта, анализ конкурентов, формирование структуры на основе данных семантического ядра.',
                    'От 150 €',
                    '../../images/servicesIcon/seo.svg'
                ),
                new Card(
                    5,
                    'Контекстная реклама',
                    'Контекстная реклама — это уникальный вид интернет-рекламы, который подбирается ' +
                    'с учётом тематики интернет-сайта. Реклама показываются только целевой аудитории, за счет чего ' +
                    'данный способ продвижения позволяет получать увеличенную посещаемость и находить клиентов готовых ' +
                    'к покупке.',
                    'Сдельная',
                    '../../images/servicesIcon/advert.svg'
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
