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
    <div id="header">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="d-flex flex-grow-1">
                <router-link class="navbar-brand" :to="{name: 'HomePage'}">BOOKSTORE</router-link>
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
            <button class="navbar-toggler order-0" type="button" data-toggle="collapse" data-target="#navbar1,#navbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse flex-shrink-1 flex-grow-0 order-last" id="navbar1">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'MyCart', query:{myTotal:totalAmount(this.cart.value)}}"> <i class="fa fa-shopping-cart"></i> MY CART</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-md navbar-light bg-light py-lg-4">
            <div class="navbar-collapse collapse flex-shrink-1 " id="navbar2" style="font-family: fantasy">
                <ul class="navbar-nav flex-grow-1 ">
                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">fiction</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">
                                    <router-link class="dropdown-item" :to="{name:'Book', params:{bookname:this.fiction_books.value[index].bookname}, query:{image:this.fiction_books.value[index].image, price: this.fiction_books.value[index].price, author: this.fiction_books.value[index].author, description: this.fiction_books.value[index].description}}">{{ this.fiction_books.value[index].bookname }}</router-link>
                                </div>
                                <router-link :to="{ name: 'GenrePage', params:{genrename: 'fiction'} }" class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">non-fiction</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">
                                    <router-link class="dropdown-item" :to="{name:'Book', params:{bookname:this.nonfiction_books.value[index].bookname}, query:{image:this.nonfiction_books.value[index].image, price: this.nonfiction_books.value[index].price,author: this.nonfiction_books.value[index].author, description: this.nonfiction_books.value[index].description}}">{{ this.nonfiction_books.value[index].bookname }}</router-link>
                                </div>
                                <router-link :to="{ name: 'GenrePage', params:{genrename: 'nonfiction'} }" class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">audio books</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">
                                    <router-link class="dropdown-item" :to="{name:'Book', params:{bookname:this.audio_books.value[index].bookname}, query:{image:this.audio_books.value[index].image, price: this.audio_books.value[index].price, author: this.audio_books.value[index].author, description: this.audio_books.value[index].description}}">{{ this.audio_books.value[index].bookname }}</router-link>
                                </div>
                                <router-link :to="{ name: 'GenrePage', params:{genrename: 'audiobooks'} }" class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">e-books</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">
                                    <router-link class="dropdown-item" :to="{name:'Book', params:{bookname:this.e_books.value[index].bookname}, query:{image:this.e_books.value[index].image, price: this.e_books.value[index].price, author: this.e_books.value[index].author, description: this.e_books.value[index].description}}">{{ this.e_books.value[index].bookname }}</router-link>
                                </div>
                                <router-link :to="{ name: 'GenrePage', params:{genrename: 'ebooks'} }" class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">young adult</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">
                                    <router-link class="dropdown-item" :to="{name:'Book', params:{bookname:this.ya_books.value[index].bookname}, query:{image:this.ya_books.value[index].image, price: this.ya_books.value[index].price, author: this.ya_books.value[index].author, description: this.ya_books.value[index].description}}">{{ this.ya_books.value[index].bookname }}</router-link>
                                </div>
                                <router-link :to="{ name: 'GenrePage', params:{genrename: 'ya'} }" class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item flex-grow-1">
                        <div class="dropdown">
                            <a class="nav-link" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">kids</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div v-for="index in 5" :key="index">
                                    <router-link class="dropdown-item" :to="{name:'Book', params:{bookname:this.kids_books.value[index].bookname}, query:{image:this.kids_books.value[index].image, price:this.kids_books.value[index].price, author:this.kids_books.value[index].author, description: this.kids_books.value[index].description}}">{{ this.kids_books.value[index].bookname }}</router-link>
                                </div>
                                <router-link :to="{ name: 'GenrePage', params:{genrename: 'kidsbooks'} }" class="dropdown-item"> see all</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
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
a:hover {
    text-decoration: none;
}

#navbar2 .nav-item:not(:last-child) {
    border-right: 1px solid silver;

}

.genre {
    font-family: fantasy;
    font-size: 17px;

}

@media (max-width: 768px) {
    #navbar2 .nav-item:not(:last-child) {
        border-right: none;
    }

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

h1 {
    font-size: 3.6em;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0;
    color: #333;
}</style>