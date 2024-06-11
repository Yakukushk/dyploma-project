<script setup lang="ts">

import {Property} from "~/composables/property";
import {useStore} from "~/composables/store";
import {useAuth} from "~/firebase/auth";
import {auth} from "~/firebase/connection"

const router = useRouter();
const prop = reactive(new Property({
  btn: {
    color: 'white',
    backgroundColor: 'blueviolet',
    margin: '20px 0 0 0'
  },
  picture: {
    width: '400px',
    margin: '0 auto'

  }


}, {
  mainContent: 'container',
  sectionContent: 'section-content',
  sectionContainer: 'section-container',
  mainHeading: 'main-heading',
  mainPicture: 'main-picture',
  close: 'main-close',
  text: 'text'
}));
const store = useStore();

const ex: any[] = reactive([
  {
    id: 0,
    img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    title: 'eos eu',
    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam '
  },
  {
    id: 1,
    img: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
    title: 'eos eu',
    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
  },

])
let dialog: boolean = ref(false);
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'});
};
const removeElement = (id) => {
  const objWithIdIndex = ex.findIndex((obj) => obj.id === id);
  store.selections.splice(objWithIdIndex, 1);
  dialog.value = false;
}
const addElement = () => {
  ex.push(store.selections.value);
}
watch(store.selections, () => {
  console.log(store.selections.length);
})

onMounted(() => addElement());
definePageMeta({
  layout: false,
});
useHead({
  titleTemplate: '%s - DashBoard'
})
</script>

<template>
  <div>
    <NuxtLayout name="header"></NuxtLayout>
    <main :class="prop.classObject.mainContent">
      <PlanView/>
      <v-spacer></v-spacer>
      <section :class="prop.classObject.sectionContent">
        <v-container :class="prop.classObject.sectionContainer">
          <h1 v-if="store.selections.length > 0" :class="prop.classObject.mainHeading">Your Trips</h1>
          <v-row v-if="store.selections.length > 0">

            <v-col cols="auto" lg="4" md="4" class="mt-5 me-auto" v-for="item in store.selections" :key="item.id">

              <v-card variant="elevated" class="me-4" max-width="400">
                <v-dialog
                    v-model="dialog"
                    max-width="500"
                    persistent
                >
                  <template v-slot:activator="{ props: activatorProps }">

                    <div v-bind="activatorProps" :class="prop.classObject.close">&times;</div>
                  </template>
                  <v-card
                      prepend-icon="mdi-check"
                      text="Are you sure?"
                      title="Your item will be removed"
                  >
                    <template v-slot:actions>
                      <v-spacer></v-spacer>

                      <v-btn @click="dialog = false">
                        Disagree
                      </v-btn>

                      <v-btn @click="removeElement(item.id)">
                        Agree
                      </v-btn>
                    </template>
                  </v-card>
                </v-dialog>

                <v-card-item>
                  <v-img :style="prop.styleObject.picture" :class="prop.classObject.mainPicture" :src="item.img"/>
                </v-card-item>
                <v-card-title class="text-center font-weight-medium">
                  {{ item.title }}
                  <v-divider></v-divider>
                </v-card-title>
                <v-card-item class="w-auto mx-auto">
                  Date : {{ formatDate(item.date[0]) }} - {{ formatDate(item.date[1]) }}
                </v-card-item>
                <v-card-subtitle>
                  Persons : {{ item.persons }}
                </v-card-subtitle>
                <v-card-item class="w-auto mx-auto">
                  <v-list v-for="chips in item.chips">
                    <v-list-item-title>
                      <font-awesome-icon class="me-2" icon="fa-solid fa-check"/>
                      {{ chips }}
                    </v-list-item-title>
                  </v-list>
                </v-card-item>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn :style="prop.styleObject.btn">More</v-btn>
                </v-card-actions>
              </v-card>

            </v-col>
          </v-row>
          <div v-else>
            <h2 :class="prop.classObject.text">None Trips</h2>
          </div>
        </v-container>
      </section>

    </main>

    <FooterView class="mt-auto"/>
  </div>
</template>

<style scoped>

.container {
  max-width: 1230px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 100vh;

}

.section-content {
  background-color: #373B3F;
  margin-top: 20px;
}

.section-container {
  margin-top: 20px;
  background-color: white;
//border: solid 0.5px black;

}

.main-heading {
  font-size: 25px;
  font-weight: 500;
}

.main-close {
  font-size: 35px;
  cursor: pointer;
  margin: 5px 10px;
}

.text {
  font-size: 50px;
  text-align: center;
  background: linear-gradient(to right, #850F8D 20%, #C738BD 30%, #E49BFF 70%, #F8F9D7 80%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shine 5s ease-in-out infinite alternate;
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@media (max-width: 1230px) {
  .text {
    font-size: 50px;
  }
}
</style>
