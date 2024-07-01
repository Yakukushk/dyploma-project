<script setup lang="ts">
import {ref, onMounted} from 'vue';
import type Ref from 'vue'
import UserDataService from '~/service/userDataService';

interface Place {
  placeId: number;
  name: string;
  address: string;
  description: string;
  cooX: number;
  cooY: number;
}

const places = ref<Place[]>([]);
const service = new UserDataService();
const selectedPlaceId = ref<number | null>(null);
const updateDialog = ref<boolean>(false);
const values = reactive({
  name: '',
  address: '',
  description: '',
  cooX: 0.00,
  cooY: 0.00

});
const updateValues = reactive({
  name: '',
  address: '',
  description: '',
  cooX: 0.00,
  cooY: 0.00

});
const dialog: Ref<boolean> = ref(false);

const fetchData = async () => {
  try {
    const response = await service.getPlaces();
    places.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching places:', error);
  }
};
const addData = async () => {
  try {
    const response = await service.addPlaces({
      name: values.name,
      address: values.address,
      description: values.description,
      cooX: values.cooX,
      cooY: values.cooY
    });
    console.log(response.data);
    dialog.value = false;
    await fetchData();
  } catch (e) {
    console.error('Error add places:', e);
  }
}
const removeData = async (id: number) => {
  try {
    const response = await service.removePlace(id);
    await fetchData();
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
}

const updateData = async () => {
  try {
    const response = await service.updatePlace({
      placeId: selectedPlaceId.value,
      name: updateValues.name,
      address: updateValues.address,
      description: updateValues.description,
      cooX: updateValues.cooX,
      cooY: updateValues.cooY
    });
    console.log(response.data);
    updateDialog.value = false;
    await fetchData()
  } catch (e) {
    console.error(e);
  }
}
const openDialogForUpdate = (place: any) => {
  selectedPlaceId.value = place.placeId;
  updateValues.name = place.name;
  updateValues.address = place.address;
  updateValues.description = place.description;
  updateValues.cooX = place.cooX;
  updateValues.cooY = place.cooY;
  updateDialog.value = true;
};
onMounted(() => {
  fetchData();
});
</script>


<template>
  <div class="container">
    <ul v-for="items in places" :key="items.placeId" class="mb-4 border border-b-2">
      <li>{{ items.name }}</li>
      <li>{{ items.address }}</li>
      <li>{{ items.description }}</li>
      <li>{{ items.cooX }} - {{ items.cooY }}</li>
      <li>
        <v-btn prepend-icon="mdi-delete" color="red" class="danger" @click="removeData(items.placeId)">Delete</v-btn>
      </li>
      <li>
        <v-dialog
            v-model="updateDialog"
            max-width="600"
        >
          <template v-slot:activator="{ props: activatorProps1 }">
            <v-btn
                class="text-none font-weight-regular"
                prepend-icon="mdi-account"
                text="Edit Profile"
                variant="tonal"
                v-bind="activatorProps1"
                @click="openDialogForUpdate(items)"
            ></v-btn>
          </template>

          <v-card
              prepend-icon="mdi-account"
              title="Place Form"
          >
            <v-card-text>
              <v-row dense>
                <v-col
                    cols="12"
                    md="4"
                    sm="6"
                >
                  <v-text-field
                      v-model="updateValues.name"
                      label="Name*"
                      required
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                    sm="6"
                >
                  <v-text-field
                      v-model="updateValues.address"
                      hint="example of helper text only on focus"
                      label="Address"
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                    sm="6"
                >
                  <v-text-field
                      v-model="updateValues.description"
                      hint="example of persistent helper text"
                      label="Description"
                      persistent-hint
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="4">
                  <h5>CooX</h5>

                  <v-number-input v-model="updateValues.cooX" control-variant="stacked"></v-number-input>
                </v-col>

                <v-col cols="12" md="4" sm="4">
                  <h5>CooY</h5>

                  <v-number-input v-model="updateValues.cooY" control-variant="stacked"></v-number-input>
                </v-col>
              </v-row>

              <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                  text="Close"
                  variant="plain"
                  @click="updateDialog = false"
              ></v-btn>

              <v-btn
                  color="primary"
                  text="Save"
                  variant="tonal"
                  @click="updateData"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
    </ul>
  </div>
  <div class="pa-4 text-center">
    <v-dialog
        v-model="dialog"
        max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="text-none font-weight-regular"
            prepend-icon="mdi-account"
            text="Add Place"
            variant="tonal"
            v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
          prepend-icon="mdi-account"
          title="Place Form"
      >
        <v-card-text>
          <v-row dense>
            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  v-model="values.name"
                  label="Name*"
                  required
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  v-model="values.address"
                  hint="example of helper text only on focus"
                  label="Address"
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  v-model="values.description"
                  hint="example of persistent helper text"
                  label="Description"
                  persistent-hint
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" sm="4">
              <h5>CooX</h5>

              <v-number-input v-model="values.cooX" control-variant="stacked"></v-number-input>
            </v-col>

            <v-col cols="12" md="4" sm="4">
              <h5>CooY</h5>

              <v-number-input v-model="values.cooY" control-variant="stacked"></v-number-input>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Close"
              variant="plain"
              @click="dialog = false"
          ></v-btn>

          <v-btn
              color="primary"
              text="Save"
              variant="tonal"
              @click="addData"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>