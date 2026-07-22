import { createRouter, createWebHistory } from "vue-router";

import Books from "../pages/Books.vue";
import BookDetail from "../pages/BookDetail.vue";

const routes = [
  {
    path: '/books',
    name: 'books',
    component: Books,
  children: [
    {
    path: ':id',
    name: 'BookDetail',
    component: BookDetail,
  },
],
  },
];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
