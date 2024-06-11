<script setup lang="ts">

import { inject, defineEmits } from 'vue';
import ProvideTest from "~/components/admin/Test/ProvideTest.vue";
const data = inject('info');
const emit = defineEmits('submitList');
const submit = (item) => {
  emit('submitList', item);
  console.log(item.Name);
}
</script>

<template>
  <div>
    <ul v-for="item in data" :key="item.id">
      <li>{{ item.Name }}</li>
      <li>
        <button class="button" @click="submit(item)">Submit</button>
      </li>
    </ul>

  </div>

</template>

<style scoped>
div:hover {
  color: darkgrey;
}
button.button {
  border: 2px solid black;
  border-radius: 5px;
  font-style: normal;
  font-family: bold;
}

</style>