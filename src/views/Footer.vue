<script setup>
function totalAmount(arr){
    var total = 0;
  for(let i = 0; i < arr.length; i++){
  if(arr[i].amount>0){
    total += (arr[i].amount * arr[i].price);
  }
  
}return total;
}
</script>
<template>
        <!-- Footer -->
        <footer class="bg-dark text-center ">
                <div class="container text-light p-4">    
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">SHOP BY GENRE</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <router-link :to="{ name: 'GenrePage', params:{genrename: 'fiction'} }" class="text-secondary">fiction</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'GenrePage', params:{genrename: 'nonfiction'} }" class="text-secondary">non-fiction</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'GenrePage', params:{genrename: 'audiobooks'} }" class="text-secondary">audio books</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'GenrePage', params:{genrename: 'ebooks'} }" class="text-secondary">e-books</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'GenrePage', params:{genrename: 'ya'} }" class="text-secondary">young adult</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'GenrePage', params:{genrename: 'kidsbooks'} }" class="text-secondary">kids</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Navigation</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <router-link class="text-secondary" :to="{name:'MyCart', query:{myTotal:totalAmount(this.cart.value)}}"> <i class="fa fa-shopping-cart"></i> checkout</router-link>
                                </li>
                            </ul>
                        </div>  
                        <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                            <form class="mr-2 my-auto w-100 d-inline-block order-1">
                                


                                <div class="input-group">
                        <input id="sin" type="text" class="form-control border border-right-0"
                            placeholder="Search by Title or Author" v-model="searchInput" >
                        <span class="input-group-append">
                            <router-link custom v-slot="{ navigate }" :to="{name: 'SearchResult', query:{searchkey:searchInput}}">
                                <button @click="navigate" role="link" class="btn btn-outline-light border border-left-0" type="button">
                                <i class="fa fa-search"></i>
                            </button></router-link>
                        </span>
                    </div>

                            </form>
                        </div>  
                    </div>
                </div>

  <!-- Copyright -->
                <div class="text-center text-light p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                    © 2024 Copyright:
                    <router-link class="text-light" :to="{name: 'HomePage'}">bookstore.com</router-link>
                </div>
  <!-- Copyright -->
                
            </footer>
<!-- Footer -->
</template>

<script>
export default {
    data(){
        return{
            searchInput: ''
        }
    }
}
</script>

<style scoped>
a:hover{
                text-decoration: none;
            }
            #navbar2 .nav-item:not(:last-child) {
                border-right: 1px solid silver;
                
            }
            
            .genre{
                font-family: fantasy;
                font-size: 17px;
                
            }
            @media (max-width: 768px) {
                #navbar2 .nav-item:not(:last-child) {
                    border-right: none;
                }
                h5{
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

            h1 {
                font-size: 3.6em;
                font-weight: 100;
                text-align: center;
                margin-bottom: 0;
                color: #333;
                }
</style>