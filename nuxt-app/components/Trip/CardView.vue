<script setup lang="ts">
import {useFireStore} from "~/firebase/firestore";
import {useStore} from "~/composables/store";

const store = useStore();
const firestore = useFireStore();
const prop = reactive(new Property({}, {
  section: 'section-container',
  card: 'card'
}));
const item = store.selections;
const tab = ref(null);
const formDate = (date: Date | any) => {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

</script>

<template>
  <v-container class="centered-container">
    <v-container fluid :class="prop.classObject.section">
      <section :class="prop.classObject.section">
        <v-card :class="prop.classObject.card" v-for="(el, index) in item" :key="index">
          <v-card-title class="text-center">Trip to Poland, Warsaw</v-card-title>
          <v-card-text><v-icon icon="mdi-account"></v-icon> {{el.persons}}</v-card-text>
          <v-card-item>
            <v-row>
              <v-col v-for="chips in el.chips" :key="chips">
                <v-card-subtitle>
                  <font-awesome-icon class="me-2" icon="fa-solid fa-check" />{{chips}}
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-card-item>
          <v-card-text>{{formDate(el.date[0])}} - {{formDate(el.date[1])}}</v-card-text>
        </v-card>
      </section>

    </v-container>
    <section>
      <v-container fluid>
        <v-card>
          <v-tabs
              v-model="tab"
              align-tabs="center"
              color="deep-purple-accent-4"
          >
            <v-tab :value="1">Explore</v-tab>
            <v-tab :value="3">Itinerary</v-tab>
            <v-tab :value="3">Budget</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item

                :value="1"
            >
              <v-container fluid>
                <ExploreView/>
              </v-container>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-container>
    </section>
  </v-container>

</template>

<style scoped>


.section-container {
  background-color: blueviolet;
  justify-content: center;
  align-items: center;
  min-width: 600px;
}

.card {
  min-width: 500px;
}
@media(max-width: 1230px) {
  .section-container {
    background-color: blueviolet;
    justify-content: center;
    align-items: center;
    min-width: 300px;
  }
  .card {
    min-width: 150px;
    margin: 10px 10px;
  }
}
</style>