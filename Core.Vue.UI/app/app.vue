<template>
    <div class="app">Vue application</div>
    <div @click="appComponent.increment">
        Count: {{ appComponent.count }}
    </div>
</template>

<script setup lang="ts">
    import { AppComponent } from './app.view.ts';

    const appComponent = new AppComponent();
</script>

<style scoped>
    
</style>
