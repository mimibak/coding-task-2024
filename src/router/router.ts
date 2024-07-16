import { createRouter, createWebHistory } from 'vue-router'
import IndexRepos from '@/views/IndexRepos.vue'
import IndexRepoDetail from '@/components/IndexRepoDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexRepos
    },
    {
      path: '/:name',
      name: 'repo-details',
      props: true,
      component: IndexRepoDetail
    }
  ]
})

export default router
