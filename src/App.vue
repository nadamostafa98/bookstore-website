<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderV from './views/Header.vue'
import Footer from './views/Footer.vue'
</script>


<template>
    <HeaderV/>
    <div>
        <router-view></router-view>
    </div>
    <Footer/>
</template>

<style scoped></style>