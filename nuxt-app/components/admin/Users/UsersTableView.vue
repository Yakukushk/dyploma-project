<script setup lang="ts">
import {mergeProps, ref, watch} from 'vue';
import {useFetchData} from "~/composables/dataApi";

const {users, FakeAPI} = useFetchData();


</script>


<template>
  <v-data-table theme="light">
    <thead>
    <tr>
      <th class="text-left">
        #
      </th>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Created
      </th>
      <th class="text-left">
        UserID
      </th>
      <th class="text-left">
        Action
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in users" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.created }}</td>
      <td>{{ item.userID }}</td>
      <td>
        <div class="text-center">
          <v-menu>
            <template v-slot:activator="{ props: menu }">
              <v-tooltip location="top">
                <template v-slot:activator="{ props: tooltip }">
                  <v-btn
                      variant="text"
                      icon="mdi-dots-vertical"
                      v-bind="mergeProps(menu, tooltip)"
                  >

                  </v-btn>
                </template>
                <span>Menu</span>
              </v-tooltip>
            </template>
            <v-list>
              <v-list-item
              >
                <v-list-item-title>
                  <v-btn variant="text">Reset Password</v-btn>
                </v-list-item-title>
                <v-list-item-title class="mt-2">
                  <v-btn variant="text">Disable Account</v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </td>
    </tr>
    </tbody>
  </v-data-table>
</template>


<style scoped>

</style>