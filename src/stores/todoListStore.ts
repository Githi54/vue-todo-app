import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

type Todo = {
  id: string
  name: string
  description: string
  completed: boolean
}

interface TodosState {
  todoList: Todo[]
}

export const useTodoListStore = defineStore('todoList', {
  state: (): TodosState => ({
    todoList: [],
  }),
  actions: {
    addTodo(name: string, description: string) {
      this.todoList = [...this.todoList, { name, id: uuidv4(), description, completed: false }]
    },
    deleteTodo(todoId: string) {
      this.todoList = this.todoList.filter(({ id }) => id !== todoId)
    },
    updateTodoName(todoId: string, newName: string) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === todoId) {
          todo.name = newName
        }

        return todo
      })
    },
    updateTodoCompleted(todoId: string) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }

        return todo
      })
    }
  }
})
