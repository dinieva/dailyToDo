import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useFormatDateStore = defineStore('formatDate', {

    state: () => {
        const date = ref(new Date());
       
       /* const dateFormate= computed(function(){
            let day = String(date.value.getDate()).padStart(2, "0");
            let month = String(date.value.getMonth() + 1).padStart(2, "0");
            let year = date.value.getFullYear();
            return `${year}-${month}-${day}`;
        })  */

        const dateFormate = computed({
            get:()=> {
                let day = String(date.value.getDate()).padStart(2, "0");
                let month = String(date.value.getMonth() + 1).padStart(2, "0");
                let year = date.value.getFullYear();
                return `${year}-${month}-${day}`
            },
            set: (newValue:string )=> date.value =new Date(newValue) 
          })

        return {
            date,
            dateFormate
        }
    }
})