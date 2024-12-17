<template>
  <div class="flex gap-3">
    <select
      name="filter"
      v-model="useFilterTasksStore().visibility"
      class="row-start-1 col-start-1 bg-slate-50 focus:outline-none"
    >
      <option value="disabled" disabled>Сортировать по</option>
      <option
        v-for="option in filterOptions"
        :key="option.value"
        :value="option.value"
        class="bg-cyan-100 p-5 hover:bg-pink-300"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useFilterTasksStore } from "../stores/filterTasksStore";
import { Filter } from "../types/Filters";

const filterOptions: Filter[] = [
  {
    name: "все",
    value: "id",
  },
  {
    name: "по дате",
    value: "sortedDate",
  },
  {
    name: "выполненные",
    value: "completed",
  },
  {
    name: "активные",
    value: "active",
  },
];
</script>

<style scoped>
</style>