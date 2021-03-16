let app = new Vue({
    el: '#app',
    data(){
        return{
            postName: ''
        }
    },
    methods:{
        createPost() {
            let url = this.postName.toLowerCase().trim()
            let arrayOfStrings = url.split(' ')
            this.postName = arrayOfStrings.join('-')
        }
    }
})
