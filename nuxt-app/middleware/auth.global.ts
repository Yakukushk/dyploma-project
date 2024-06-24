
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "~/firebase/connection";

export default defineNuxtRouteMiddleware((to, from) => {

    onAuthStateChanged(auth, (user) => {
        if (!user && to.path === "/dashboard") {

            return navigateTo('/');
        }
    });
});
