<!-- The script set-up is the first thing accessed when this view is visited-->

<script setup>

/* a function to calculate the current total amount of the cart in order to be easily passed to the 'MyCart' when the user wants to checkout */

function totalAmount(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].amount > 0) {
            total += (arr[i].amount * arr[i].price);
        }

    } return total;
}
</script>

<template>
    <div id="header">

        <!-- Start First Navigation Bar -->

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="d-flex flex-grow-1">

                <!-- When the user clicks on the name of the website it always redirects him to the homepage-->
                <router-link class="navbar-brand" :to="{ name: 'HomePage' }">BOOKSTORE</router-link>

                <!--Start Search Bar-->

                <form class="mr-2 my-auto w-100 d-inline-block order-1">
                    <div class="input-group">
                        <input id="sin" type="text" class="form-control border border-right-0"
                            placeholder="Search by Title or Author" v-model="searchInput">
                        <span class="input-group-append">

                            <!-- When the search button is clicked-on, the user is redirected to the 'Search' view and the search keyword is passed as a query-->

                            <router-link custom v-slot="{ navigate }"
                                :to="{ name: 'SearchResult', query: { searchkey: searchInput } }">
                                <button @click="navigate" role="link" class="btn btn-outline-light border border-left-0"
                                    type="button">
                                    <i class="fa fa-search"></i>
                                </button></router-link>

                        </span>
                    </div>
                </form>

                <!--End Search Bar-->

            </div>

            <!--a toggler for the 'my cart' button and for the second navigation bar that colapses for smaller screens-->

            <button class="navbar-toggler order-0" type="button" data-toggle="collapse" data-target="#navbar1,#navbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse flex-shrink-1 flex-grow-0 order-last" id="navbar1">
                <ul class="navbar-nav">

                    <!-- When the 'my cart' button is clicked-on, the user is redirected to the 'MyCart' view and the total amount is calculated and passed as a query-->

                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'MyCart', query: { myTotal: totalAmount(this.cart.value) } }">
                            <i class="fa fa-shopping-cart"></i> MY CART</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- End First Navigation Bar -->

        <!-- Start Second Navigation Bar-->

        <nav class="navbar navbar-expand-md navbar-light bg-light py-lg-4">
            <div class="navbar-collapse collapse flex-shrink-1 " id="navbar2" style="font-family: fantasy">

                <!--All genres are added to the navbar, each having a dropdown menu that includes 5 booknames and a 'see all' option-->

                <ul class="navbar-nav flex-grow-1 ">

                    <!-- Start 'Fiction'-->

                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">fiction</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">

                                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                                    <router-link class="dropdown-item"
                                        :to="{ name: 'Book', params: { bookname: this.fiction_books.value[index].bookname }, query: { image: this.fiction_books.value[index].image, price: this.fiction_books.value[index].price, author: this.fiction_books.value[index].author, description: this.fiction_books.value[index].description } }">{{
                                            this.fiction_books.value[index].bookname }}</router-link>
                                </div>

                                <!-- When the 'see all' is clicked-on, the user is redirected to the 'fiction' page-->

                                <router-link :to="{ name: 'GenrePage', params: { genrename: 'fiction' } }"
                                    class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>

                    <!-- End 'Fiction'-->

                    <!-- Start 'Non-Fiction'-->

                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">non-fiction</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                <div v-for="index in 5" :key="index">

                                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                                    <router-link class="dropdown-item"
                                        :to="{ name: 'Book', params: { bookname: this.nonfiction_books.value[index].bookname }, query: { image: this.nonfiction_books.value[index].image, price: this.nonfiction_books.value[index].price, author: this.nonfiction_books.value[index].author, description: this.nonfiction_books.value[index].description } }">{{
                                            this.nonfiction_books.value[index].bookname }}</router-link>
                                </div>

                                <!-- When the 'see all' is clicked-on, the user is redirected to the 'non-fiction' page-->

                                <router-link :to="{ name: 'GenrePage', params: { genrename: 'nonfiction' } }"
                                    class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>

                    <!-- End 'Non-Fiction'-->

                    <!-- Start 'Audio books'-->

                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">audio books</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">

                                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                                    <router-link class="dropdown-item"
                                        :to="{ name: 'Book', params: { bookname: this.audio_books.value[index].bookname }, query: { image: this.audio_books.value[index].image, price: this.audio_books.value[index].price, author: this.audio_books.value[index].author, description: this.audio_books.value[index].description } }">{{
                                            this.audio_books.value[index].bookname }}</router-link>
                                </div>

                                <!-- When the 'see all' is clicked-on, the user is redirected to the 'audio books' page-->

                                <router-link :to="{ name: 'GenrePage', params: { genrename: 'audiobooks' } }"
                                    class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>

                    <!-- End 'Audio books'-->

                    <!-- Start 'e-books' -->

                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">e-books</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">

                                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                                    <router-link class="dropdown-item"
                                        :to="{ name: 'Book', params: { bookname: this.e_books.value[index].bookname }, query: { image: this.e_books.value[index].image, price: this.e_books.value[index].price, author: this.e_books.value[index].author, description: this.e_books.value[index].description } }">{{
                                            this.e_books.value[index].bookname }}</router-link>
                                </div>

                                <!-- When the 'see all' is clicked-on, the user is redirected to the 'e-books' page-->

                                <router-link :to="{ name: 'GenrePage', params: { genrename: 'ebooks' } }"
                                    class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>

                    <!-- End 'e-books' -->

                    <!-- Start 'Young Adult'-->

                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">young adult</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">

                                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                                    <router-link class="dropdown-item"
                                        :to="{ name: 'Book', params: { bookname: this.ya_books.value[index].bookname }, query: { image: this.ya_books.value[index].image, price: this.ya_books.value[index].price, author: this.ya_books.value[index].author, description: this.ya_books.value[index].description } }">{{
                                            this.ya_books.value[index].bookname }}</router-link>
                                </div>

                                <!-- When the 'see all' is clicked-on, the user is redirected to the 'young adult' page-->

                                <router-link :to="{ name: 'GenrePage', params: { genrename: 'ya' } }" class="dropdown-item">
                                    see all</router-link>
                            </div>
                        </div>
                    </li>

                    <!-- End Young Adult-->

                    <!-- Start Kids Books-->

                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">kids</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">

                                    <!-- When a book is clicked-on, the router view is redirected to that book's page. The bookname is passed as a parameter and all the other book iformation are passed as queries-->

                                    <router-link class="dropdown-item"
                                        :to="{ name: 'Book', params: { bookname: this.kids_books.value[index].bookname }, query: { image: this.kids_books.value[index].image, price: this.kids_books.value[index].price, author: this.kids_books.value[index].author, description: this.kids_books.value[index].description } }">{{
                                            this.kids_books.value[index].bookname }}</router-link>
                                </div>

                                <!-- When the 'see all' is clicked-on, the user is redirected to the 'kids books' page-->

                                <router-link :to="{ name: 'GenrePage', params: { genrename: 'kidsbooks' } }"
                                    class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>

                    <!-- End Kids Books-->

                </ul>
            </div>
        </nav>
        <!-- End Second Navigation Bar-->
    </div>
</template>

<script>

/* Initialize 'serachInput' as a variable that models whatever the user puts as input in the search bar */

export default {
    data() {
        return {
            searchInput: ''
        }
    }
}
</script>

<!-- Start CSS styling-->

<style scoped>
a:hover {
    text-decoration: none;
}

#navbar2 .nav-item:not(:last-child) {
    border-right: 1px solid silver;

}

@media (max-width: 768px) {
    #navbar2 .nav-item:not(:last-child) {
        border-right: none;
    }
}


body {
    overflow-x: auto;
    overflow-y: auto;
    background: #f8f8f8;
    font-family: "Source Sans Pro", sans-serif;
}</style>

<!-- End CSS styling-->