<template>
  <div
    class="h-screen w-screen m-auto flex flex-col justify-start items-center gap-5"
  >
    <div class="w-96 flex flex-col justify-center items-start p-5">
      <h1 class="text-3xl">Создать задачу</h1>
    </div>

    <form
      action="#"
      class="flex flex-col justify-center gap-7 w-96"
      @submit.prevent="addNewTask(text, selected, deadline)"
      valid="false"
    >
      <input
        type="text"
        autofocus
        name="text"
        minlength="1"
        placeholder="Описание"
        v-model.trim="text"
        class="border rounded-full p-4"
        required
      />

      <select
        name="category"
        id="category"
        class="border rounded-full p-4"
        v-model="selected"
        required
      >
        <option disabled value="">Приоритет</option>
        <option value="Высокий">Высокий</option>
        <option value="Средний">Средний</option>
        <option value="Низкий">Низкий</option>
      </select>

      <input
        type="date"
        id="start"
        class="border rounded-full p-4"
        placeholder="Дата"
        :min="today"
        v-model="deadline"
        required
      />

      <button
        :disabled="selected == '' || text.length == 0 || !deadline"
        class="h-10 w-52 bg-cyan-200 text-xl text-center rounded-full font-semibold m-auto"
      >
        Создать
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useFormatDateStore } from "../stores/formatDateStore";
import { useToDoStore } from "../stores/toDoStore";
import { ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const taskStore = useToDoStore();
const formatDateStore = useFormatDateStore();
// данные формы
const text: Ref<string> = ref(""); // описание задачи
const selected: Ref<string> = ref(""); // выбранный приоритет задачи
const deadline = ref(formatDateStore.dateFormate); // дата выполнения задачи
const today: string = new Date().toISOString().split("T")[0]; // для календаря, чтобы предыдущие даты были недоступны
// добавление новой задачи
const addNewTask = async (text: string, priority: string, date: string) => {
  if (text && priority && date) {
    taskStore.addNewTask(text, priority, date);
    router.push("/dailyToDo"); // вызывается mounted
  }
};
</script>

<style scoped>
.notValied {
  border: 1px solid rgb(231, 44, 60);
  color: red;
}
button:disabled {
  opacity: 0.5;
}
</style>