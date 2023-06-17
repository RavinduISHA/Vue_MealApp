<template>

 <div class="flex flex-col p-8">
   
 <div class="flex justify-center gap-2">
    
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
    </router-link>
   </div>
   <pre>{{ igt }}</pre> 
</div>
</template>

<script setup>
import { computed , onMounted, ref} from 'vue';
import store from '../store';
import AxiosClient from '../AxiosClient.js'


const letters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'.split("");
const igt = ref([])

onMounted(async ()=> {
   const res = await AxiosClient.get('/list.php?i=list')
   console.log(res.data)
   igt.value = res.data
})
</script>