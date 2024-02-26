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
        <h2 class="d-flex justify-content-center my-5">Showing Results For: {{ this.$route.query.searchkey }}</h2>
        <div class="my-5" v-for="book in this.all_books.value">
            <div class="row"
                v-if="book.bookname.toLowerCase().includes(this.$route.query.searchkey.toLowerCase()) || book.author.toLowerCase().includes(this.$route.query.searchkey.toLowerCase())">
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

@media (max-width: 768px) {
    #navbar2 .nav-item:not(:last-child) {
        border-right: none;
    }

    h5 {
        font-size: 11px;

    }
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