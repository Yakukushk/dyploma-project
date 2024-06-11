<script setup lang="ts">
import { provide, ref, reactive } from 'vue';
export interface IInfo {
  id: number,
  Name: string,
  CoordinatesX: any|number,
  CoordinatesY: any|number,
  Country: string,
  City: string
}
interface IVariables {
  subtitle: string,
  th: object
}
let id = 0;
const info = ref<IInfo>([
  {id: id++, Name: "Park Warsaw", CoordinatesX: 37.738, CoordinatesY: 12.222, Country: "Poland", City: "Warsaw"},
  {id: id++, Name: "Loovre", CoordinatesX: 21.738, CoordinatesY: 12.222, Country: "France", City: "Paris"},
  {id: id++, Name: "Berlin's Gate", CoordinatesX: 56.738, CoordinatesY: 12.222, Country: "Germany", City: "Berlin"},
  {id: id++, Name: "Red Square", CoordinatesX: 66.738, CoordinatesY: 12.222, Country: "Netherlands", City: "Amsterdam"},
  {id: id++, Name: "Botanic Square", CoordinatesX: 11.738, CoordinatesY: 12.222, Country: "Ukraine", City: "Kyiv"},
]);

const variables = reactive<IVariables>({
  subtitle: "Content Manage",
  th: {
    id: "Id",
    name: "Name",
    coordX: "CoordinatesX",
    coordY: "CoordinatesY",
    country: "Country",
    city: "City"


  }
})

</script>

<template>
  <v-card class="mx-auto" max-width="800" hover>
    <v-card style="background-color: rebeccapurple; color: ghostwhite">
      <v-card-subtitle class="mt-2">
        <h2>{{ variables.subtitle }}</h2>
      </v-card-subtitle>
      <v-card-text>
        {{ new Date(Date.now()) }}
      </v-card-text>
    </v-card>
    <v-card-item>
      <v-table height="300px">
        <thead>
        <tr>
          <th class="text-left">{{ variables.th.id }}</th>
          <th class="text-left">{{ variables.th.name }}</th>
          <th class="text-left">{{ variables.th.coordX }}</th>
          <th class="text-left">{{ variables.th.coordY }}</th>
          <th class="text-left">{{ variables.th.country }}</th>
          <th class="text-left">{{ variables.th.city }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in info" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.Name }}</td>
          <td>{{ item.CoordinatesX }}</td>
          <td>{{ item.CoordinatesY }}</td>
          <td>{{ item.Country }}</td>
          <td>{{ item.City }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>

</template>

<style scoped>

</style>