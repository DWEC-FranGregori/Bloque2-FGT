import { ref } from "vue"
import { defineStore } from "pinia"
import TypesRepository from "@/repositories/TypesRepository"

export const useTypesStore = defineStore("types", () => {
  let types = ref([])

  async function getTypes() {
    try {
      const repository = new TypesRepository()
      const data = await repository.getAllItems()
      types.value = data
      console.log(types.value)
    } catch (error) {
      throw new Error(error)
    }
  }

  function findTypeByCod(cod) {
    return types.value.find((item) => item.cod === cod)
  }

  return { types, getTypes, findTypeByCod }
})