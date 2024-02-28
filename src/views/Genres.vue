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
    <!-- Start Genre Page -->

    <div class="container my-5">

        <!-- Start Fiction Page-->

        <div v-if="this.$route.params.genrename == 'fiction'">
            <h1 class="d-flex justify-content-center my-5">FICTION</h1>

            <!-- Every book in the 'fiction' array is shown on this page-->

            <div class="row my-5" v-for="book in this.fiction_books.value">

                <!-- Book image-->

                <div class="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img style=" object-fit: fill" height="300" width="210" :src="book.image">
                </div>

                <div class="col-sm-6 col-md-8">
                    <div class="row d-flex justify-content-center">

                     <!-- When the book name is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

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

        <!-- End Fiction Page-->

        <!-- Start Non-Fiction Page-->

        <div v-if="this.$route.params.genrename == 'nonfiction'">
            <h1 class="d-flex justify-content-center my-5">NON-FICTION</h1>

            <!-- Every book in the 'non-fiction' array is shown on this page-->

            <div class="row my-5" v-for="book in this.nonfiction_books.value">

                <!-- Book image-->

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

        <!-- End Non-Fiction Page-->

        <!-- Start E-Books Page-->

        <div v-if="this.$route.params.genrename == 'ebooks'">
            <h1 class="d-flex justify-content-center my-5">E-BOOKS</h1>

            <!-- Every book in the 'e-books' array is shown on this page-->

            <div class="row my-5" v-for="book in this.e_books.value">

                <!-- Book image-->

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

        <!-- End E-Books Page-->

        <!-- Start Young Adult Page-->

        <div v-if="this.$route.params.genrename == 'ya'">
            <h1 class="d-flex justify-content-center my-5">YOUNG ADULT</h1>

            <!-- Every book in the 'young adult' array is shown on this page-->

            <div class="row my-5" v-for="book in this.ya_books.value">

                <!-- Book image-->

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

        <!-- End Young Adult Page-->

        <!-- Start Audio Books Page-->

        <div v-if="this.$route.params.genrename == 'audiobooks'">
            <h1 class="d-flex justify-content-center my-5">AUDIO BOOKS</h1>

            <!-- Every book in the 'audio books' array is shown on this page-->

            <div class="row my-5" v-for="book in this.audio_books.value">

                <!-- Book image-->

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

        <!-- End Audio Books Page-->

        <!-- Start Kids Books Page-->

        <div v-if="this.$route.params.genrename == 'kidsbooks'">
            <h1 class="d-flex justify-content-center my-5">KIDS BOOKS</h1>

            <!-- Every book in the 'kids books' array is shown on this page-->

            <div class="row my-5" v-for="book in this.kids_books.value">

                <!-- Book image-->

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

            <!-- End Kids Books Page-->

        </div>
    </div>

    <!-- End Genre Page -->
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
}</style>

<!-- End CSS styling-->