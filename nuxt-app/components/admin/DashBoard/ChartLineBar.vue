<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, BarElement
} from 'chart.js'
import {Line} from 'vue-chartjs'
import {useChartLine} from "~/composables/charBar";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const {chartData, options} = useChartLine();
</script>

<template>
  <v-card
      class="mx-auto"
      max-width="344"
      hover
  >
    <v-card-item>
      <Line :data="chartData" :options="options"/>
    </v-card-item>
    <v-card-subtitle style="color: black">
      <h2>Registered Users</h2>
    </v-card-subtitle>
    <v-card-text>
      Last Campaign Performance
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>