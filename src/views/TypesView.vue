<template>
    <h1>Tipos</h1>
    <table>
        <thead>
            <th>ID</th>
            <th>Nombre</th>
            <th>Icono</th>
            <th>Acciones</th>
        </thead>
        <tbody v-for="type in types" :key="type.cod">
            <td>{{ type.cod }}</td>
            <td>{{ type.tipo }}</td>
            <td v-html="getIcon(type.icono)"></td>
            <td><button @click="goTo(type.cod)"><i class="bi bi-people"></i></button></td>
        </tbody>
    </table>
</template>

<script setup>
import router from '@/router'
import { useTypesStore } from '@/stores/types'

const store = useTypesStore()

const { types } = store

const goTo = (value) => {
    router.push({ name: 'contacts-types', params: { cod: value } })
}

const getIcon = (icono) => {
    return `<i class='bi bi-${icono}'></i>`
}
</script>

<style scoped lang="sass">
table
    text-align: center
    border: 1px solid black
</style>