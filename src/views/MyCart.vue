<script setup>
import { useRoute } from 'vue-router';


function inc(index, arr) {
  arr[index].amount++;
  return arr
}
function dec(index, arr) {
  arr[index].amount--;

  return arr;
}
function totalAmount(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].amount > 0) {
      total += (arr[i].amount * arr[i].price);
    }

  } return total;
}
function clearCart(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].amount = 0;
    
  } 
  window.alert("ORDER PLACED, THANK YOU!");
  return arr
}
</script>
<template>
  <!-- Start Genre Page -->
  <div v-if="this.$route.query.myTotal == 0" class="d-flex justify-content-center">
    <div id="message" class="container-fluid ">
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
            <h1>CART IS EMPTY!</h1>
        </div>
  </div>
</div>
  </div>
  <div v-else>
    <div class="container my-5">
      <div v-for="book, index in this.cart.value">
        <div class="row my-5" v-if="index > 0 && this.cart.value[index].amount > 0">
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
                <router-link :to="{ name: 'Author', params: { authorname: book.author } }">
                  <h4>By: {{ book.author }}</h4>
                </router-link>
              </div>
            </div>
            <div class="row d-flex justify-content-center">
              <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                <h5>${{ book.price }}</h5>
              </div>
            </div>
            <div class="row d-flex justify-content-center">
              <div class="col-sm-6 col-md-8 d-flex justify-content-center">
                <button
                  v-on:click="this.cart.value = dec(index, this.cart.value), this.$route.query.myTotal = totalAmount(this.cart.value)"><i
                    class="fa fa-chevron-down" aria-hidden="true"></i>

                </button>

                <input readonly v-model="this.cart.value[index].amount" style='width:3em' />

                <button
                  v-on:click="this.cart.value = inc(index, this.cart.value), this.$route.query.myTotal = totalAmount(this.cart.value)"><i
                    class="fa fa-chevron-up" aria-hidden="true"></i>
                </button>
              </div>
            </div>

          </div>
          <div class="line-3">
            <hr>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-sm-6 col-md-2 d-flex justify-content-center">
          <label for="total" class="h4">Total Amount:</label>
        </div>
        <div class="col-sm-6 col-md-2 d-flex justify-content-center">
          <input id="total" v-model="this.$route.query.myTotal">
        </div>
      </div>
      <div class="row d-flex justify-content-center my-5">
        <div class="col-8 d-flex justify-content-center">
            <button v-on:click="this.cart.value = clearCart(this.cart.value), this.$route.query.myTotal = 0"
              class="btn btn-primary btn-lg py-3">Place Order</button>
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
#message{
    padding-top: 300px;
    padding-bottom: 300px;
}
</style>