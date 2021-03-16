let app = new Vue({
    el: '#app',
    data(){
        return{
            postName: '',
            post: null, //конкретный пост который прсматриваем сейчас
            posts:null  //все отсальные посты
        }
    },
    async created(){
        let url = window.location.hash
        this.postName = url.substr(1,url.length)

        let link = 'http://localhost/back-end/naukinTest/posts/'+ this.postName
        let res = await fetch(link)
        this.post = await res.json()        //получаю данные в json
        console.log(this.post[0].data)

        let link2 = 'http://localhost/back-end/naukinTest/posts'
        let res2 = await fetch(link2)
        this.posts = await res2.json()        //получаю данные в json
        this.posts = this.posts.reverse()
    }
})