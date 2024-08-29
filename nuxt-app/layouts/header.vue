<script setup lang="ts">

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { auth } from "~/firebase/connection";
import { useAuth } from "~/firebase/auth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { onMounted } from "vue";
import UserDataService from "~/service/userDataService";

const authStore = useAuth();
const router = useRouter();
const service = new UserDataService();

const username = ref(null);
console.log(JSON.stringify(username.result));
const resources = ref([
  'About us',
  'FAQ'
]);
const account = ref([
  'Settings'
]);
const items = reactive([
  {
    title: 'Contact',
    value: 'contact',
  },
  {
    title: 'Trips',
    value: 'trips',
  },
  {
    title: 'About Us',
    value: 'about',
  },
  {
    title: 'FAQ',
    value: 'faq',
  },
  {
    title: 'Settings',
    value: 'settings'
  }
]);

const loading: Ref<boolean> = ref(true);
const classObject = reactive({
  fontSize: '14px',
  fontWeight: '500'
});

class NavDrawers {
  drawer: boolean;
  group: null | string;
  items: any[];
  color: any;

  constructor(drawer: boolean, group: null | string, items: any[], color: any) {
    this.drawer = drawer;
    this.group = group;
    this.items = items;
    this.color = color;
  }
}

const nav = reactive(new NavDrawers(false, null, items, { backgroundColor: 'blueviolet', color: 'white' }));

const logout = async () => {
  try {
    await service.logOut();
    await Swal.fire({
      title: 'User was logged out',
      text: "You clicked the button!",
    });
    await router.push("/");
  } catch (e) {
    console.error(e);
  }
  console.log("Logged out")
};

watch(() => nav.group, () => {
  nav.drawer = false;
});
watch(() => auth.currentUser, (newUser) => {
  if (newUser) {
    loading.value = false;
  }
}, { immediate: true });

onMounted(async () => {
  try {
    const response = await service.getUsers();
    
      username.value = response.result;
   
  }
  catch (error) {
    console.error('Error fetching username:', error);
  } finally {
    loading.value = false;
  }


})
</script>

<template>
  <header class="header-main">
    <div class="container">
      <v-toolbar class="toolbar" :elevation="8">
        <v-row>
          <v-col cols="7" class="ml-5">
            <a href="#!" class="nav-logo">
              <font-awesome-icon icon="fa-solid fa-plane-departure" style="width: 30px; height: 30px" />
            </a>
          </v-col>
          <v-col>
            <v-btn :style="classObject" flat to="/contact" nuxt>Contact</v-btn>
            <v-btn :style="classObject" flat to="/trips" nuxt>Trips</v-btn>

            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" :style="classObject">Resources</v-btn>
              </template>
              <v-list class="mt-4">
                <v-list-item v-for="(item, index) in resources" :key="index">
                  <v-list-item-title>
                    <v-btn variant="text">{{ item }}</v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" :style="classObject">
                  <div v-if="loading">
                    <v-progress-linear color="deep-purple-accent-4" indeterminate rounded></v-progress-linear>
                  </div>
                  <div v-else>
                    {{ username }}
                  </div>
                </v-btn>
              </template>
              <v-list class="mt-4">
                <v-list-item class="d-flex justify-center" v-for="(item, index) in account" :key="index">
                  <v-list-item-title>
                    <v-btn variant="text">{{ item }}</v-btn>
                  </v-list-item-title>
                  <v-list-item-title>
                    <v-btn @click="logout" variant="text">Log out</v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-card class="nav-mobile">
        <v-layout>
          <v-app-bar :style="nav.color" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="nav.drawer = !nav.drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Menu</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>

          <v-navigation-drawer v-model="nav.drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined"
            temporary>
            <v-list :items="nav.items"></v-list>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
    </div>
  </header>
  <slot />
</template>

<style scoped>
.toolbar {
  background-color: blueviolet;
  color: white;
  font-weight: 500;
}

.nav-logo {
  color: white;
}

.nav-mobile {
  display: none;
  background-color: blueviolet;
  margin-bottom: 90px;
}

@media (max-width: 1230px) {
  .toolbar {
    display: none;
  }

  .nav-mobile {
    display: block;
    z-index: 1;
    //margin-bottom: 90px;
  }
}
</style>
