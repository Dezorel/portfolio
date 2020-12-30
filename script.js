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
let app = new Vue({
    el: '#up',
    data: {
        message: '',
        name: '',
        address: '',
        isSubmit: false,
        todoButtonList:[
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
                '50$',
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
                'Неограниченный',
                'Бюджет'
            ),
        ],
    },
    methods:{
        checkForm(){
            if(this.name.length > 0 && this.address.length >0 && this.message.length > 0){
                console.log(1)
                this.isSubmit = true
            }
            else{
                console.log(2)
                this.isSubmit = false
            }
        }
    }
})