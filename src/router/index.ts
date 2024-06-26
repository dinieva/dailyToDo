import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/CurrentTasksPage.vue')
          },
          {
            path: '/create',
            component: () => import('../views/CreateTaskPage.vue'),
          }, 
          {
            path: '/allTasks',
            component: () => import('../views/AllTasksPage.vue'),
          }, 
         {
            path: '/noTasks',
            name: 'no-tasks',
            component: () => import('../views/EmptyListPage.vue')
         }, 

    ],
})