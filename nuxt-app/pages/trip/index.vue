<script setup lang="ts">
import CardView from "~/components/Trip/CardView.vue";
import MapView from "~/components/admin/Trips/MapView.vue";
import { useStore } from "~/composables/store";
definePageMeta({
  layout: false,
});
const prop = reactive(new Property({}, {
  container: 'container-test',
  noGuttersCol: 'no-gutters-col'
}));
</script>

<template>
  <NuxtLayout name="header"></NuxtLayout>
  <v-container :class="prop.classObject.container">
    <v-row no-gutters>
      <v-col  md="7" :class="prop.classObject.noGuttersCol">
        <CardView></CardView>
      </v-col>
      <v-col  md="4" :class="prop.classObject.noGuttersCol">
        <MapView></MapView>
      </v-col>
    </v-row>
  </v-container>
  <footer-view class="mt-auto"/>
</template>

<style scoped>

.container-test {
  .container {
    max-width: 1230px;
    padding: 0 30px 0 30px;
    margin: 0 auto;
    margin-bottom: 20px;
    min-height: 100vh;

  }
}

.no-gutters-col {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
