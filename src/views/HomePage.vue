<script setup>
function addToCart(arr, book) {
    var x = arr.length;
    for (let i = 0; i < x; i++) {
        var y = arr[i];
        if (y.bookname == book.bookname) {
            arr[i].amount++;
            return arr;
        }
    }
    var z = {
        bookname: book.bookname,
        image: book.image,
        price: book.price,
        description: book.description,
        author: book.author,
        amount: 1
    }
    arr.push(z);
    return arr;
}
</script>
<template>
    <!-- Start homepage -->
    <div id="homepage">

        <div id="mycarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <router-link custom v-slot="{ navigate }"
                        :to="{ name: 'Book', params: { bookname: this.banner_books.value[0].bookname }, query: { image: this.banner_books.value[0].image, price: this.banner_books.value[0].price, author: this.banner_books.value[0].author, description: this.banner_books.value[0].description } }">
                        <img @click="navigate" class="d-block w-100" :src="this.banner_books.value[0].banner" alt="slide">
                    </router-link>
                </div>
                <div class="carousel-item">
                    <router-link custom v-slot="{ navigate }"
                        :to="{ name: 'Book', params: { bookname: this.banner_books.value[1].bookname }, query: { image: this.banner_books.value[1].image, price: this.banner_books.value[1].price, author: this.banner_books.value[1].author, description: this.banner_books.value[1].description } }">
                        <img @click="navigate" class="d-block w-100" :src="this.banner_books.value[1].banner"
                            alt="Second slide">
                    </router-link>
                </div>
            </div>
            <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Fiction</h2>
            <div class="row justify-content-center">
                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">
                    <img style=" object-fit: fill" height="250" :src="this.fiction_books.value[index].image">
                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.fiction_books.value[index].bookname }, query: { image: this.fiction_books.value[index].image, price: this.fiction_books.value[index].price, author: this.fiction_books.value[index].author, description: this.fiction_books.value[index].description } }">{{
                                this.fiction_books.value[index].bookname }}</router-link>
                        <h5 class="d-flex justify-content-center">${{ this.fiction_books.value[index].price }}</h5>
                        <a href="#"
                            v-on:click="this.cart.value = addToCart(this.cart.value, this.fiction_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>
                    </div>
                </ul>
            </div>
            <router-link :to="{ name: 'GenrePage', params: { genrename: 'fiction' } }"
                class="row justify-content-center my-3">
                see all</router-link>
            <div class="line-3">
                <hr>
            </div>
        </div>

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Non-Fiction</h2>
            <div class="row justify-content-center">
                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">
                    <img style=" object-fit: fill" height="250" :src="this.nonfiction_books.value[index].image">
                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.nonfiction_books.value[index].bookname }, query: { image: this.nonfiction_books.value[index].image, price: this.nonfiction_books.value[index].price, author: this.nonfiction_books.value[index].author, description: this.nonfiction_books.value[index].description } }">{{
                                this.nonfiction_books.value[index].bookname }}</router-link>
                        <h5 class="d-flex justify-content-center">${{ this.nonfiction_books.value[index].price }}</h5>
                        <a href="#"
                            v-on:click="this.cart.value = addToCart(this.cart.value, this.nonfiction_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>
                    </div>
                </ul>
            </div>
            <router-link :to="{ name: 'GenrePage', params: { genrename: 'nonfiction' } }"
                class="row justify-content-center my-3"> see all</router-link>
            <div class="line-3">
                <hr>
            </div>
        </div>

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Audio Books</h2>
            <div class="row justify-content-center">
                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">
                    <img style=" object-fit: fill" height="250" :src="this.audio_books.value[index].image">
                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.audio_books.value[index].bookname }, query: { image: this.audio_books.value[index].image, price: this.audio_books.value[index].price, author: this.audio_books.value[index].author, description: this.audio_books.value[index].description } }">{{
                                this.audio_books.value[index].bookname }}</router-link>
                        <h5 class="d-flex justify-content-center">${{ this.audio_books.value[index].price }}</h5>
                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.audio_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>
                    </div>
                </ul>
            </div>
            <router-link :to="{ name: 'GenrePage', params: { genrename: 'audiobooks' } }"
                class="row justify-content-center my-3"> see all</router-link>
            <div class="line-3">
                <hr>
            </div>
        </div>

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">e-books</h2>
            <div class="row justify-content-center">
                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">
                    <img style=" object-fit: fill" height="250" :src="this.e_books.value[index].image">
                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.e_books.value[index].bookname }, query: { image: this.e_books.value[index].image, price: this.e_books.value[index].price, author: this.e_books.value[index].author, description: this.e_books.value[index].description } }">{{
                                this.e_books.value[index].bookname }}</router-link>
                        <h5 class="d-flex justify-content-center">${{ this.e_books.value[index].price }}</h5>
                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.e_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>
                    </div>
                </ul>
            </div>
            <router-link :to="{ name: 'GenrePage', params: { genrename: 'ebooks' } }"
                class="row justify-content-center my-3">
                see all</router-link>
            <div class="line-3">
                <hr>
            </div>
        </div>

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Young Adults</h2>
            <div class="row justify-content-center">
                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">
                    <img style=" object-fit: fill" height="250" :src="this.ya_books.value[index].image">
                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.ya_books.value[index].bookname }, query: { image: this.ya_books.value[index].image, price: this.ya_books.value[index].price, author: this.ya_books.value[index].author, description: this.ya_books.value[index].description } }">{{
                                this.ya_books.value[index].bookname }}</router-link>
                        <h5 class="d-flex justify-content-center">${{ this.ya_books.value[index].price }}</h5>
                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.ya_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>
                    </div>
                </ul>
            </div>
            <router-link :to="{ name: 'GenrePage', params: { genrename: 'ya' } }" class="row justify-content-center my-3">
                see
                all</router-link>
            <div class="line-3">
                <hr>
            </div>
        </div>

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Kids</h2>
            <div class="row justify-content-center">
                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">
                    <img style=" object-fit: fill" height="250" :src="this.kids_books.value[index].image">
                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.kids_books.value[index].bookname }, query: { image: this.kids_books.value[index].image, price: this.kids_books.value[index].price, author: this.kids_books.value[index].author, description: this.kids_books.value[index].description } }">{{
                                this.kids_books.value[index].bookname }}</router-link>
                        <h5 class="d-flex justify-content-center">${{ this.kids_books.value[index].price }}</h5>
                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.kids_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>
                    </div>
                </ul>
            </div>
            <router-link :to="{ name: 'GenrePage', params: { genrename: 'kidsbooks' } }"
                class="row justify-content-center my-3"> see all</router-link>
            <div class="line-3">
                <hr>
            </div>
        </div>
    </div>
    <!-- End homepage -->
</template>
<style scoped>
a:hover {
    text-decoration: none;
}

@media (max-width: 768px) {
    h5 {
        font-size: 11px;

    }
}

.card {
    justify-content: center;
    padding: 1px;
    margin: 3px;
    box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
    border: none;
    border-radius: 0;

}

body {
    overflow-x: auto;
    overflow-y: auto;
    background: #f8f8f8;
    font-family: "Source Sans Pro", sans-serif;
}

h1 {
    font-size: 3.6em;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0;
    color: #333;
}</style>