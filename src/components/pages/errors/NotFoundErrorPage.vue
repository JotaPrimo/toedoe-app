<template>
    <div class="container py-5">
        <h1>404</h1>
        <p>Pagina não encontrarda</p>
        <router-link :to="{ name: 'tasks' }">Back to your <code>{{ $route.params.notFound }}</code> Tasks</router-link>
    </div>
</template>