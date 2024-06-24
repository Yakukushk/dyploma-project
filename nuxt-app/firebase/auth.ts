import {defineStore} from "pinia";
import {ref} from 'vue'
import type {Ref} from 'vue'
import {
    createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification,
    signInWithCredential,
    signInWithEmailAndPassword, signInWithPopup,
    signOut, User
} from "@firebase/auth";
import {auth} from './connection'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const useAuth = defineStore('auth', () => {
    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');
    const user: Ref<null> = ref(null);
    const router = useRouter();
    const googleProvider = new GoogleAuthProvider();
    const register = async (): Promise<void> => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
            await sendEmailVerification(res.user);
            await Swal.fire({
                title: "Registration successful!",
                text: "Verification email sent. Please check your inbox.",
                icon: "success"
            });
        } catch (error) {
            console.error(error);
            await Swal.fire({
                title: "Error",
                text: `${error.message}`,
                icon: "error"
            });
        }
    }
    const login = async (): Promise<void> => {

        await signInWithEmailAndPassword(auth, email.value, password.value).then(async (user: string | any): Promise<void> => {
            console.log(user.user);
        }).catch(async (error: string): Promise<void> => {

        });


    }
    const loginByGoogle = async (): Promise<void> => {
        await signInWithPopup(auth, googleProvider).then(async (user: string | any) => {
            await Swal.fire({
                title: `Good job! ${email.value}`,
                text: "You clicked the button!",
                icon: "success"
            });
            console.log(user.user);
        }).catch(async (error: string): Promise<void> => {
            await Swal.fire({
                title: `${error}`,
                icon: "error"
            });
        });
        await router.push('/dashboard');
    }
    const logout = async () => {
        try {
            await signOut(auth);
            user.value = null;
        } catch (e) {
            console.error(e);
        }
    }
    onAuthStateChanged(auth, (userFetch: any) => {
        user.value = userFetch ? {email: userFetch.email, uid: userFetch.uid} : null;
    });

    return {
        email,
        password,
        user,
        register,
        login,
        logout,
        loginByGoogle
    }
})