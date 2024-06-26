<template>
  <div
    class="h-screen w-screen m-auto flex flex-col justify-start items-center gap-5"
  >
    <div class="w-96 flex flex-col justify-center items-start p-5">
      <div class="w-96 flex justify-between items-center">
        <h1 class="block text-3xl">Список задач</h1>

        <FiltersComponent
          @selectedOption="(param) => (filterTasksStore.visibility = param)"
        />
      </div>
    </div>

    <NoTask v-if="filterTasksStore.filteredTodos.length == 0" />
    <div v-else class="flex flex-col justify-between gap-10 w-96 pl-5">
      <span class="text-xl text-gray-300"
        >Всего задач {{ filterTasksStore.filteredTodos.length }}</span
      >

      <ToDoList
        :todosList="filterTasksStore.filteredTodos"
        :showDateProps="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilterTasksStore } from "../stores/filterTasksStore";
import FiltersComponent from "../components/FiltersComponent.vue";
import ToDoList from "../components/ToDoList.vue";
import NoTask from "../components/NoTask.vue";

const filterTasksStore = useFilterTasksStore();
</script>

<style scoped>
select {
  width: 150px;
  height: 20px;
  border: none;
  appearance: none;
  background: url("../public/images/filter.svg") right/contain no-repeat;
  text-align: center;
  padding-right: 25px;
}
</style>