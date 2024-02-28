<!-- The script set-up is the first thing accessed when this view is visited-->

<script setup>

/* a function to add books to the cart */

function addToCart(arr, img, bname, athr, desc, prc) {
    var x = arr.length;
    for (let i = 0; i < x; i++) {
        var y = arr[i];
        if (y.bookname == bname) {
            arr[i].amount++;
            return arr;
        }
    }
    var z = {
        bookname: bname,
        image: img,
        price: prc,
        description: desc,
        author: athr,
        amount: 1
    }
    arr.push(z);
    return arr;
}
</script>
<template>
    <!-- Start Book Information-->

    <div class="container my-5">
        <div class="row">

            <!-- Book Image -->

            <div class="col-sm-6 col-md-4 d-flex justify-content-start">
                <img style=" object-fit: fill" height="400" width="250" :src="this.$route.query.image">
            </div>

            <!-- Book name, Author's name and the book description are on the same line-->

            <div class="col-sm-6 col-md-8">

                <!-- Book Name-->

                <div class="row">
                    <h2 class="d-flex justify-content-start">{{ this.$route.params.bookname }}</h2>
                </div>

                <!-- When an author name  is clicked-on, the router view is redirected to that author's page. The author's name is passed as a parameter-->

                <div class="row">
                    <router-link class="d-flex justify-content-start"
                        :to="{ name: 'Author', params: { authorname: this.$route.query.author } }">
                        <h4>By: {{ this.$route.query.author }}</h4>
                    </router-link>
                </div>

                <!-- Book Description-->
                <div class="row">
                    <p class="d-flex justify-content-center">{{ this.$route.query.description }}</p>
                </div>

            </div>
        </div>

        <!-- Book Price-->

        <div class="row my-3">
            <div class="col-sm-6 col-md-4 ">
                <h5 class="d-flex justify-content-start">${{ this.$route.query.price }}</h5>
            </div>
        </div>

        <!-- When the 'add to cart' button is clicked, the book is added to cart using the function-->

        <div class=" row my-3">
            <div class="col-sm-6 ">
                <button
                    v-on:click="this.cart.value = addToCart(this.cart.value, this.$route.query.image, this.$route.params.bookname, this.$route.query.author, this.$route.query.description, this.$route.query.price)"
                    class="btn  btn-dark btn-lg py-2 d-flex justify-content-start">
                    <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
                </button>
            </div>
        </div>

    </div>

    <!-- End Book Information-->
</template>