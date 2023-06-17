<template>
    <div class="p-7">
        <input 
        type="text"
        v-model="keyword"
        class="rounded border-3 border-grey- w-full" placeholder="Search"
        @change="searchMeal"
        />
    </div>
    <div>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import store from '../store';

const keyword = ref("");
const meals = computed(()=> store.state.searchedMeal);

function searchMeal(){
    store.dispatch("searchMeal", keyword.value)
}

</script>