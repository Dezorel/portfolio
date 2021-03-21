let app = new Vue({
    el: '#app',
    data(){
        return{
            postName: '',
            posts: null,
        }
    },
    methods:{
        createPost(temp) {
            this.postName = temp
            let url = this.postName.toLowerCase().trim()
            let arrayOfStrings = url.split(' ')
            this.postName= arrayOfStrings.join('-')
        },
    },
    created: async function (){
            let link = 'http://localhost/github/back-end/naukinTest/posts'
            let res = await fetch(link)
            this.posts = await res.json()        //получаю данные в json
            this.posts = this.posts.reverse()

    }
})
