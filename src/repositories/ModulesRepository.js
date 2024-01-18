import axios from "axios"
const SERVER = import.meta.env.VITE_URL_API

export default class ModulesRepository {

    async getAllModules() {
        try {
            const response = await axios.get(`${SERVER}/modules`)
            return response.data
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async removeModule(code) {
        try {
            await axios.delete(`${SERVER}/modules/${code}`)
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async addModule({ module }) {
        try {
            await axios.post(`${SERVER}/modules`, module)
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async findModuleByCode(code) {
        try {
            const response = await axios.post(`${SERVER}/modules`, code)
            return response.data
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }
}