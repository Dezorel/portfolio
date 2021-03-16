let app = new Vue({
    el: '#app',
    data(){
        return{
            postName: '',
            posts: null,
        }
    },
    async created(){
        let url = window.location.hash
        if(url){
            this.postName = url.substr(1,url.length)
            let arrayOfStrings = this.postName.split('-')
            let result = arrayOfStrings.join(' ').trim()
            console.log(result)
        }
        let link = 'https://jsonplaceholder.typicode.com/posts'
        let res = await fetch(link)
        this.posts = await res.json()        //получаю данные в json
        console.log(this.posts)
    }
})