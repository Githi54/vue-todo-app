<template>
  <div class="todo" :class="{ completed: todo.completed }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ todo.name }}</h3>
      <div class="icons">
        <span class="material-symbols-outlined" @click="showEdit = true">edit</span>
        <span @click="toggleComplete" class="material-symbols-outlined tick">done</span>
        <span @click="deletetodo" class="material-symbols-outlined delete">delete</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ todo.description }}</p>
    </div>
    <div v-if="showEdit">
      <EditTodo :id="todo.id" @close="showEdit = false"></EditTodo>
    </div>
  </div>
</template>

<script lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'
import EditTodo from './EditTodo.vue'

export default {
  props: ['todo'],
  data() {
    return {
      showDetails: false,
      showEdit: false
    }
  },
  methods: {
    deletetodo() {
      const store = useTodoListStore()
      store.deleteTodo(this.todo.id)
    },
    toggleComplete() {
      const store = useTodoListStore()
      store.updateTodoCompleted(this.todo.id)
    },
  },
  components: { EditTodo }
}
</script>

<style>
.todo {
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0px 5px 4px #ea4f30;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-symbols-outlined:hover {
  color: #777;
}
.delete:hover {
  color: #ea4f30;
}
.todo.completed {
  box-shadow: 0 0px 5px 4px rgb(43, 206, 135);
}
.todo.completed .tick {
  color: #35df90;
}
</style>
