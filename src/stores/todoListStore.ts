import { defineStore } from 'pinia'

type Todo = {
  id: number
  name: string
  completed: boolean
}

interface TodosState {
  todoList: Todo[]
  id: number
}

export const useTodoListStore = defineStore('todoList', {
  state: (): TodosState => ({
    todoList: [],
    id: 0
  }),
  actions: {
    addTodo(name: string) {
      this.todoList = [...this.todoList, { name, id: this.id++, completed: false }]
    },
    deleteTodo(todoId: number) {
      this.todoList = this.todoList.filter(({ id }) => id !== todoId)
    },
    updateTodoName(todoId: number, newName: string) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === todoId) {
          todo.name = newName
        }

        return todo
      })
    },
    updateTodoCompleted(todoId: number) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }

        return todo
      })
    }
  }
})
