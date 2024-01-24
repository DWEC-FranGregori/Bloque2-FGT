<template>
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
import ContactsRepository from '@/repositories/ContactsRepository'
import Contact from './Contact.vue'

const repository = new ContactsRepository()

const contacts = ref([])

onMounted(async () => {
    try {
        contacts.value = await repository.getAllItems()
    } catch (error) {
        console.error(error)
    }
})

const del = async (contact) => {
    console.log(contact)
    if (!confirm(`¿Quieres eliminar a ${contact.nombre}?`)) return

    const repository = new ContactsRepository()
    try {
        await repository.removeItem(contact.id)
        contacts.value = contacts.value.filter(item => item.id !== contact.id)
    } catch (error) {
        console.error(error)
    }
}
</script>

<style scoped lang="sass"></style>