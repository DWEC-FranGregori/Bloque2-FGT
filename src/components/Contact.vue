<template>
    <td>{{ contact.id }}</td>
    <td>{{ contact.nombre }}</td>
    <td>{{ contact.tel }}</td>
    <td>{{ contact.email }}</td>
    <td>{{ contact.tipo }}</td>
    <td>{{ contact.fecha }}</td>
    <td>
        <button>Edit</button>
        <button @click="$emit('order', contact)">X</button>
    </td>
</template>

<script setup>
const props = defineProps(['contact'])

const { contact } = props

</script>

<style scoped></style>