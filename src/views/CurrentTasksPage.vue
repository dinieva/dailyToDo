<template>
  <div
    class="h-screen w-screen m-auto flex flex-col justify-start items-center gap-5"
  >
    <div class="w-96 flex flex-col justify-center items-start p-5">
      <div class="w-96 flex justify-between items-center">
        <h1 class="block text-3xl">Текущие задачи</h1>

        <input
          type="date"
          v-model="formatDateStore.dateFormate"
          class="cursor-pointer"
          @change="formatDateStore.date = new Date(formatDateStore.dateFormate)"
        /><!-- $event.target.value -->
      </div>
    </div>

    <NoTask v-if="toDoStore.tasksOfTheDay.length == 0" />
    <div v-else class="flex flex-col justify-between gap-10 w-96 pl-5">
      <div class="flex gap-5">
        <span class="text-xl text-gray-300"
          >Активные:
          {{
            toDoStore.tasksOfTheDay.filter((todo) => !todo.done).length
          }}</span
        >
        <span class="text-xl text-gray-300"
          >Выполненные:
          {{ toDoStore.tasksOfTheDay.filter((todo) => todo.done).length }}</span
        >
      </div>

      <ToDoList :todosList="toDoStore.tasksOfTheDay" :showDateProps="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { useToDoStore } from "../stores/toDoStore";
import { useFormatDateStore } from "../stores/formatDateStore";
import ToDoList from "../components/ToDoList.vue";
import NoTask from "../components/NoTask.vue";

const formatDateStore = useFormatDateStore();
const toDoStore = useToDoStore();
</script>

<style scoped>
</style>