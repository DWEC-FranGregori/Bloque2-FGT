import { ref } from "vue"
import { defineStore } from "pinia"
import ModulesRepository from "@/repositories/ModulesRepository"

export const useModulesStore = defineStore("modules", () => {
  let modules = ref([])

  async function getModules() {
    try {
      const repository = new ModulesRepository()
      const modulesRepo = await repository.getAllModules()
      modules.value = modulesRepo
    } catch (error) {
      throw new Error(error)
    }
  }

  function findModuleByCode(code) {
    return modules.value.find((module) => module.code === code)
  }

  return { modules, getModules, findModuleByCode }
})
