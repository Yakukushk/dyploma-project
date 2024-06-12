<script setup lang="ts">

const prop = reactive(new Property({}, {
  container: "container",
  textHeading: "text-heading"
}));

const model = ref(null);

const { data: places } = await useFetch('/api/places');
const fetchPlaces = async () => {
  try {
    console.log('Fetched places:', places.value);
  } catch (err) {
    console.error('Error fetching places:', err);
  }
};

onMounted(fetchPlaces);
</script>

<template>
  <v-container :class="prop.classObject.container">
    <div class="top-places">
      <v-container>
        <div class="top-places-heading">
          <h2 class="text-h5 font-weight-bold mb-4">Explore</h2>
        </div>
        <div class="carousel-item-explore">
          <v-container>
            <div>
              <h1>Top places for Warsaw</h1>
            </div>
            <v-carousel
                class="mt-4"
                height="200"
                show-arrows="hover"
                cycle
                hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in places" :key="i">
                <v-sheet rounded border height="100%">
                  <div class="d-flex fill-height justify-center align-center">
                    <div class="text-subtitle-1">{{ slide }}</div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
        <div class="carousel-item-explore">
          <v-container>
            <div>
              <h1>Top Restaraunts for Warsaw</h1>
            </div>
            <v-carousel
                class="mt-4"
                height="200"
                show-arrows="hover"
                cycle
                hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in places" :key="i">
                <v-sheet rounded border height="100%">
                  <div class="d-flex fill-height justify-center align-center">
                    <div class="text-subtitle-1">{{ slide.feutures }}</div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
        <div class="carousel-item-explore">
          <v-container>
            <div>
              <h1>Top places for Warsaw</h1>
            </div>
            <v-carousel
                class="mt-4"
                height="200"
                show-arrows="hover"
                cycle
                hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in places" :key="i">
                <v-sheet rounded border height="100%">
                  <div class="d-flex fill-height justify-center align-center">
                    <div class="text-subtitle-1">{{ slide }}</div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
      </v-container>
    </div>
  </v-container>
</template>

<style scoped>
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
  padding: 0 8px;
  display: block;
  height: auto;
}
</style>
