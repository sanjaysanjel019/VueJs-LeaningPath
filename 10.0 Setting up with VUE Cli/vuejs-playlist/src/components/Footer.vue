<template>
  <footer>
    <p>Copyright {{ title }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    title: {
      type: String,
    },
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