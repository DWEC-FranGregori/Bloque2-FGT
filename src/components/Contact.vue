<template>
    <td>{{ contact.id }}</td>
    <td>{{ contact.nombre }}</td>
    <td>{{ contact.tel }}</td>
    <td>{{ contact.email }}</td>
    <td v-html="getIcon(type.icono)"></td>
    <td>{{ showDate(contact.fecha) }}</td>
    <td>
        <button @click="goToEdit" class="edit"><i class="bi bi-pencil-fill"></i></button>
        <button @click="$emit('order', contact)" class="del"><i class="bi bi-trash-fill"></i></button>
    </td>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
import { useTypesStore } from '@/stores/types'
import moment from 'moment'

const props = defineProps(['contact'])
const { contact } = props

const store = useTypesStore()
const { findTypeByCod } = store

const type = ref({})
onMounted(() => {
    goToEdit,
        showDate,
        type.value = findTypeByCod(contact.tipo),
        getIcon
})

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

const getIcon = (icono) => {
    return `<i class='bi bi-${icono}'></i>`
}
</script>

<style scoped lang="sass">
button
    border: none
    padding: 10%

.del
    background-color: lch(48.24% 90.87 39.18)
    &:hover
        background-color: lch(35.59% 70.57 39.18)

.edit
    background-color: lch(60.29% 0 39.18)
    margin-right: 15%
    &:hover
        background-color: lch(44.41% 0 39.18)    

</style>@/stores/empresas