import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import Airtable from "airtable";


const app = createApp(App)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const temp_fiction_books = [];
const temp_nonfiction_books = [];
const temp_audio_books = [];
const temp_e_books = [];
const temp_ya_books = [];
const temp_kids_books= [];
const temp_all_books = [];
const temp_banner_books = [];

const base = new Airtable({ apiKey: 'patYqGigP1h6wsxqD.b7759fb0e3e11f9e8eacfc3748b0ffcfaadc106f138ed31934039d327a40d3f1' }).base('appCw5PrKAtgb5AAp');

base('All books').select({
    view: "All books"
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function (record) {
        var photoInfo = record.get('image');
        const n = record.get('bookname');
        const p = record.get('price');
        const a = record.get('Name (from author)');
        const g = record.get('Name (from genre)')
        const d = record.get('Description');

        if(record.get('useBanner') == 'yes'){
            const bannerimage = record.get('bannerImage');
            var bannerBook = {
                bookname: n,
            image: photoInfo[0].url,
            price: p,
            description: d,
            author: a[0],
            banner: bannerimage[0].url
            } 
            temp_banner_books.push(bannerBook);
        }
        var mybook = {
            bookname: n,
            image: photoInfo[0].url,
            price: p,
            description: d,
            author: a[0]
        };
        
        console.log('Retrieved', n, p, a, g, d);
        temp_all_books.push(mybook);
        
        for(let i = 0; i < g.length; i++){
            if(g[i] == 'fiction'){
                temp_fiction_books.push(mybook);
            }
            
            if (g[i] == 'non-fiction') {
                temp_nonfiction_books.push(mybook);
            }
            if(g[i] == 'audio books'){
                temp_audio_books.push(mybook);
    
            }
            if (g[i] == 'e-books') {
                temp_e_books.push(mybook);
            }
            if (g[i] == 'ya') {
                temp_ya_books.push(mybook);    
            }
            if (g[i] == 'kids books') {
                temp_kids_books.push(mybook);    
            }
        }

        
    });
    fetchNextPage();
}
    , function done(err) {
        if (err) { console.error(err); return; }
    });



sleep(3000).then(() => {
    console.log('fiction doneeeee' + temp_fiction_books.length);
    console.log('nonfiction doneeeee' + temp_nonfiction_books.length);
    console.log('audio doneeee ' + temp_audio_books.length);
    console.log('e doneeeeee ' + temp_e_books.length);
    console.log('ya doneeeeee ' + temp_ya_books.length);
    console.log('skids doneeeee ' + temp_kids_books.length);

    app.config.globalProperties.fiction_books = ref(temp_fiction_books);
    app.config.globalProperties.nonfiction_books = ref(temp_nonfiction_books);
    app.config.globalProperties.audio_books = ref(temp_audio_books);
    app.config.globalProperties.e_books = ref(temp_e_books);
    app.config.globalProperties.ya_books = ref(temp_ya_books);
    app.config.globalProperties.kids_books = ref(temp_kids_books);
    app.config.globalProperties.all_books = ref(temp_all_books);
    app.config.globalProperties.banner_books = ref(temp_banner_books);

    app.config.globalProperties.cart = ref([
        {
        bookname:String,
        image: String,
        price: Number,
        description:String,
        author: String,
        amount: Number
    }
]);
    app.use(router)
    app.mount('#app')
});


