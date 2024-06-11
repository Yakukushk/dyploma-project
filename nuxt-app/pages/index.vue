<script setup lang="ts">
import HomePageView from "~/components/HomePage/HomePageView.vue";
definePageMeta({
  layout: false,
})
useHead({
  titleTemplate: '%s - Main Page'
})

</script>

<template>
  <NuxtLayout name="custom">
    <HomePageView/>
  </NuxtLayout>




</template>

<style scoped>

</style>