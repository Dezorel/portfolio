class Post {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

Vue.component('card-item',{
    props: {
        name: Object,
    },
    template: '<div class="col mb-4 mt-4"  >\n' +
        '            <div class="card">\n' +
        '                <div class="card-body">\n' +
        '                    <h5 class="card-title">{{name.text}}</h5>\n' +
        '                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in ' +
        'to additional content. This content is a little bit longer.</p>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
})

var app = new Vue({
    el: '#app',
    data: {
        search: '',
        postList:[
            new Post(
                'Картошка',
                'Это же Картошка. В считанные секунды может стать твоей',
            ),
            new Post(
                'Творог',
                'Это же Творог. В считанные секунды может стать твоим',
            ),
            new Post(
                'Томаты',
                'Это же Томаты. В считанные секунды могут стать твоими',
            ),
            new Post(
                'Торт',
                'Это же Торт. В считанные секунды может стать твоим',
            ),
            new Post(
                'Морковь',
                'Это же Морковь. В считанные секунды может стать твоей',
            ),
            new Post(
                'Макароны',
                'Это же Макароны. В считанные секунды могут стать твоими',
            ),
        ]
    },
    computed: {
        filteredList() {
            return this.postList.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
})


