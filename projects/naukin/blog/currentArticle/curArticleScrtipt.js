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
            this.postName = url.substr(1,url.length)
            let arrayOfStrings = this.postName.split('-')
            let result = arrayOfStrings.join(' ').trim()
            console.log(result)
        }
    }
})