<template>
  <div class="container">
    <h2>This is compoennt one</h2>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "ComponentOne",
};
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  width: 100%;
  height: 20vh;
  background: #c7ecee;
}
ul li {
  list-style-type: none;
}
</style>