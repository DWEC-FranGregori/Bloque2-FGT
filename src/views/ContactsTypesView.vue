<template>
    <h1>Contactos de tipo {{type.tipo}}</h1>
    <table>
        <thead>
            <th>id</th>
            <th>nombre</th>
            <th>telefono</th>
            <th>email</th>
            <th>tipo</th>
            <th>fecha</th>
            <th>acciones</th>
        </thead>
        <tbody v-for="contact in contacts" :key="contact.id">
            <Contact :contact="contact" @order="del" />
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ContactsRepository from '@/repositories/ContactsRepository'
import Contact from '@/components/Contact.vue'
import { useTypesStore } from '@/stores/types'

const router = useRoute()

let cod = ref('')
cod.value = router.params.cod

const contacts = ref([])
const type = ref({})

const repository = new ContactsRepository()
const store = useTypesStore()
const { findTypeByCod } = store

onMounted(async () => {
    type.value = findTypeByCod(cod.value)
    try {
        const data = await repository.getItemsByType(cod.value)
        contacts.value = data
        console.log(contacts.value)
    } catch (error) {
        console.error(error)
    }
})
</script>

<style scoped lang="sass"></style>