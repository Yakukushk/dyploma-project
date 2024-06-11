<script setup lang="ts">

import CardView from "~/components/admin/Trips/CardView.vue";
import MapView from "~/components/admin/Trips/MapView.vue";

const prop = reactive(new Property({}, {
  container : 'container'
}))
</script>

<template>
<v-container>
  <h1>Manage Trips</h1>
  <v-row>
    <v-col>
      <CardView></CardView>

    </v-col>

    <v-col>
      <MapView></MapView>
    </v-col>
  </v-row>
</v-container>
  <footer-view class="mt-auto"/>
</template>

<style scoped>
.container {
  max-width: 1230px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 100vh;

}
</style>