<template>
  <header>
    <h1 @click="changeTitle">{{ titleHeader }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    titleHeader: {
      type: String,
    },
  },
  methods: {
    changeTitle: function () {
      this.$emit("changeTitle", "Hormonal Locha"); //here changeTitle is the event, so we listen to this event on App.vue component
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}

ul li {
  list-style-type: none;
}
</style>