<template>
  <EmptyListPage v-if="toDoStore.allTasks.length <= 0" />
  <CurrentTasksPage v-else :length="toDoStore.allTasks.length" />
</template>

<script setup lang="ts">
import { useToDoStore } from "../stores/toDoStore";
import EmptyListPage from "./EmptyListPage.vue";
import CurrentTasksPage from "./CurrentTasksPage.vue";

const toDoStore = useToDoStore();
</script>

<style scoped>
</style>