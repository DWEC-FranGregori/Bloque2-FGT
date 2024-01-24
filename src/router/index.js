import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NewContactView from '@/views/NewContactView.vue'
import EditContactView from '@/views/EditContactView.vue'
import TypesView from '@/views/TypesView.vue'
import ContactsView from '@/views/ContactsView.vue'
import ContactsTypesView from '@/views/ContactsTypesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-contact',
      name: 'create-contact',
      component: NewContactView
    },
    {
      path: '/edit-contact/:id',
      name: 'edit-contact',
      component: EditContactView,
      props: true
    },
    {
      path: '/types',
      name: 'types',
      component: TypesView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/contacts/types/:cod',
      name: 'contacts-types',
      component: ContactsTypesView,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
