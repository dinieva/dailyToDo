import { defineStore } from 'pinia'
import { ref, computed, watchEffect } from 'vue'
import { Ref } from 'vue'
import {useFormatDateStore} from './formatDateStore'
import {NewTask} from '../types/NewTask'

const formatDateStore = useFormatDateStore()

export const useToDoStore = defineStore('toDoStore', {
  state: () => {
    const allTasks: Ref<NewTask[]> = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))
    // хранение состояния
    watchEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(allTasks.value))
    })

    return {
      allTasks,
    
      addNewTask(text:string, priority:string,date:string ){
        let task: NewTask = {
          id:  Date.now(),
          text: text,
          category: priority,
          done: false,
          date: date
        }
        allTasks.value.push(task)
        localStorage.setItem('tasks', JSON.stringify(allTasks.value) )   
      },

      deleteTask(delTask: NewTask){
        allTasks.value = allTasks.value.filter((task:NewTask)  => task.id != delTask.id)
        return allTasks.value 
      },
      
      tasksOfTheDay:computed(function(){
        return allTasks.value.filter((task:NewTask) => task.date === formatDateStore.dateFormate)
      }),
    }
  }
})