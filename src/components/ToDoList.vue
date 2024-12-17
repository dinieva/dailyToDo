<template>
  <ul v-for="toDo in todosList" :key="toDo.id">
    <ToDoItem :task="toDo" :showDate="showDateProps" />
  </ul>
</template>

<script setup lang="ts">
import ToDoItem from "./ToDoItem.vue";
import type { NewTask } from "../types/NewTask";

interface Props {
  showDateProps: boolean;
  todosList: NewTask[];
}
withDefaults(defineProps<Props>(), {
  showDateProps: false,
});
</script>

<style scoped>
</style>