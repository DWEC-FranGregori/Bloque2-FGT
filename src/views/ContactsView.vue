<template>
    <h1>Listado de Contactos</h1>
    <ContactsTable></ContactsTable>
    <button type="button" @click="goTo">Añadir contacto</button>
</template>

<script setup>
import ContactsTable from '@/components/ContactsTable.vue'
import router from '@/router';

const goTo = () => {
    router.push({name: 'create-contact'})
}
</script>

<style scoped lang="sass">
button
    margin-top: 5%
    border: none
    padding: 1%
    border-radius: 8px
    background-color: lch(42.06% 77.33 289.06)
    &:hover
        background-color: lch(33.24% 68.63 289.06)

</style>