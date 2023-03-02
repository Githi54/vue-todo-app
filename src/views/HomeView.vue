<script lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useTodoListStore()

    const { todoList } = storeToRefs(store)

    return { todoList }
  }
}
</script>

<template>
  <div class="home">
    <div v-if="todoList.length">
      <div v-for="todo in todoList" :key="todo.id">
        <!-- <div>{{ todo.name }}</div> -->
      </div>
      <!-- <div v-for="todo in todos" :key="todo.id">
        <Singletodo 
        :todo="todo"
        @delete="handleDelete"
        @complete="handleComplete"></Singletodo>
      </div> -->
    </div>
  </div>
</template>
