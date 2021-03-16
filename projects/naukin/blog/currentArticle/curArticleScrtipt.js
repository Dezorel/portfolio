let app = new Vue({
    el: '#app',
    data(){
        return{
            postNameToAPI: '',
            post: null, //конкретный пост который прсматриваем сейчас
            posts:null , //все отсальные посты
            postName: '',
        }
    },
    methods:{
    createPost(temp) {
        this.postName = temp
        let url = this.postName.toLowerCase().trim()
        let arrayOfStrings = url.split(' ')
        let result = arrayOfStrings.join('-')
        this.postName = this.translit(result)
        document.location.reload(true);
    },
    translit(str){
        let ru=("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-")
        let en=("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-C-c-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya").split("-")
        let res = '';
        for(var i=0, l=str.length; i<l; i++)
        {
            var s = str.charAt(i), n = ru.indexOf(s);
            if(n >= 0) { res += en[n]; }
            else { res += s; }
        }
        return res;
    },
},
    async created(){
        let url = window.location.hash
        this.postNameToAPI = url.substr(1,url.length)

        let link = 'http://localhost/back-end/naukinTest/posts/'+ this.postNameToAPI
        let res = await fetch(link)
        this.post = await res.json()        //получаю данные в json
        console.log(this.post[0].data)

        let link2 = 'http://localhost/back-end/naukinTest/postswithout/'+this.postNameToAPI
        let res2 = await fetch(link2)
        this.posts = await res2.json()        //получаю данные в json
        this.posts = this.posts.reverse()
    }
})