let app = new Vue({
    el: '#app',
    data(){
        return{
            postName: ''
        }
    },
    created(){
        let url = window.location.hash
        console.log(url)
    }
})