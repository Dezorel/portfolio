let app = new Vue({
    el: '#app',
    methods:{
        addPostIDInLocalStorage(id){
            if(id){
                localStorage.postID = id
            }
        }
    }
})
