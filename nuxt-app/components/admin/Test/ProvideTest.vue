<script setup lang="ts">
import {provide, ref} from 'vue';
import InjectTest from "~/components/admin/Test/InjectTest.vue";
import type {IInfo} from "~/components/admin/DashBoard/TripsTableView.vue";

let id = 0;
const infoValue = ref<Info>([
  {id: id++, Name: "Park Warsaw", CoordinatesX: 37.738, CoordinatesY: 12.222, Country: "Poland", City: "Warsaw"},
  {id: id++, Name: "Loovre", CoordinatesX: 21.738, CoordinatesY: 12.222, Country: "France", City: "Paris"},
  {id: id++, Name: "Berlin's Gate", CoordinatesX: 56.738, CoordinatesY: 12.222, Country: "Germany", City: "Berlin"},
  {id: id++, Name: "Red Square", CoordinatesX: 66.738, CoordinatesY: 12.222, Country: "Netherlands", City: "Amsterdam"},
  {id: id++, Name: "Botanic Square", CoordinatesX: 11.738, CoordinatesY: 12.222, Country: "Ukraine", City: "Kyiv"},
]);
const item = ref([]);
provide('info', infoValue.value)
const takeValues = () => {
   item.value.push(...infoValue.value);
   return item.value.forEach((data) => {
     console.log(data.Name + "from Items");
   })
}

</script>

<template>

  <InjectTest v-on:submitList="takeValues" />

</template>

<style scoped>

</style>