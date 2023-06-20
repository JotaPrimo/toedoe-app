<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

</script>

<template>  
    <!-- init navbar-->
    <Navbar />
    <!-- end navbar-->

    <router-view></router-view>

     <!--init Footer-->
     <Footer />
    <!--end Footer-->

</template>

<style scoped>

</style>
