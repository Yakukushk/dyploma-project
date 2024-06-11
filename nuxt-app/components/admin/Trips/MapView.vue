<template>
  <v-container fluid >
    <div id="map">
      <LMap
          ref="map"
          :zoom="zoom"
          :center="coordinates"
          class="map"
      >
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
        />
        <LMarker
            v-for="(item, index) in images"
            :key="index"
            :lat-lng="[item.latitude, item.longitude]"

        />
      </LMap>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import {useStore} from "~/composables/store";
const {zoom, map, marker, coordinates, images} = useStore();



</script>

<style scoped>
#map {
  height: 150vh;
  width: 80vh
}
@media(max-width: 1230px) {
  #map {
    height: 50vh;
    width: 40vh;
  }
}
</style>