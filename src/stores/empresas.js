import { ref } from "vue"
import { defineStore } from "pinia"
import EmpresasRepository from "@/repositories/EmpresasRepository"

export const useTypesStore = defineStore("empresas", () => {
  let empresas = ref([])

  async function getEmpresas() {
    try {
      const repository = new EmpresasRepository()
      const data = await repository.getAllItems()
      empresas.value = data
      console.log(empresas.value)
    } catch (error) {
      throw new Error(error)
    }
  }

  function findEmpresaById(id) {
    return empresas.value.find((item) => item.id === id)
  }

  return { empresas, getEmpresas, findEmpresaById }
})