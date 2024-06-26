<template>
  <ul v-for="toDo in todosList" :key="toDo.id">
    <ToDoItem :task="toDo" :showDate="showDateProps" />
  </ul>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import ToDoItem from "./ToDoItem.vue";
import { NewTask } from "../types/NewTask";

const props = defineProps({
  todosList: {
    type: Array as PropType<NewTask[]>,
    required: true,
  },
  showDateProps: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped>
</style>