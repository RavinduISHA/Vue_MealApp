<template>
    <header class="bg-blue-200 shadow-md h-16 flex justify-between items-stretch" >
      <router-link :to="{name: 'home'}" class="inline-flex items.center h-full px-5">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-50">
          Search
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-50">
          By Letter
        </router-link>
        <router-link :to="{name: 'byIgt'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-50">
          By Ingredient
        </router-link>
      </div>
    </header>
</template>