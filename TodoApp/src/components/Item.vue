<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-sharp fa-solid fa-check"></i>
    {{ todo.content }}
    <button @click="btnDelete(index, todo.no)">삭제</button>
    <!-- 프론트엔드만 할때 -->
    <!-- <button @click="btnDelete(index)">삭제</button> -->
  </li>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);

    // 삭제
    // store에 있는 actions의 removeTodo를 index로 받아옴
    // no는 백엔드때 추가함
    const btnDelete = (index, no) => {
      //console.log("index : " + index);
      store.dispatch("removeTodo", { index, no });
    };
    return {
      todos,
      btnDelete,
    };
  },
};
</script>

<style scoped></style>
