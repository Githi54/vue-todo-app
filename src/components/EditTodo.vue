<template>
  <div>
    <form @submit.prevent="handleUpdate">
      <label>New name: </label>
      <input type="text" v-model="name" required />
      <label>New description: </label>
      <textarea v-model="description"></textarea>
      <div class="button-container">
        <button>Update Todo</button>
        <button @click="$emit('close')">Finish editing</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'

export default {
  props: ['id'],
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    handleUpdate() {
      const store = useTodoListStore()

      if (this.name.trim().length === 0) {
        return
      }

      store.updateTodoName(this.id, this.name.trim())
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.button-container {
  display: flex;
}

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
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #bbb;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  border-style: none;
  border-bottom: 2px solid #ddd;
  color: #bbb;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  cursor: pointer;
  background: #35df90;
  color: #fff;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
}
</style>
