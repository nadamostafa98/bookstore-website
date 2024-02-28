<!-- The script set-up is the first thing accessed when this view is visited-->

<script setup>

/* a function to increase the amount the user wants to order from a book*/

function inc(index, arr) {
  arr[index].amount++;
  return arr
}

/* a function to decrease the amount the user wants to order from a book*/

function dec(index, arr) {
  arr[index].amount--;

  return arr;
}

/* a function to calculate the current total amount of the cart in order to be easily updated whenever an book's amount is increased or decreased */

function totalAmount(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].amount > 0) {
      total += (arr[i].amount * arr[i].price);
    }

  } return total;
}

/* a function to clear the cart. It is called after the user places an order to clear the cart for a new purchase*/

function clearCart(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].amount = 0;

  }
  window.alert("ORDER PLACED, THANK YOU!"); //After the order is placed a pop-up notification confirming that the order is placed is shown to the user
  return arr
}

</script>
<template>
  <!-- Start Cart Page-->

  <!-- If the cart is empty, a message is shown-->

  <div v-if="this.$route.query.myTotal == 0" class="d-flex justify-content-center">
    <div id="message" class="container-fluid ">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <h1>CART IS EMPTY!</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- If the cart is not empty-->

  <div v-else>
    <div class="container my-5">
      <h1 class="d-flex justify-content-center my-5">YOUR CART</h1>

      <!-- For each book in the cart, its image, name, author's name, price and amount are shown -->

      <div v-for="book, index in this.cart.value">

        <div class="row my-5" v-if="index > 0 && this.cart.value[index].amount > 0">
          <!-- if a book's amount < 0 that means it is not added to the cart -->

          <!-- Book Image-->

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

            <!-- Start Amount Section-->

            <div class="row d-flex justify-content-center">
              <div class="col-sm-6 col-md-8 d-flex justify-content-center">

                <!-- When the down button is clicked, the dec() function is called -->

                <button
                  v-on:click="this.cart.value = dec(index, this.cart.value), this.$route.query.myTotal = totalAmount(this.cart.value)"><i
                    class="fa fa-chevron-down" aria-hidden="true"></i>

                </button>

                <!-- An input that models the total amount of the book whenever it changes -->

                <input readonly v-model="this.cart.value[index].amount" style='width:3em' />

                <!-- When the up button is clicked, the dec() function is called -->

                <button
                  v-on:click="this.cart.value = inc(index, this.cart.value), this.$route.query.myTotal = totalAmount(this.cart.value)"><i
                    class="fa fa-chevron-up" aria-hidden="true"></i>
                </button>

              </div>
            </div>

            <!-- End Amount Section-->

          </div>

          <!-- a divider line -->

          <div class="line-3">
            <hr>
          </div>

        </div>
      </div>


      <!-- Start Total Amount-->

      <div class="row d-flex justify-content-center">
        <div class="col-sm-6 col-md-2 d-flex justify-content-center">
          <label for="total" class="h4">Total Amount:</label>
        </div>

        <!-- An input that models the 'myTotal' variable that is always updates whenever the total amount changes-->

        <div class="col-sm-6 col-md-2 d-flex justify-content-center">
          <input id="total" v-model="this.$route.query.myTotal">
        </div>
      </div>

      <!-- End Total Amount-->

      <!-- When 'place order' button is presses, the clearCart() function is called and the 'myTotal' variable is reset to 0-->

      <div class="row d-flex justify-content-center my-5">
        <div class="col-8 d-flex justify-content-center">
          <button v-on:click="this.cart.value = clearCart(this.cart.value), this.$route.query.myTotal = 0"
            class="btn btn-primary btn-lg py-3">Place Order</button>
        </div>

      </div>
    </div>
  </div>


  <!-- End Cart Page -->
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

#message {
  padding-top: 300px;
  padding-bottom: 300px;
}
</style>

<!-- End CSS styling-->