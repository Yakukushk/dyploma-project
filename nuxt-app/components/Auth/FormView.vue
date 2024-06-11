<script setup lang="ts">
import type {Ref} from 'vue'
import {useAuth} from "~/firebase/auth";

const auth = useAuth();

interface IProps {
  dialog: boolean,
  user: null | any
}

const props = defineProps<IProps>();
const getLogin: Ref<boolean> = ref(false);
const emit = defineEmits(['update:dialog', 'login', 'register']);
const handleClose = () => {
  emit('update:dialog', false);
};
const rules = [
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
];
const show1 = ref(false);
</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog
        v-model="props.dialog"
        max-width="600"

    >

      <v-card
          prepend-icon="mdi-account"
          title="Registration Form"
          v-if="getLogin === false"
      >
        <v-card-text>
          <v-text-field
              v-model="auth.email"
              label="Email*"
              color="purple"
              placeholder="johndoe@gmail.com"
              type="email"
              :rules="rules"
              required
          ></v-text-field>

          <v-text-field
              v-model="auth.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password*"
              color="purple"
              :type="show1 ? 'text' : 'password'"
              :rules="rules"
              @click:append="show1 = !show1"
              hint="Enter your password to access this website"
              required
          ></v-text-field>


          <small class="text-caption text-medium-emphasis">*indicates required field</small>
          <br/>
          <small @click="getLogin = true"
                 class="text-caption text-decoration-underline text-medium-emphasis cursor-pointer">If you have an
            account?
            <v-tooltip
                activator="parent"
                location="bottom"
            >Login
            </v-tooltip>
          </small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Close"
              variant="plain"
              @click="handleClose"
          ></v-btn>

          <v-btn
              @click="emit('register')"
              color="purple"
              text="Create user"
              variant="plain"

          ></v-btn>
        </v-card-actions>
      </v-card>
      <v-card
          prepend-icon="mdi-account"
          title="Login Form"
          v-else
      >
        <v-card-text>
          <v-text-field
              v-model="auth.email"
              label="Email*"
              required
          ></v-text-field>

          <v-text-field
              v-model="auth.password"
              label="Password*"
              type="password"
              required
          ></v-text-field>
          <v-btn @click="auth.loginByGoogle()" color="purple" class="mb-4" variant="plain">
            <v-icon icon="mdi-google" start></v-icon>
            Sign up by Google
          </v-btn>
<br/>

          <small class="text-caption text-medium-emphasis mt-4">*indicates required field</small>
          <br/>
          <small @click="getLogin = false"
                 class="text-caption text-decoration-underline text-medium-emphasis cursor-pointer">If you do not have
            an account?
            <v-tooltip
                activator="parent"
                location="bottom"
            >Sign up
            </v-tooltip>
          </small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Close"
              variant="plain"
              @click="handleClose"
          ></v-btn>

          <v-btn
              @click="emit('login')"
              color="purple"
              text="Save"
              variant="plain"

          ></v-btn>
        </v-card-actions>
      </v-card>


    </v-dialog>
  </div>
</template>

<style scoped>

</style>