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
    <!-- Start homepage -->

    <div id="homepage">

        <!-- Start Carouse l-->

        <div id="mycarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

                <!-- The Carousel includes the books that were added to the 'banner_books' array when the data was retrieved from the database -->

                <div class="carousel-item active"> <!-- The first crousel item is the active one-->

                    <!-- When the carousel image is clicked-on, the user is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                    <router-link custom v-slot="{ navigate }"
                        :to="{ name: 'Book', params: { bookname: this.banner_books.value[0].bookname }, query: { image: this.banner_books.value[0].image, price: this.banner_books.value[0].price, author: this.banner_books.value[0].author, description: this.banner_books.value[0].description } }">
                        <img @click="navigate" class="d-block w-100" :src="this.banner_books.value[0].banner" alt="slide">
                    </router-link>

                </div>
                <div class="carousel-item">

                    <!-- When the carousel image is clicked-on, the user is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                    <router-link custom v-slot="{ navigate }"
                        :to="{ name: 'Book', params: { bookname: this.banner_books.value[1].bookname }, query: { image: this.banner_books.value[1].image, price: this.banner_books.value[1].price, author: this.banner_books.value[1].author, description: this.banner_books.value[1].description } }">
                        <img @click="navigate" class="d-block w-100" :src="this.banner_books.value[1].banner"
                            alt="Second slide">
                    </router-link>

                </div>
            </div>

            <!-- Start Carousel Buttons -->

            <!-- Carousel moves to the previous image-->

            <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <!-- Carousel moves to the next image-->

            <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

            <!-- End Carousel Buttons -->

        </div>

        <!-- End Carousel -->

        <!-- Start 'Fiction' Section-->

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Fiction</h2>
            <div class="row justify-content-center">

                <!--5 books are added from the fiction array with the book image, price and title-->

                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">

                    <!-- Book image -->

                    <img style=" object-fit: fill" height="250" :src="this.fiction_books.value[index].image">

                    <div class="card-body">

                        <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.fiction_books.value[index].bookname }, query: { image: this.fiction_books.value[index].image, price: this.fiction_books.value[index].price, author: this.fiction_books.value[index].author, description: this.fiction_books.value[index].description } }">{{
                                this.fiction_books.value[index].bookname }}</router-link>

                        <!-- Book price -->

                        <h5 class="d-flex justify-content-center">${{ this.fiction_books.value[index].price }}</h5>

                        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->
                        
                        <a href="#"
                            v-on:click="this.cart.value = addToCart(this.cart.value, this.fiction_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>

                    </div>
                </ul>
            </div>

            <!-- When the 'see all' is clicked-on, the user is redirected to the 'fiction' page-->

            <router-link :to="{ name: 'GenrePage', params: { genrename: 'fiction' } }"
                class="row justify-content-center my-3">
                see all</router-link>

            <!-- a divider line -->
            
            <div class="line-3">
                <hr>
            </div>
        </div>

        <!-- End 'Fiction' Section-->

        <!-- Start 'Non-Fiction' Section-->

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Non-Fiction</h2>
            <div class="row justify-content-center">

                <!--5 books are added from the non-fiction array with the book image, price and title-->

                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">

                    <!-- Book image -->

                    <img style=" object-fit: fill" height="250" :src="this.nonfiction_books.value[index].image">

                    <div class="card-body">

                        <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.nonfiction_books.value[index].bookname }, query: { image: this.nonfiction_books.value[index].image, price: this.nonfiction_books.value[index].price, author: this.nonfiction_books.value[index].author, description: this.nonfiction_books.value[index].description } }">{{
                                this.nonfiction_books.value[index].bookname }}</router-link>

                        <!-- Book price -->

                        <h5 class="d-flex justify-content-center">${{ this.nonfiction_books.value[index].price }}</h5>

                        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

                        <a href="#"
                            v-on:click="this.cart.value = addToCart(this.cart.value, this.nonfiction_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>

                    </div>
                </ul>
            </div>

            <!-- When the 'see all' is clicked-on, the user is redirected to the 'non-fiction' page-->

            <router-link :to="{ name: 'GenrePage', params: { genrename: 'nonfiction' } }"
                class="row justify-content-center my-3"> see all</router-link>

            <!-- a divider line -->

            <div class="line-3">
                <hr>
            </div>
        </div>

        <!-- End 'Non-Fiction' Section-->

        <!-- Start 'Audio Books' Section-->

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Audio Books</h2>
            <div class="row justify-content-center">

                <!--5 books are added from the audio books array with the book image, price and title-->

                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">

                    <!-- Book image -->

                    <img style=" object-fit: fill" height="250" :src="this.audio_books.value[index].image">

                    <div class="card-body">

                        <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.audio_books.value[index].bookname }, query: { image: this.audio_books.value[index].image, price: this.audio_books.value[index].price, author: this.audio_books.value[index].author, description: this.audio_books.value[index].description } }">{{
                                this.audio_books.value[index].bookname }}</router-link>

                        <!-- Book price -->

                        <h5 class="d-flex justify-content-center">${{ this.audio_books.value[index].price }}</h5>

                        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.audio_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>

                    </div>
                </ul>
            </div>

            <!-- When the 'see all' is clicked-on, the user is redirected to the 'audio books' page-->

            <router-link :to="{ name: 'GenrePage', params: { genrename: 'audiobooks' } }"
                class="row justify-content-center my-3"> see all</router-link>

            <!-- a divider line -->

            <div class="line-3">
                <hr>
            </div>
        </div>

        <!-- End 'Audio Books' Section-->

        <!-- Start 'E-Books' Section-->

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">e-books</h2>
            <div class="row justify-content-center">

                <!--5 books are added from the e-books array with the book image, price and title-->

                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">

                    <!-- Book image -->

                    <img style=" object-fit: fill" height="250" :src="this.e_books.value[index].image">

                    <div class="card-body">

                        <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.e_books.value[index].bookname }, query: { image: this.e_books.value[index].image, price: this.e_books.value[index].price, author: this.e_books.value[index].author, description: this.e_books.value[index].description } }">{{
                                this.e_books.value[index].bookname }}</router-link>

                        <!-- Book price -->

                        <h5 class="d-flex justify-content-center">${{ this.e_books.value[index].price }}</h5>

                        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.e_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>

                    </div>
                </ul>
            </div>

            <!-- When the 'see all' is clicked-on, the user is redirected to the 'ebooks' page-->

            <router-link :to="{ name: 'GenrePage', params: { genrename: 'ebooks' } }"
                class="row justify-content-center my-3">
                see all</router-link>

            <!-- a divider line -->

            <div class="line-3">
                <hr>
            </div>
        </div>

        <!-- End 'E-Books' Section-->

        <!-- Start 'Young Adult' Section-->

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Young Adults</h2>
            <div class="row justify-content-center">

                <!--5 books are added from the young adult array with the book image, price and title-->

                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">

                    <!-- Book image -->

                    <img style=" object-fit: fill" height="250" :src="this.ya_books.value[index].image">

                    <div class="card-body">

                        <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.ya_books.value[index].bookname }, query: { image: this.ya_books.value[index].image, price: this.ya_books.value[index].price, author: this.ya_books.value[index].author, description: this.ya_books.value[index].description } }">{{
                                this.ya_books.value[index].bookname }}</router-link>

                        <!-- Book price -->

                        <h5 class="d-flex justify-content-center">${{ this.ya_books.value[index].price }}</h5>

                        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.ya_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>

                    </div>
                </ul>
            </div>

            <!-- When the 'see all' is clicked-on, the user is redirected to the 'young adult' page-->

            <router-link :to="{ name: 'GenrePage', params: { genrename: 'ya' } }" class="row justify-content-center my-3">
                see
                all</router-link>

            <!-- a divider line -->

            <div class="line-3">
                <hr>
            </div>
        </div>

        <!-- End 'Young Adult' Section-->

        <!-- Start 'Kids Books' Section-->

        <div class="genre container my-5">
            <h2 class="row justify-content-center my-3">Kids</h2>
            <div class="row justify-content-center">

                <!--5 books are added from the kids books array with the book image, price and title-->

                <ul class="card col-2 flex-grow-1" v-for="index in 5" :key="index">

                    <!-- Book image -->

                    <img style=" object-fit: fill" height="250" :src="this.kids_books.value[index].image">

                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                    <div class="card-body">
                        <router-link class="d-flex justify-content-center"
                            :to="{ name: 'Book', params: { bookname: this.kids_books.value[index].bookname }, query: { image: this.kids_books.value[index].image, price: this.kids_books.value[index].price, author: this.kids_books.value[index].author, description: this.kids_books.value[index].description } }">{{
                                this.kids_books.value[index].bookname }}</router-link>

                        <!-- Book price -->

                        <h5 class="d-flex justify-content-center">${{ this.kids_books.value[index].price }}</h5>

                        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

                        <a href="#" v-on:click="this.cart.value = addToCart(this.cart.value, this.kids_books.value[index])"
                            class="d-flex justify-content-center">
                            <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                        </a>

                    </div>
                </ul>
            </div>

            <!-- When the 'see all' is clicked-on, the user is redirected to the 'kids books' page-->

            <router-link :to="{ name: 'GenrePage', params: { genrename: 'kidsbooks' } }"
                class="row justify-content-center my-3"> see all</router-link>

            <!-- a divider line -->

            <div class="line-3">
                <hr>
            </div>
        </div>

        <!-- End 'Kids Books' Section-->

    </div>

    <!-- End homepage -->
</template>

<!-- Start CSS styling-->

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
</style>

<!-- End CSS styling-->