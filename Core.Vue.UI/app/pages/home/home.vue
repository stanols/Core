<template>
    <div class="home">
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
    </div>
</template>

<script setup lang="ts">
    import { HomeComponent } from './home.view.ts';

    const homeComponent = new HomeComponent();
</script>

<style scoped>

</style>
