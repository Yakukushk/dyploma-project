<script setup lang="ts">
const variables = reactive({
  maxWidth: 344,
  subtitle: 184,
  title: "Booking"
})
</script>

<template>
  <v-card
      variant="elevated"
      class="mx-auto"
      :max-width="variables.maxWidth"
      hover
      :subtitle="`Users : ${variables.subtitle}`"
      :title="variables.title"
      style="cursor: default;"
  >
    <v-card-item>
      <v-row>
        <v-col>
          <v-icon style="color: rebeccapurple" icon="mdi-sofa" size="x-large"></v-icon>
        </v-col>
      </v-row>


    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>