<template>
  <form @submit.prevent="handleSubmit">
    <label>Name: </label>
    <input type="text" v-model="name" required />
    <label>Description: </label>
    <textarea v-model="description"></textarea>
    <button>Add Todo</button>
  </form>
</template>

<script lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'

export default {
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    handleSubmit() {
      const store = useTodoListStore()

      if (this.name.length === 0) {
        return
      }

      store.addTodo(this.name, this.description)
      this.name = ''
      this.description = ''
    }
  }
}
</script>

<style>
form {
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  color: #bbb;
}
textarea {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  color: #bbb;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #35df90;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
}
</style>
