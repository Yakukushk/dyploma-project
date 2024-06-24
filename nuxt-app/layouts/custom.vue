<script setup lang="ts">
import type {Ref} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useAuth} from "~/firebase/auth";
import FormView from "~/components/Auth/FormView.vue";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {auth} from "~/firebase/connection";

const router = useRouter();
const authStore = useAuth();
const showSwal = async (title: string, text: string, icon: 'success' | 'error') => {
  await Swal.fire({
    title,
    text,
    icon
  });
}
const login = () => {

  authStore.login().catch((e: string | any) => {
    console.error(e);
  }).then(async () => {
    if (auth.currentUser?.emailVerified) {
      dialog.value = false;
      await Swal.fire({
        title: `Good job! ${authStore.email}`,
        text: "You clicked the button!",
        icon: "success"
      });
      await router.push('/dashboard');
    } else {
      dialog.value = false;
      await Swal.fire({
        title: `Verify your Email`,
        text: "You clicked the button!",
        icon: "error"
      });
    }
  });
  authStore.email = "";
  authStore.password = "";


}
const register = () => {
  authStore.register().catch((e: string | any) => {
    console.error(e);

  });
  dialog.value = false;
  authStore.email = "";
  authStore.password = "";

}
const dialog: Ref<boolean> = ref(false);
const icons = ['fa-solid fa-plane', 'fa-solid fa-mountain', 'fa-solid fa-location-dot', 'fa-solid fa-car']
</script>

<template>
  <div>
    <header v-motion-pop-visible-once class="header">
      <div class="container">
        <div class="header-nav">
          <a href="#!" class="nav-logo">
            <font-awesome-icon icon="fa-solid fa-plane-departure" style="width: 30px; height: 30px"/>
          </a>
          <nav id="nav" class="nav">
            <ul class="nav-list">
              <li class="nav-item">
                <v-btn @click="dialog = true" class="nav-link log" variant="text" rounded>Log in</v-btn>
              </li>
              <li class="nav-item">

                <v-btn @click="dialog = true" class="nav-link font" variant="flat"
                       style="background-color: blueviolet; color: white" rounded>
                  Sign in
                </v-btn>

              </li>
            </ul>
          </nav>
        </div>
        <v-row class="header-row"
               align="center"
        >
          <v-col>
            <div class="header-content">
              <v-card
                  variant="text"
                  class="mx-auto"
                  color="surface-variant"
                  max-width="600"
              >
                <v-card-title>
                  <h1 class="main-heading">Split the Costs, Share<br/> the Joy: Stress-Free<br/> Travel Expense<br/>
                    Sharing!</h1>
                </v-card-title>
                <v-card-item class=" d-inline-flex flex-column">
                  <div>
                    <font-awesome-icon class="icons mr-7" v-for="(item, index) in icons" :key="index" :icon="item"
                                       style="color: blueviolet; width: 30px; height: 30px"/>
                  </div>

                </v-card-item>
                <v-card-actions>
                  <v-btn @click="dialog = true" class="nav-link mr-5" variant="flat"
                         style="background-color: blueviolet; color: white">Sign
                    in
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
          <v-col>
            <v-carousel height="350px" class="rounded" show-arrows="hover" cycle hide-delimiter-background>
              <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
              ></v-carousel-item>

              <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                  cover
              ></v-carousel-item>

              <v-carousel-item
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  cover
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>
    </header>


  </div>
  <FormView :dialog="dialog" :user="authStore.user"
            @update:dialog="dialog = $event" @login="login" @register="register"/>
  <slot/>

</template>

<style scoped>
.container {
  max-width: 1230px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
}

header.header {
  background-color: white;
  padding-top: 46px;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 70px;
}

.nav-logo {
  padding: 0 12px 3px 0;
  position: relative;
  padding-right: 12px;
  padding-bottom: 3px;
  line-height: 1;
  color: blueviolet;
}

ul.nav-list {
  display: flex;
  column-gap: 10px;
  font-weight: 500;
  font-size: 14px;
}

.main-heading {
  font-weight: 600;
  font-size: 30px;
}

.nav-link.log {
  color: blueviolet;
}
</style>