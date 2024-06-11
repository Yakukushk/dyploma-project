<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const links = ref(['About Us', 'FAQ', 'Contact Us']);
const icons = ref(['mdi-facebook', 'mdi-twitter', 'mdi-linkedin',  'mdi-instagram'])
</script>

<template>

  <footer class="footer">
    <v-row justify="center" no-gutters>
      <v-btn
          v-for="link in links"
          :key="link"
          class="mx-2 mt-4"
          color="white"
          rounded="xl"
          variant="text"

      >
        {{ link }}
      </v-btn>
      <v-divider inset class="divider mx-auto mt-2" :thickness="2"></v-divider>
      <v-col class="text-center mt-4" cols="12">
        <font-awesome-icon icon="fa-solid fa-plane-departure" style="width: 30px; height: 30px; color: whitesmoke"/>
      </v-col>
      <v-col class="text-center text-white mt-4" cols="12">
        <div>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              class="mx-4"
              variant="text"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<style scoped>
.footer {
  background-color: blueviolet;
  height: 230px;
}
.divider {
  color : white;
  margin: 0 auto;

}
</style>