<script lang="ts">
import TodoList from '@/components/TodoList.vue'
import { useTodoListStore } from '@/stores/todoListStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useTodoListStore()
    const { todoList } = storeToRefs(store)
    return { todoList }
  },
  components: { TodoList }
}
</script>

<template>
  <div class="home">
    <div v-if="todoList.length">
      <TodoList :todoList="todoList" />
    </div>
  </div>
</template>
