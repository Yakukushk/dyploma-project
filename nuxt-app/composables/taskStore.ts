import {defineStore} from 'pinia';
import {ref, watch} from 'vue';

export const useTaskStore = defineStore('task', () => {
    const qrt = ref("");
    const arrayOfTask = ref([] || JSON.parse(localStorage.getItem('tasks')));
    watch(arrayOfTask, (data) => {
        localStorage.setItem('tasks', JSON.stringify(data));
    });

    function addTask() {
        arrayOfTask.value.push({name: qrt.value});
        qrt.value = "";
    }

    function removeTask(index: any | Number) {
        arrayOfTask.value.pop(index);
    }

    return {qrt, arrayOfTask, addTask, removeTask};
});