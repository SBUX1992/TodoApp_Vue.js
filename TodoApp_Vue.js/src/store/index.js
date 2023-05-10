import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    // SQL에 저장된 데이터를 불러옴
    SET_TODOS(state, todos) {
      state.todos = todos;
    },

    // todo 추가(등록)
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    // 개별 삭제
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    // 전체삭제
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    // SQL에 저장된 데이터를 불러옴
    getTodos(context) {
      axios
        // 배포시 주소
        // .get("http://13.124.242.15:8383/todos")
        .get("http://localhost:8383/todos")
        .then((response) => {
          console.log(response);
          const todos = response.data;
          context.commit("SET_TODOS", todos);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // todo 추가(등록)
    addTodo(context, todo) {
      // 백엔드 추가
      const data = {
        content: todo,
      };

      axios
        // 배포시 주소
        // .post("http://13.124.242.15:8383/todo", data)
        .post("http://localhost:8383/todo", data)
        .then((response) => {
          // 등록 할때 바로바로 key를 부여하기 위해 response.data를 선언
          // controller(void > TodoVO / return vo 추가)
          // xml - insert(useGeneratedKeys="true" keyColumn="no" keyProperty="no" 추가)
          context.commit("ADD_TODO", response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // 기존 프론트만 했을때
      // context.commit("ADD_TODO", todo);
    },

    // 개별 삭제
    // 오브젝트 타입으로 들어오기 때문에 index가 아닌 data로 변경(index : index, no: no)
    removeTodo(context, data) {
      axios
        // 배포시 주소
        // .delete("http://13.124.242.15:8383/remove", {
        .delete("http://localhost:8383/remove", {
          params: { no: data.no },
        })
        .then((response) => {
          context.commit("REMOVE_TODO", data.index);
        })
        .catch((error) => {
          console.log(error);
        });

      // 기존 프론트만 했을때
      // context.commit("REMOVE_TODO", data.index);
    },

    // 전체삭제
    clearTodo(context) {
      // SQL 전체삭제
      axios
        // 배포시 주소
        // .delete("http://13.124.242.15:8383/clear")
        .delete("http://localhost:8383/clear")
        .then((response) => {
          context.commit("CLEAR_TODO");
        })
        .catch((error) => {
          console.log(error);
        });

      // .then으로 이동
      // context.commit("CLEAR_TODO");
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
