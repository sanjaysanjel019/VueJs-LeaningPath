<template>
  <div>
    <h1>Please fill the form for free coupons.</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header" />
      </div>
      <div id="form-fields">
        <slot name="form-fields" />
      </div>
      <div id="form-controls">
        <slot name="form-controls" />
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SlotFile",
};
</script>

<style  >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
}
h3 {
  color: aqua;
}
</style>


