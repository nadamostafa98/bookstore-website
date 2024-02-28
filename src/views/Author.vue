<!-- The script set-up is the first thing accessed when this view is visited-->

<script setup>

/* a function to add books to the cart */

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
    <!-- Start Author Page -->

    <div class="container my-5">
        <h1 class="d-flex justify-content-center my-5">Books By: {{ this.$route.params.authorname }}</h1>

        <!-- Each book in the books array is cchecked whether they have the same author name -->

        <div v-for="book in this.all_books.value">

            <!-- If the book's author name matches, it is added to the page -->

            <div class="row my-5" v-if="book.author == this.$route.params.authorname">

                <!-- Book Image -->
                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>

                <div class="col-sm-6 col-md-8">

                    <!-- When the book name is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link
                                :to="{ name: 'Book', params: { bookname: book.bookname }, query: { image: book.image, price: book.price, author: book.author, description: book.description } }">
                                <h2>{{ book.bookname }}</h2>
                            </router-link>
                        </div>
                    </div>

                    <!-- When an author name  is clicked-on, the router view is redirected to that author's page. The author's name is passed as a parameter-->

                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <router-link :to="{ name: 'Author', params: { authorname: book.author } }">
                                <h4>By: {{ book.author }}</h4>
                            </router-link>
                        </div>
                    </div>

                    <!-- Book price -->

                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <h5>${{ book.price }}</h5>
                        </div>
                    </div>

                    <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

                    <div class="row d-flex justify-content-center">
                        <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                            <button v-on:click="this.cart.value = addToCart(this.cart.value, book)"
                                class="btn  btn-dark btn-lg py-2">
                                <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                            </button>
                        </div>
                    </div>

                </div>

                <!-- a divider line -->

                <div class="line-3">
                    <hr>
                </div>

            </div>
        </div>
    </div>

    <!-- End Author Page -->
</template>

<!-- Start CSS styling-->

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

<!-- End CSS styling-->