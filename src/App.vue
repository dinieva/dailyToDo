<script setup lang="ts">
import AllHeaderBtns from "./components/AllHeaderBtns.vue";
</script>

<template>
  <div class="">
    <header class="flex flex-col justify-center items-center gap-5 mt-5">
      <h1 class="text-2xl text-center font-semibold">Онлайн ежедневник</h1>
      <AllHeaderBtns />
    </header>
    <main class="flex justify-center">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <RouterView /> -->
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
