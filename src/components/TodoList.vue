<script lang="ts">
import TodoItem from './TodoItem.vue';

export default {
    props: ["todoList"],
    components: { TodoItem }
}
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id">
    <TodoItem :todo="todo" />
  </div>
</template>
