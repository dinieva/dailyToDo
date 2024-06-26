import { defineStore } from 'pinia'
import { ref, computed } from "vue";
import { Ref } from "vue";
import {useToDoStore} from "./toDoStore"
import {NewTask} from "../types/NewTask";
import {FilterValue } from "../types/Filters";

export const useFilterTasksStore = defineStore('filterTasks', {
    state: () => {
        const visibility: Ref<FilterValue> = ref('id')
       
        const filters = {
            'id': (todos: NewTask[]) => todos.sort((a: NewTask, b: NewTask) => a.id - b.id),
            'sortedDate': (todos:NewTask[]) =>  todos.sort((a: NewTask, b: NewTask) => Number(new Date(a.date)) - Number(new Date(b.date))),
            'active': (todos:NewTask[]) => todos.filter((todo:NewTask) => !todo.done),
            'completed': (todos:NewTask[]) => todos.filter((todo:NewTask) => todo.done),
        }
        // вычисляемое состояние
        const filteredTodos =  computed(() => filters[visibility.value](useToDoStore().allTasks))

        return {
            visibility,
            filters,
            filteredTodos,
        }
    }
})


