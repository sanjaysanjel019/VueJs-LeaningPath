<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function () {
    return {
      copyright: "Copyright 2020 MonkeyStudios",
    };
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