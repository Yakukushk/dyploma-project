<script setup lang="ts">
import {useTaskStore} from "~/composables/taskStore";

const variables = reactive({
  subtitle: "Task Manager",
  th: {
    id: "Id",
    name: "Name",
    action: "Action"


  }
});
const store = useTaskStore();
</script>

<template>
  <v-card
      class="mx-auto"
      max-width="450"
      hover
  >
    <v-card style="background-color: rebeccapurple; color: ghostwhite">
      <v-card-subtitle class="mt-2">
        <h2>{{ variables.subtitle }}</h2>
      </v-card-subtitle>
      <v-card-text>
        {{ new Date(Date.now()) }}
      </v-card-text>
    </v-card>
    <v-card-item>
      <v-text-field
          v-model="store.qrt"
          :counter="20"
          label="Task"
          required
      ></v-text-field>
      <v-btn @click.prevent="store.addTask" icon="mdi-plus" variant="outlined"></v-btn>
    </v-card-item>
    <v-card-item>
      <v-table height="300px">
        <thead>
        <tr>
          <th class="text-left">
            {{ variables.th.id }}
          </th>
          <th class="text-left">
            {{ variables.th.name }}
          </th>
          <th class="text-left">
            {{ variables.th.action }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, index) in store.arrayOfTask"
            :key="index"
        >
          <td>{{ index }}</td>
          <td>{{ item.name }}</td>
          <td>
            <v-btn @click.prevent="store.removeTask(item)" icon="mdi-close" variant="text"></v-btn>
          </td>
        </tr>
        </tbody>
      </v-table>
    </v-card-item>


  </v-card>
</template>

<style scoped>

</style>