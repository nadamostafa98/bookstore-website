// importing all necessary views and the router javascript code

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import Airtable from "airtable";

// creating a new Vue instance
const app = createApp(App)

// a function to manage delays
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//defining temporary arrays to store data received from the database (airtable)

const temp_fiction_books = [];
const temp_nonfiction_books = [];
const temp_audio_books = [];
const temp_e_books = [];
const temp_ya_books = [];
const temp_kids_books = [];
const temp_all_books = [];
const temp_banner_books = [];


// Start API calls to get data from the database (airtable)

const base = new Airtable({ apiKey: 'patYqGigP1h6wsxqD.b7759fb0e3e11f9e8eacfc3748b0ffcfaadc106f138ed31934039d327a40d3f1' }).base('appCw5PrKAtgb5AAp');

// Reading all records from the 'all books' table, for each record we get the: bookname, image, price, description, author and genre

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

        if (record.get('useBanner') == 'yes') { //to identify the books that have banners and will be added to the carousel in the homepage
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

        for (let i = 0; i < g.length; i++) {
            if (g[i] == 'fiction') {
                temp_fiction_books.push(mybook);
            }

            if (g[i] == 'non-fiction') {
                temp_nonfiction_books.push(mybook);
            }
            if (g[i] == 'audio books') {
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


/* wait for three seconds after refreshing the website to give enough time for the data to be retrieved from the database */

sleep(3000).then(() => {

    /* define global variables for each array of a genre to be easily accessed throughout all views */

    app.config.globalProperties.fiction_books = ref(temp_fiction_books);
    app.config.globalProperties.nonfiction_books = ref(temp_nonfiction_books);
    app.config.globalProperties.audio_books = ref(temp_audio_books);
    app.config.globalProperties.e_books = ref(temp_e_books);
    app.config.globalProperties.ya_books = ref(temp_ya_books);
    app.config.globalProperties.kids_books = ref(temp_kids_books);
    app.config.globalProperties.all_books = ref(temp_all_books);
    app.config.globalProperties.banner_books = ref(temp_banner_books);

    /*define a global array for the cart to keep track of the books the user adds to their cart */

    app.config.globalProperties.cart = ref([
        {
            bookname: String,
            image: String,
            price: Number,
            description: String,
            author: String,
            amount: Number
        }
    ]);

    app.use(router) // to allow the vue instance to use the router 
    app.mount('#app') //to connect the vue instace with the html div with id 'app'
});


