<script setup lang="ts">
//@ts-ignore
import {useField, useForm} from 'vee-validate'
import {useStore} from "~/composables/store";


const variables = reactive({
  name: "",
  category: ["Hotels", "Tours", "Gastronomic Establishments"],
  city_country: ["Warsaw, Poland", "Berlin, Germany", "Kyiv, Ukraine"],
  link: "",
  coordinate: 0.00,
  description: "",
  additional: "",

  select: null,
  selectCountry: null
});
const {images} = useStore();

</script>

<template>
  <v-container class="border-sm rounded">
    <div class="mb-4">
      <h1>Form Input</h1>
    </div>
    <v-row>
      <v-col>
        <form>
          <v-text-field
              v-model="variables.name"
              :counter="10"
              variant="outlined"
              label="Name"
              auto-grow
              shaped
          ></v-text-field>
          <v-row>
            <v-col cols="5">
              <v-select
                  v-model="variables.select"
                  :items="variables.category"
                  variant="outlined"
                  label="Category"
                  auto-grow
                  shaped
              ></v-select>
            </v-col>
            <v-col cols="5">
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
            <v-col cols="6">
              <v-text-field
                  v-model="variables.coordinate"
                  :counter="7"
                  variant="outlined"
                  label="Coordinates"
                  auto-grow
                  shaped
              ></v-text-field>
            </v-col>
            <v-col cols="6">
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
      </v-col>
      <v-col>
        <v-file-input
            label="File input"
            prepend-icon="mdi-camera"
            variant="filled"
        ></v-file-input>
        <v-carousel
            height="400"
            show-arrows="hover"
            cycle
            hide-delimiter-background

        >
          <v-carousel-item
              v-for="(slide, i) in images"
              :key="i"
              :src="slide.src"
              cover
              class="border rounded"
          ></v-carousel-item>
        </v-carousel>
        <v-table height="300px">
          <thead>
          <tr>
            <th class="text-left">
              #
            </th>
            <th class="text-left">
              Images
            </th>
            <th class="text-left">
              Action
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(item, index) in images"
              :key="index"
          >
            <td>
              {{ index }}
            </td>
            <td>
              {{ item.src }}
            </td>
            <td>
              <v-btn icon="mdi-close" variant="text"></v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>