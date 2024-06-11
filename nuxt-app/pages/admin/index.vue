<template>
  <div>
    <v-container>
      <h1 class="font-weight-medium">Dashboard</h1>
    </v-container>
    <v-container>

      <v-row
      >
        <v-col

        >
          <ChartBarView/>
        </v-col>
        <v-col>
          <ChartLineBar/>
        </v-col>
        <v-col>
          <div>
            <CharBookingView/>
          </div>
          <div class="mt-4">
            <CharVisitsView/>
          </div>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
          <trips-table-view/>
        </v-col>
        <v-col cols="auto">
          <task-manager-view/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

import ChartBarView from "~/components/admin/DashBoard/ChartBarView.vue";
import ChartLineBar from "~/components/admin/DashBoard/ChartLineBar.vue";
import CharBookingView from "~/components/admin/DashBoard/CharBookingView.vue";
import CharVisitsView from "~/components/admin/DashBoard/CharVisitsView.vue";
import TripsTableView from "~/components/admin/DashBoard/TripsTableView.vue";
import TaskManagerView from "~/components/admin/DashBoard/TaskManagerView.vue";
</script>

<style>

</style>