import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODE(state, index) {
      state.todos.splice(index, 1); // 1은 길이
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    removeTodo(context) {
      context.commit("REMOVE_TODO", index);
    },
    cleatTodo(context) {
      context.commit("CLEAR_TODO");
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});

export default store;
