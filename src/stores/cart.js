import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", () => {
  let items = ref([])

  if (localStorage.Cart != null) {
    items.value = JSON.parse(localStorage.Cart)
  }

  function addItem(item) {
    items.value.push(item)
    localStorage.Cart = JSON.stringify(items.value)
  }

  function removeItem(id) {
    const indexToRemove = items.value.findIndex(book => book.id === id)
    items.value.splice(indexToRemove, 1)
    localStorage.Cart = items.value
  }

  const totalPrice = computed(() => {
    return items.value.reduce((accumulator, book) => {
      return accumulator + book.price
    }, 0)
  })

  function clear() {
    items.value.splice(0, items.value.length)
    localStorage.Cart = []
  }

  return { items, addItem, removeItem, totalPrice, clear }
})
