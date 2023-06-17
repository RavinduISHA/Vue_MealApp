<template>
    <div class="bg-gray-100">
        <Navbar/>
        <main>
            <RouterView/>
        </main>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>