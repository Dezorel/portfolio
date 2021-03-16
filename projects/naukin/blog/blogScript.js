let app = new Vue({
    el: '#app',
    methods:{
        addInLocalStorage(){
            let id = 10
            if(id){
                localStorage.postID = id
            }
        }
    }
})
