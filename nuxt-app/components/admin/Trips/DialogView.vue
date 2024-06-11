

<template>
  <div class="text-center pa-4">
    <v-dialog
        v-model="dialog"
        max-width="800"
        max-height="auto"
        persistent


    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps" variant="text" icon="mdi-pen"></v-btn>
      </template>

      <v-card class="overflow-hidden">
        <div class="d-flex justify-end">
          <v-btn variant="text" icon="mdi-close" @click="dialog = false"></v-btn>
        </div>
        <v-card-item>
          <h2>Update Form</h2>
          <form class="mt-2">
            <v-text-field
                v-model="variables.name"
                :counter="10"
                variant="outlined"
                label="Name"
                auto-grow
                shaped
            ></v-text-field>
            <v-row>
              <v-col>
                <v-select
                    v-model="variables.select"
                    :items="variables.category"
                    variant="outlined"
                    label="Category"
                    auto-grow
                    shaped
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                    v-model="variables.selectCountry"
                    :items="variables.city_country"
                    variant="outlined"
                    label="City/Country"
                    auto-grow
                    shaped
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                    v-model="variables.coordinate"
                    :counter="7"
                    variant="outlined"
                    label="Coordinates"
                    auto-grow
                    shaped
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                    v-model="variables.link"
                    variant="outlined"
                    label="Link"
                    auto-grow
                    shaped
                ></v-text-field>
              </v-col>
            </v-row>
            <v-textarea
                label="Description"
                v-model="variables.description"
                row-height="25"
                rows="3"
                variant="outlined"
                auto-grow
                shaped
            ></v-textarea>
            <v-textarea
                label="Additional Description"
                v-model="variables.additional"
                row-height="25"
                rows="3"
                variant="outlined"
                auto-grow
                shaped
            ></v-textarea>
            <v-btn
                type="submit"
                variant="outlined"
            >
              submit
            </v-btn>


          </form>
        </v-card-item>
        <template v-slot:actions>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
const dialog = ref(false);
const props = defineProps({
  variables : {
    type: Object,
    required: true
  }
})
</script>

