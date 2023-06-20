<template>
    <h1>Login Page</h1>
    <butto class="btn btn-primary" @click="handleClick">Login</butto>
</template>

<script setup>
import { useRouter } from "vue-router";

const router =  useRouter();
const handleClick = () => {
    router.push({ name: 'tasks' })
}


</script>