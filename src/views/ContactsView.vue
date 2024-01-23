<template>
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

</style>