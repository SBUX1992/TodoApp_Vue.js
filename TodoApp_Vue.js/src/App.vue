<template>
  <!-- hendler : 이벤트를 처리함 -->
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "vuex";
import { onBeforeMount } from "vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();

    const addTodoHandler = (value) => {
      // vuex store 저장
      store.dispatch("addTodo", value);
    };

    // SQL 데이터 불러오기
    onBeforeMount(() => {
      store.dispatch("getTodos");
    });

    return { addTodoHandler };
  },
};
</script>

<style scoped></style>
