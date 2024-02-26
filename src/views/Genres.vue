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
    <!-- Start Genre Page -->

    <div class="container my-5">
        <div v-if="this.$route.params.genrename == 'fiction'">
            <h1 class="d-flex justify-content-center my-5">FICTION</h1>
            <div class="row my-5" v-for="book in this.fiction_books.value">
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <router-link
                            :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                            <h2>{{ book.bookname }}</h2>
                        </router-link>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{name: 'Author', params:{authorname: book.author}}"><h4 >By: {{ book.author }}</h4></router-link>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <h5>${{ book.price }}</h5>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                            class="btn  btn-dark btn-lg py-2">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </button>
                    </div>
                    </div>

                </div>
                <div class="line-3">
                    <hr>
                </div>
            </div>
        </div>
        <div v-if="this.$route.params.genrename == 'nonfiction'">
            <h1 class="d-flex justify-content-center my-5">NON-FICTION</h1>
            <div class="row my-5" v-for="book in this.nonfiction_books.value">
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <router-link
                            :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                            <h2>{{ book.bookname }}</h2>
                        </router-link>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{name: 'Author', params:{authorname: book.author}}"><h4 >By: {{ book.author }}</h4></router-link>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <h5>${{ book.price }}</h5>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                            class="btn  btn-dark btn-lg py-2">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </button>
                    </div>
                    </div>

                </div>
                <div class="line-3">
                    <hr>
                </div>
            </div>
        </div>
        <div v-if="this.$route.params.genrename == 'ebooks'">
            <h1 class="d-flex justify-content-center my-5">E-BOOKS</h1>
            <div class="row my-5" v-for="book in this.e_books.value">
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <router-link
                            :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                            <h2>{{ book.bookname }}</h2>
                        </router-link>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{name: 'Author', params:{authorname: book.author}}"><h4 >By: {{ book.author }}</h4></router-link>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <h5>${{ book.price }}</h5>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                            class="btn  btn-dark btn-lg py-2">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </button>
                    </div>
                    </div>

                </div>
                <div class="line-3">
                    <hr>
                </div>
            </div>
        </div>
        <div v-if="this.$route.params.genrename == 'ya'">
            <h1 class="d-flex justify-content-center my-5">YOUNG ADULT</h1>
            <div class="row my-5" v-for="book in this.ya_books.value">
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <router-link
                            :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                            <h2>{{ book.bookname }}</h2>
                        </router-link>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{name: 'Author', params:{authorname: book.author}}"><h4 >By: {{ book.author }}</h4></router-link>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <h5>${{ book.price }}</h5>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                            class="btn  btn-dark btn-lg py-2">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </button>
                    </div>
                    </div>

                </div>
                <div class="line-3">
                    <hr>
                </div>
            </div>
        </div>
        <div v-if="this.$route.params.genrename == 'audiobooks'">
            <h1 class="d-flex justify-content-center my-5">AUDIO BOOKS</h1>
            <div class="row my-5" v-for="book in this.audio_books.value">
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <router-link
                            :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                            <h2>{{ book.bookname }}</h2>
                        </router-link>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{name: 'Author', params:{authorname: book.author}}"><h4 >By: {{ book.author }}</h4></router-link>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <h5>${{ book.price }}</h5>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                            class="btn  btn-dark btn-lg py-2">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </button>
                    </div>
                    </div>

                </div>
                <div class="line-3">
                    <hr>
                </div>
            </div>
        </div>
        <div v-if="this.$route.params.genrename == 'kidsbooks'">
            <h1 class="d-flex justify-content-center my-5">KIDS BOOKS</h1>
            <div class="row my-5" v-for="book in this.kids_books.value">
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <router-link
                            :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                            <h2>{{ book.bookname }}</h2>
                        </router-link>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{name: 'Author', params:{authorname: book.author}}"><h4 >By: {{ book.author }}</h4></router-link>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <h5>${{ book.price }}</h5>
                    </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                        <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                            class="btn  btn-dark btn-lg py-2">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </button>
                    </div>
                    </div>

                </div>
                <div class="line-3">
                    <hr>
                </div>
            </div>
        </div>
    </div>

    <!-- End Genre Page -->
</template>
<style scoped>
a:hover {
    text-decoration: none;
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
}
</style>