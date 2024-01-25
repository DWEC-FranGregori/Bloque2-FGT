<template>
    <h1>Editar Contacto</h1>
    <Form @submit="submit" :validation-schema="schema">
        <label for="name">Nombre</label>
        <Field type="text" name="name" v-model="contact.nombre" />
        <ErrorMessage name="name" />

        <label for="phone">Teléfono</label>
        <Field type="text" name="phone" v-model="contact.tel" />
        <ErrorMessage name="phone" />

        <label for="email">Email</label>
        <Field type="email" name="email" v-model="contact.email" />
        <ErrorMessage name="email" />

        <label for="type">Tipo</label>
        <div class="form-check" v-for="type in types" :key="type.cod">
            <Field type="radio" class="form-check-input" name="tipo" :value="type.cod" v-model="contact.tipo" />{{
                type.tipo }}
        </div>
        <ErrorMessage name="tipo" />

        <button type="submit" class="btn-save">Guardar cambios</button>
        <button type="button" class="btn-cancel" @click="goTo">Cancelar</button>
    </Form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import moment from 'moment'
import { useTypesStore } from '@/stores/types'
import ContactsRepository from '@/repositories/ContactsRepository'
import router from '@/router'
import { useRoute } from 'vue-router'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const route = useRoute()
const repository = new ContactsRepository()
const store = useTypesStore()
const { types } = store

const contact = ref({})
onMounted(async () => {
    try {
        console.log(route.params.id)
        contact.value = await repository.findItemById(route.params.id)
        console.log(contact.value)
    } catch (error) {
        console.error(error)
    }
})

const schema = yup.object({
    name: yup.string().required('Campo obligatorio').min(4, 'Mínimo debe tener 4 letras').max(25, 'No puede superar los 25 caractere'),
    phone: yup.string().required('Campo obligatorio').matches(phoneRegExp, 'Móvil inválido'),
    email: yup.string().required('Campo obligatorio').email('Email inválido'),
    tipo: yup.string().required('Campo obligatorio'),
})

const submit = async () => {
    const item = { ...contact.value }
    try {
        await repository.updateItem(item,item.id)
        contact.value = {}
    } catch (error) {
        console.error(error)
    }
}

const goTo = () => {
    router.push({ name: 'contacts' })
}
</script>

<style scoped lang="sass">
form, label
    display: block

label
    margin-bottom: 1%

input 
    margin-bottom: 2%

span
    display: block
    margin-bottom: 3%
    color: red

button
    margin-top: 5%
    border: none
    margin-right: 3%
    margin-left: 2%
    padding: 1%
    border-radius: 5px

.btn-save
    background-color: lch(55% 58 129.18)
    &:hover
        background-color: lch(65.29% 81.2 131.29)

.btn-cancel
    background-color: lch(44.12% 76.37 42.35)
    &:hover
        background-color: lch(48.82% 86.03 42.35)

</style>@/repositories/EmpresasRepository@/stores/empresas