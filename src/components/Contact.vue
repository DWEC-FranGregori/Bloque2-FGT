<template>
    <td>{{ contact.id }}</td>
    <td>{{ contact.nombre }}</td>
    <td>{{ contact.tel }}</td>
    <td>{{ contact.email }}</td>
    <td>{{ contact.tipo }}</td>
    <td>{{ showDate(contact.fecha) }}</td>
    <td>
        <button @click="goToEdit">Edit</button>
        <button @click="$emit('order', contact)">X</button>
    </td>
</template>

<script setup>
import router from '@/router'
import moment from 'moment'

const props = defineProps(['contact'])

const { contact } = props

const goToEdit = () => {
    router.push({ name: 'edit-contact', params: { id: contact.id } })
}

const isToday = (date) => {
    const parseDate = new Date(date)
    const today = new Date()
    return parseDate.getDate() == today.getDate() &&
        parseDate.getMonth() == today.getMonth() &&
        parseDate.getFullYear() == today.getFullYear()
}

const showDate = (date) => {
    const parseDate = new Date(date)
    if (isToday(date)) {
        return moment(parseDate).format('HH:mm:ss A')
    }
    return moment(parseDate).format('DD/MM/YYYY')
}

</script>

<style scoped></style>