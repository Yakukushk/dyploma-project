<template>
  <v-card
      class="mx-auto"
      max-width="344"
      hover
  >
    <v-card-item>
      <Bar
          id="my-chart-id"
          :options="charOptions"
          :data="chartData"
      />
    </v-card-item>
    <v-card-subtitle style="color: black">
      <h2>{{ variables.subtitle }}</h2>
    </v-card-subtitle>
    <v-card-text>
      {{ variables.text }}
    </v-card-text>
  </v-card>

</template>

<script lang="ts" setup>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {useChart} from "~/composables/charBar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const {chartData, charOptions} = useChart();
const variables = reactive({
  subtitle: "Website Views",
  text: "Last Campaign Performance"
})
watchEffect(() => {
  console.log("Data from chart : ", chartData.datasets);
  console.log("Options from chart : ", charOptions);
})
</script>

<style>

</style>
