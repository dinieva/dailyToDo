<template>
  <div class="flex gap-3">
    <select
      name="filter"
      v-model="useFilterTasksStore().visibility"
      class="row-start-1 col-start-1 bg-slate-50 focus:outline-none"
      @change="$emit('selectedOption', $event.target.value)"
    >
      <option value="disabled" disabled>Сортировать по</option>

      <option
        :value="option.value"
        class="bg-cyan-100 p-5 hover:bg-pink-300"
        v-for="option in filterOptions"
        :key="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useFilterTasksStore } from "../stores/filterTasksStore";
import { Filter, FilterValue } from "../types/Filters";

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

// const emit = defineEmits(["selectedOption"]);

const emit = defineEmits<{
  selectedOption: [option: FilterValue];
}>();
</script>

<style scoped>
</style>