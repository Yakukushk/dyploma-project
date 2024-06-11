<template>
  <div>
    <v-card>
      <v-layout>
        <v-navigation-drawer
            class="bg-shades-black"
            v-model="drawer"
            temporary
        >
          <v-list-item
              :prepend-avatar="listItem.prepend_avatar"
              :title="listItem.title"
          ></v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item :to="routing.dashboard" prepend-icon="mdi-view-dashboard" title="Dashboard" value="home" ></v-list-item>
            <v-list-item :to="routing.users" prepend-icon="mdi-account" title="Users" value="users"></v-list-item>
            <v-list-item :to="routing.content" prepend-icon="mdi-content-paste" title="Manage Content" value="content"></v-list-item>
            <v-list-item :to="routing.trips" prepend-icon="mdi-map-marker" title="Manage Trips" value="trips"></v-list-item>
            <v-list-item prepend-icon="mdi-logout" title="Log out" value="logout"></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-message" class="" title="Message" value="message" >
              <template v-slot:append>
                <v-badge
                    color="error"
                    content="6"
                    inline
                ></v-badge>
              </template>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: auto">

            <font-awesome-icon class="ma-5 h-20 w-20"  @click.stop="drawer = !drawer" icon="fa-solid fa-bars" />


          <div>
            <slot/>
          </div>

        </v-main>
      </v-layout>
    </v-card>

  </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const drawer = ref(false);

const routing = reactive({
  dashboard: "/admin",
  users: "/admin/users",
  content: "/admin/content",
  trips: "/admin/trips"

});
const listItem = reactive({
  prepend_avatar : "https://randomuser.me/api/portraits/men/78.jpg",
  title : "Admin Name"

});
</script>

<style>

</style>
