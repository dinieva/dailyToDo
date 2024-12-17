<template>
  <div class="flex justify-center gap-5 border-b-2 border-cyan-300 w-96 pb-5">
    <RouterLink to="/dailyToDo">
      <button
        class="w-10 h-10 bg-calendar bg-center bg-no-repeat bg-contain hover:scale-125 relative"
        @click="formatDateStore.date = new Date()"
      >
        {{ formatDateStore.dateFormate.slice(-2) }}
      </button>
    </RouterLink>

    <RouterLink to="/allTasks"
      ><button
        class="w-10 h-10 bg-list bg-center bg-no-repeat bg-contain hover:scale-125"
        @click="formatDateStore.date = new Date()"
      ></button
    ></RouterLink>

    <BtnAddNewTask />
  </div>
</template>

<script setup lang="ts">
import BtnAddNewTask from "./BtnAddNewTask.vue";
import { useFormatDateStore } from "../stores/formatDateStore";
const formatDateStore = useFormatDateStore();
</script>

<style scoped>
</style>