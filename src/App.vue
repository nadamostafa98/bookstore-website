<script setup>

/* import all necessary views and components */

import { RouterView } from 'vue-router'
import HeaderV from './views/Header.vue'
import Footer from './views/Footer.vue'

</script>


<template>

    <!-- the header component to create the header of the website whose content will always be visible throughout all router-views (pages)-->
    <HeaderV /> 

    <!-- A div for the router-view which shows the content of the current route (its content changes as the user browses the website)-->
    <div>
        <router-view></router-view>
    </div>

    <!-- the footer component to create the footer of the website whose content will always be visible throughout all router-views (pages)-->
    <Footer />

</template>