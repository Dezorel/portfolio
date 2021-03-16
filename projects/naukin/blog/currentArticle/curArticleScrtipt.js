let app = new Vue({
    el: '#app',
    data(){
        return{
            postName: ''
        }
    },
    created(){
        let url = window.location.hash
        if(url){
            console.log(url)
            this.postName = url.substr(1,url.length)
            console.log(this.postName)
        }
    }
})