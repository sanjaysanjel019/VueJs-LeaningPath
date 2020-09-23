<template>
  <div id="app">
    <app-header />
    <h1>Hello {{name}}</h1>
    <app-main v-bind:typeOfCurry="typeOfCurry"></app-main>
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-main": Main,
  },
  data: function () {
    return {
      name: "Monica Belluci",
      typeOfCurry: [
        {
          name: "Mexican Curry",
          desc: "A authetic Mexican flavoured dish",
          isShow: false,
        },
        {
          name: "Sprinky Chinese",
          desc: "A Mouth watering Chinese touch",
          isShow: false,
        },
        {
          name: "American Bull Cheese",
          desc: "Huge American CHeeseburger",
          isShow: false,
        },
        {
          name: "Tadka touch",
          desc: "A spicy touch of Indian masala dish",
          isShow: false,
        },
        {
          name: "Mo:Mo",
          desc: "Flavourful and authntic Nepali cuisine",
          isShow: false,
        },
      ],
    };
  },
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
</style>


