<template>
    <div>
        <table>
            <thead>
                <th>Cod</th>
                <th>Tipo</th>
                <th>Icono</th>
                <th>Acciones</th>
            </thead>
            <tbody v-for="type in types" :key="type.cod">
                <td>
                    {{ type.cod }}
                </td>
                <td>
                    {{ type.tipo }}
                </td>
                <td>
                    {{ type.icono }}
                </td>
                <td>
                    <button type="button" @click="goTo(type.cod)">People</button>
                </td>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import ContactsRepository from '@/repositories/ContactsRepository'
import router from '@/router'
import { useTypesStore } from '@/stores/types'

const store = useTypesStore()

const { types } = store

const goTo = async (value) => {
    const repository = new ContactsRepository()
    try {
        const items = await repository.getItemsByType(value)
        console.log(items)
    } catch (error) {
        console.error(error)
    }
    //router.push({ name: 'contacts', params: { type: value } })
}

</script>

<style scoped lang="sass">
table
    border: 1px solid black
    text-align: center
</style>
