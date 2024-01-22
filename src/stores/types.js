import { ref } from "vue"
import { defineStore } from "pinia"
import TypesRepository from "@/repositories/TypesRepository copy"

export const useTypesStore = defineStore("types", () => {
  let types = ref([])

  async function getTypes() {
    try {
      const repository = new TypesRepository()
      const data = await repository.getAllItems()
      types.value = data
    } catch (error) {
      throw new Error(error)
    }
  }

  function findTypeByCode(code) {
    return types.value.find((item) => item.code === code)
  }

  return { types, getTypes, findTypeByCode }
})
