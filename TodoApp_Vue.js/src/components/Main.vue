<template>
  <main>
    <ul>
      <Item />
    </ul>
  </main>
</template>

<script>
import Item from "./Item.vue"; // components와 연계해서 Item.vue 연동

export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    return {};
  },
};
</script>

<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}

main > ul {
  width: 100%;
  height: auto;
  list-style: none; /* li의 점 없애줌 */
  padding-left: 0;
  box-sizing: border-box;
}

main > ul > li {
  width: 100%;
  height: 40px;
  line-height: 40px; /* line-height 수직정렬 */
  padding-left: 6px;
  margin: 6px 0; /* 위아래 6 좌우 0 */
  box-sizing: border-box;
  background-color: white;
}

main > ul > li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none; /* 테두리 제거 */
  color: #de4343;
}
</style>
