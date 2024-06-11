<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from '~/composables/store';
import { Property } from '~/composables/property';



const store = useStore();
const router = useRouter();
const prop = reactive(new Property({
  btn: {
    color: 'white',
    backgroundColor: 'blueviolet',
    margin: '20px 0 0 0',

  },
}, {
  activatorBtn: 'active-btn',
  container: 'container',
  datePicker: 'date-picker',
  icon: 'icon-picker',
  numInput: 'num-input',
  cardContainer: 'card-container',
  chip: 'chip-container'
}));

const items = reactive([
  { text: 'Kid Friendly', icon: 'mdi-nature' },
  { text: 'Museums', icon: 'mdi-flag' },
  { text: 'Shopping', icon: 'mdi-cart' },
  { text: 'Historical', icon: 'mdi-map-marker' },
  { text: 'Biking', icon: 'mdi-bike' },
]);
const tickLabel = reactive({
  0 : 'Low',
  1 : 'Middle',
  2 : 'High'
})
const today = new Date()
const addMethod = async() => {
  store.pushOnSelection();
  await router.push('/trip');
}
const allowedDates = (date: string) => new Date(date) >= today;

</script>

<template>
  <v-container>
    <template>
      <div :class="prop.classObject.container">
        <v-dialog max-width="800" persistent>
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-if="store.selections.length < 6" :class="prop.classObject.activatorBtn" v-bind="activatorProps" :style="prop.styleObject.btn">
              New Plan
            </v-btn>
            <v-btn v-else disabled :class="prop.classObject.activatorBtn" :style="prop.styleObject.btn">
              New Plan
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card :class="prop.classObject.cardContainer" title="Let's make a plan">
              <v-card-actions>
                <v-container>
                  <div class="d-flex justify-center">
                    <v-date-input
                        v-model="store.objValues.model"
                        label="Select your date"
                        max-width="800"
                        :allowed-dates="allowedDates"
                        multiple="range"
                        color="#8A2BE2"
                        :class="prop.classObject.datePicker"
                    ></v-date-input>
                  </div>
                  <v-row>
                    <v-col>
                      <h5>Person
                        <v-icon :class="prop.classObject.icon" icon="mdi-account"></v-icon>
                      </h5>

                      <v-number-input
                          :class="prop.classObject.numInput"
                          v-model="store.objValues.persons"
                          :max="5"
                          :min="1"
                      ></v-number-input>
                    </v-col>
                  </v-row>
                  <v-sheet class="py-4 px-1">
                    <v-chip-group
                        multiple
                        filter
                        v-model="store.objValues.chips"
                    >
                      <v-chip
                          :class="prop.classObject.chip"
                          v-for="tag in items"
                          :key="tag.text"
                          :value="tag.text"
                      >
                        <v-icon left>{{ tag.icon }}</v-icon>
                        {{ tag.text }}
                      </v-chip>
                    </v-chip-group>
                  </v-sheet>
                  <div class="text-caption">Budget</div>

                  <v-slider
                      v-model="store.objValues.ticks"
                      :max="2"
                      :ticks="tickLabel"
                      show-ticks="always"
                      step="1"
                      tick-size="3"
                      color="#8A2BE2"
                  ></v-slider>
                </v-container>
              </v-card-actions>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Disagree" variant="text" @click="isActive.value = false"></v-btn>

                <v-btn color="surface-variant" text="Agree" variant="flat" @click="addMethod()"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </template>
  </v-container>
</template>

<style scoped>
.date-picker {
  color: blueviolet;
}

.icon-picker {
  padding: 1px 2px 1px 1px;
}

.num-input {
  /* Adjust styles as needed */
}

.chip-container {
  background-color: blueviolet;
  color: white;
}
</style>
