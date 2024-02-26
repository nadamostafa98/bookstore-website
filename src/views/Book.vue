<script setup>
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
    <div class="container my-5">
        <div class="row">
            <div class="col-sm-6 col-md-4 d-flex justify-content-start">
                <img style=" object-fit: fill" height="400" width="250" :src="this.$route.query.image">

            </div>
            <div class="col-sm-6 col-md-8">
                <div class="row">
                        <h2 class="d-flex justify-content-start">{{ this.$route.params.bookname }}</h2>
                </div>
                <div class="row">
                    <router-link class="d-flex justify-content-start" :to="{name: 'Author', params:{authorname: this.$route.query.author}}"><h4 >By: {{ this.$route.query.author }}</h4></router-link>
                </div>
                <div class="row">
                    <p class="d-flex justify-content-center">{{ this.$route.query.description }}</p>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-sm-6 col-md-4 ">
            <h5 class="d-flex justify-content-start">${{ this.$route.query.price }}</h5>
        </div>
        </div>
        <div class=" row my-3">
            <div class="col-sm-6 ">
              <button v-on:click="this.cart.value = addToCart(this.cart.value, this.$route.query.image, this.$route.params.bookname, this.$route.query.author, this.$route.query.description, this.$route.query.price)"
                class="btn  btn-dark btn-lg py-2 d-flex justify-content-start">
                <h5>add to cart <i class="fa fa-shopping-cart"></i></h5>
              </button>
            </div>
        </div>
        <div class="line-3">
            <hr>
        </div>
    </div>
</template>