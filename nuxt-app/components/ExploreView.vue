<script setup lang="ts">

import type {Ref} from "vue";

const prop = reactive(new Property({}, {
  container: "container",
  textHeading: "text-heading"
}));

const model = ref(null);

const {data: places} = await useFetch('/api/places');
const fetchPlaces = async () => {
  try {
    console.log('Fetched places:', places.value);
  } catch (err) {
    console.error('Error fetching places:', err);
  }
};

const items: Ref<any> = reactive(
  {
    places: [
      {
        id: 0,
        name: 'Old Town',
        star: 4.5,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/db/72/f1/photo0jpg.jpg?w=1200&h=-1&s=1',
      },
      {
        id: 1,
        name: 'Łazienki Królewskie w Warszawie',
        star: 4.5,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/da/8c/e1/palace-on-the-isle.jpg?w=1200&h=-1&s=1',
      },
      {
        id: 2,
        name: 'POLIN Muzeum Historii Żydów Polskich',
        star: 4.5,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8e/b0/47/museum-of-the-history.jpg?w=1200&h=-1&s=1',
      },

    ],
    restaurant: [
      {
        id: 0,
        name: 'Stolica',
        star: 5,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/30/c7/67/caption.jpg?w=1200&h=-1&s=1',
      },
      {
        id: 1,
        name: 'Sushi Kado',
        star: 5,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/72/5a/7d/sushi-kado-kasprzaka.jpg?w=1200&h=-1&s=1',
      },
      {
        id: 2,
        name: 'Prime Cut & Cigar Room',
        star: 5,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/86/f7/9b/prime-cut-x-elektrownia.jpg?w=1200&h=-1&s=1',
      },
    ],
    entertainment: [
      {
        id: 0,
        name: 'Indoor Shooting Range in Warszawa',
        star: 5,
        img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/99/c4/e5.jpg',
      },
      {
        id: 1,
        name: 'Limo Party & Club Package in Warsaw',
        star: 4.3,
        img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/66/f2.jpg',
      },
      {
        id: 2,
        name: 'Must-do sites in Warsaw: retro car private tour with hotel pickup',
        star: 5,
        img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/26/28/d6.jpg',
      },
    ]
  }
)
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
                height="300"
                :show-arrows="false"
                hide-delimiters
                cycle
                hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in items.places" :key="i">
                <v-sheet rounded border height="100%" class="relative">
                  <div>
                    <v-img :src="slide.img" alt="photos" class="w-auto h-100"></v-img>
                  </div>

                  <div class="text-overlay">
                    {{ slide.name }}
                    <br/>
                    <v-rating
                        :model-value="slide.star"
                        active-color="purple-accent-3"
                        half-increments
                        color="white"
                        size="18"
                    ></v-rating>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
        <div class="carousel-item-explore">
          <v-container>
            <div>
              <h1>Top Restaurants for Warsaw</h1>
            </div>
            <v-carousel
                class="mt-4"
                height="300"
                :show-arrows="false"
                hide-delimiters
                cycle
                hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in items.restaurant" :key="i">
                <v-sheet rounded border height="100%" class="relative">
                  <div>
                    <v-img :src="slide.img" alt="photos" class="w-auto h-100"></v-img>
                  </div>

                  <div class="text-overlay">
                    {{ slide.name }}
                  <br/>
                    <v-rating
                        :model-value="slide.star"
                        active-color="purple-accent-3"
                        half-increments
                        color="white"
                        size="18"
                    ></v-rating>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </div>
        <div class="carousel-item-explore">
          <v-container>
            <div>
              <h1>Entertainment</h1>
            </div>
            <v-carousel
                class="mt-4"
                height="300"
                :show-arrows="false"
                hide-delimiters
                cycle
                hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in items.entertainment" :key="i">
                <v-sheet rounded border height="100%" class="relative">
                  <div>
                    <v-img :src="slide.img" alt="photos" class="w-auto h-100"></v-img>
                  </div>

                  <div class="text-overlay">
                    {{ slide.name }}
                    <br/>
                    <v-rating
                        :model-value="slide.star"
                        active-color="purple-accent-3"
                        half-increments
                        color="white"
                        size="18"
                    ></v-rating>
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
.relative {
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
  padding: 0 8px;
  display: block;
  height: auto;
}
</style>
