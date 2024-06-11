<script setup lang="ts">
// @ts-ignore
import {useStore} from "~/composables/store";
// @ts-ignore
import {ref} from "vue";
import DialogView from "~/components/admin/Trips/DialogView.vue";
const store = useStore();
const {images, category, city_country} = useStore();

const select = ref("All");
const filterValues = computed(() => {
  if (select.value === "All") {
    return images;
  } else {
    return images.filter((data) => {
      return data.category.includes(select.value);
    });
  }
});

const tab = ref(null);

const filteredByTab = computed(() => {
  if (!tab.value) return [];
  const currentTab = tab.value;
  return filterValues.value.filter(item => item.categoryItem === currentTab);
});
const handleMarkerClick = (item: any) => {
  store.addMarker(item.latitude, item.longitude);
  store.setPopUp(item);
}
const variables = reactive({
  name: "",
  category: ["Hotels", "Tours", "Gastronomic Establishments"],
  city_country: ["Warsaw, Poland", "Berlin, Germany", "Kyiv, Ukraine"],
  link: "",
  coordinate: 0.00,
  description: "",
  additional: "",

  select: null,
  selectCountry: null
});

</script>

<template>
  <v-container>
    <v-select
        v-model="select"
        :items="city_country"
        label="City/Country"
        auto-grow
        shaped
    ></v-select>
  </v-container>
  <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
    <v-tab v-for="item in category" :key="item" :value="item"><h5>{{ item }}</h5></v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item
        v-for="categoryItem in category"
        :key="categoryItem"
        :value="categoryItem"
    >
      <v-container fluid class="border-b rounded" v-if="filteredByTab.length > 0">

        <v-card  hover class="mx-auto mt-4" v-for="(item, index) in filteredByTab" :key="index" >
          <v-row>
            <v-col>
              <v-card-item>
                <v-img :src="item.src" :alt="item.src" width="200px" height="150px" cover></v-img>
              </v-card-item>
            </v-col>
            <v-col cols="auto" class="d-flex align-start">
              <v-card-actions>
                <DialogView :variables="variables"/>
                <v-btn variant="text" icon="mdi-delete"></v-btn>

              </v-card-actions>
            </v-col>
          </v-row>
          <v-card-subtitle>
            <h2>Lorem ipsum</h2>
          </v-card-subtitle>
          <v-card-text>
            noster nec tale vim prodesset torquent vidisse ceteros condimentum deserunt conubia facilis iudicabit
            posuere
            deterruisset scelerisque invidunt deseruisse donec nascetur
          </v-card-text>
        </v-card>

      </v-container>
      <div v-else>
        No Data
      </div>
    </v-window-item>
  </v-window>
</template>

<style scoped>
.border-b {
  border-bottom: 1px solid #ddd;
}
</style>