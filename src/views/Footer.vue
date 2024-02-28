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

    <!-- Start Footer -->

    <footer class="bg-dark text-center ">
        <div class="container text-light p-4">
            <div class="row">

                <!-- A seperate column for each distinct group of links-->

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

                    <!-- A quick access link is added to each genre page-->

                    <h5 class="text-uppercase">SHOP BY GENRE</h5>
                    <ul class="list-unstyled mb-0">
                        <li>

                            <!-- When clicked-on, the user is redirected to the 'fiction' page-->

                            <router-link :to="{ name: 'GenrePage', params: { genrename: 'fiction' } }"
                                class="text-secondary">fiction</router-link>

                        </li>
                        <li>

                            <!-- When clicked-on, the user is redirected to the 'nonfiction' page-->

                            <router-link :to="{ name: 'GenrePage', params: { genrename: 'nonfiction' } }"
                                class="text-secondary">non-fiction</router-link>

                        </li>
                        <li>

                            <!-- When clicked-on, the user is redirected to the 'audio books' page-->

                            <router-link :to="{ name: 'GenrePage', params: { genrename: 'audiobooks' } }"
                                class="text-secondary">audio books</router-link>

                        </li>
                        <li>

                            <!-- When clicked-on, the user is redirected to the 'e-books' page-->

                            <router-link :to="{ name: 'GenrePage', params: { genrename: 'ebooks' } }"
                                class="text-secondary">e-books</router-link>

                        </li>
                        <li>

                            <!-- When clicked-on, the user is redirected to the 'young adult' page-->

                            <router-link :to="{ name: 'GenrePage', params: { genrename: 'ya' } }" class="text-secondary">young
                                adult</router-link>

                        </li>
                        <li>

                            <!-- When clicked-on, the user is redirected to the 'kids book' page-->

                            <router-link :to="{ name: 'GenrePage', params: { genrename: 'kidsbooks' } }"
                                class="text-secondary">kids</router-link>

                        </li>
                    </ul>
                </div>

                <!-- A quick access link is added to any other navigations-->

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Navigation</h5>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <!-- When clicked-on, the user is redirected to the 'cart' page-->

                            <router-link class="text-secondary"
                                :to="{ name: 'MyCart', query: { myTotal: totalAmount(this.cart.value) } }"> <i
                                    class="fa fa-shopping-cart"></i> checkout</router-link>
                        </li>

                    </ul>
                </div>

                <!-- Start search bar -->

                <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
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
                </div>

                <!-- End search bar -->

            </div>
        </div>

        <!-- Start Copyright -->

        <div class="text-center text-light p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2024 Copyright:
            <router-link class="text-light" :to="{ name: 'HomePage' }">bookstore.com</router-link>
        </div>

        <!-- End Copyright -->

    </footer>

    <!-- End Footer -->
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

<!-- Start CSS Styling-->

<style scoped>
a:hover {
    text-decoration: none;
}

@media (max-width: 768px) {
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
</style>

<!-- End CSS Styling-->