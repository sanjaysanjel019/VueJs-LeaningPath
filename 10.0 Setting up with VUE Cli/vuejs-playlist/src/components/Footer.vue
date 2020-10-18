<template>
  <footer>
    <p>Copyright {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from "../main";
export default {
  name: "Footer",
  props: {
    title: {
      type: String,
    },
  },
  created() {
    bus.$on("titleChanged", (data) => {
      this.title = data;
    });
  },
};
</script>

<style scoped>
footer {
  background: lightgreen;
  padding: 6px;
}

h1 {
  color: #222;
  text-align: center;
}

ul li {
  list-style-type: none;
}
</style>