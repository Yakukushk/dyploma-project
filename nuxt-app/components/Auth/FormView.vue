<script setup lang="ts">
//@ts-ignore
import type {Ref} from 'vue'
import {useAuth} from "~/firebase/auth";
//@ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.js'
import UserDataService from "~/service/userDataService";
import axios from "axios";

const auth = useAuth();
const service = new UserDataService();
const router = useRouter();
const email = ref<string>("");
const password = ref<string>("");
const role = ref<string>("");
const items = reactive([
  'Member',
  'Manager'
]);
const login = async () => {
  try {
    const token = localStorage.getItem('token');
    if(token) {
       const response = await service.getUsers();
      alert(`User ${response.data.email.result} is already logged in`);
    } else {
      const response = await axios.post('https://localhost:7080/login', {
        email: email.value,
        password: password.value
      }, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          withCredentials: true
        }
      });

      console.log('Response data:', response.data);

      localStorage.setItem('token', response.data.accessToken);

      await service.getUsers();
      await router.push('/dashboard');
    }
  } catch (error) {
    console.error('Error during login request:', error);
  }
}
const register = async () => {
  try {
    const response = await service.apiClient.post('/User/Register', {
      email: email.value,
      password: password.value,
      role: role.value
    });
    // localStorage.setItem('token', JSON.stringify(response.data.accessToken));
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }

}


const checkValidation = async() => {
  if (!email.value) {
    email.value.focus();
    await Swal.fire("Give email");
  }
}

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
              v-model="email"
              label="Email*"
              color="purple"
              placeholder="johndoe@gmail.com"
              type="email"
              :rules="rules"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password*"
              color="purple"
              :type="show1 ? 'text' : 'password'"
              :rules="rules"
              @click:append="show1 = !show1"
              hint="Enter your password to access this website"
              required
          ></v-text-field>
          <v-select
              v-model="role"
              :items="items"
              item-title="Role"
              label="Select"
              persistent-hint
              return-object
              single-line
          ></v-select>

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
              @click="register"
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
              v-model="email"
              label="Email*"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
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
              @click="login"
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