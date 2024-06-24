import {defineStore} from 'pinia';
import {db} from './connection'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { ref, reactive } from "vue"
import { useStore } from '~/composables/store'
import { useAuth } from '~/firebase/auth'

export const useFireStore = defineStore('plan', () => {
    const store = useStore()
    const plans = ref([])
    const auth = useAuth()
    const values = reactive({
        date: store.objValues.model,
        persons: store.objValues.persons,
        chips: store.objValues.chips,
        ticks: store.objValues.ticks
    })

    const addPost = async () => {
        try {
            await addDoc(collection(db, 'plan'), {
                uid: auth.user.uid,
                date: values.date,
                persons: values.persons,
                chips: values.chips,
                ticks: values.ticks
            })
        } catch (error) {
            console.error("Error adding document: ", error)
        }
    }

    const fetchPlans = async () => {
        try {
            const docRef = collection(db, 'plan')
            onSnapshot(docRef, (querySnapshot) => {
                plans.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            })
        } catch (error) {
            console.error("Error fetching plans: ", error)
        }
    }

    return {
        values,
        addPost,
        fetchPlans,
        plans
    }
})
