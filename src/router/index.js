// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import MyHome from '../components/MyHome.vue';
import MyAbout from '../components/MyAbout.vue';
import MyContact from '../components/MyContact.vue';
import MyCourse from '../components/MyCourse.vue';

const routes = [
    { path: '/', component: MyHome },
    { path: '/about', component: MyAbout },
    { path: '/contact', component: MyContact},
    { path: '/course', component: MyCourse},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
