<template>
  <li
    class="flex items-center justify-between gap-3 p-2 border-b-2 border-gray-300"
  >
    <div class="flex justify-between items-center">
      <input
        type="checkbox"
        v-model="task.done"
        class="accent-slate-50 focus:accent-slate-500"
      />

      <div
        class="ml-1 w-2 h-10"
        :class="{
          important: task.category == 'Высокий',
          'medium-important': task.category == 'Средний',
          'low-important': task.category == 'Низкий',
        }"
      ></div>
      <div class="flex flex-col pl-2">
        <span class="text-base" :class="{ 'line-through': task.done }">{{
          task.text
        }}</span>

        <span v-if="showDate" class="text-m text-gray-400">
          {{ task.date }}</span
        >
      </div>
    </div>
    <button
      @click.stop="taskStore.deleteTask(task)"
      class="w-5 h-5 bg-trash bg-center bg-no-repeat bg-contain hover:scale-125"
    ></button>
  </li>
</template>

<script setup lang="ts">
import { useToDoStore } from "../stores/toDoStore";
import type { NewTask } from "../types/NewTask";

const taskStore = useToDoStore();

interface Props {
  showDate: Boolean;
  task: NewTask;
}

withDefaults(defineProps<Props>(), {
  showDate: () => false,
});
</script>

<style scoped>
.important {
  background-color: #9d174d;
}
.medium-important {
  background-color: #d97706;
}
.low-important {
  background-color: #16a34a;
}
</style>