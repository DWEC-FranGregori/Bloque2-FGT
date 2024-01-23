import axios from 'axios'
const SERVER = import.meta.env.VITE_URL_API
const table = 'contactos'

export default class ContactsRepository {

    async getAllItems() {
        try {
            const response = await axios.get(`${SERVER}/${table}`)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }

    async addItem(item) {
        try {
            await axios.post(`${SERVER}/${table}`, item)
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateItem(item) {
        try {
            await axios.patch(`${SERVER}/${table}/${item.id}`, item)
        } catch (error) {
            throw new Error(error)
        }
    }

    async removeItem(id) {
        try {
            await axios.delete(`${SERVER}/${table}/${id}`)
        } catch (error) {
            throw new Error(error)
        }
    }

    async findItemById(id) {
        try {
            const response = await axios.get(`${SERVER}/${table}/${id}`)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }

    async getItemsByType(type) {
        try {
            const response = await axios.get(`${SERVER}/${table}?tipo=${type}`)
            console.log(response.data)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }
}