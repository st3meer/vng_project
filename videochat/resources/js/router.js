import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./Pages/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('./Pages/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // Use history mode for clean URLs
  routes,
});

export default router;
