<template>
  <div class="container">
    <h3>{{curry}}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing'
      elit. Excepturi, nostrum. Architecto velit corrupti,
      esse necessitatibus harum commodi
      distinctio doloremque quae voluptatibus iure unde.
      Repellat illo blanditiis eius quisquam molestias alias?
    </p>
    <h4>Here are the list of fresh food for you:</h4>
    <ul v-for="item in  typeOfCurry" v-bind:key="item">
      <li class="liac" @click="item.isShow = !item.isShow">{{item.name}}</li>
      <h4 v-show="item.isShow">{{item.desc}}</h4>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: function () {
    return {
      curry: "Authentic Chinese Cuisine",
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

<style scoped>
.liac {
  cursor: pointer;
  border: 2px solid red;
  padding: 5px;
}
.container {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background: #c7ecee;
}
ul li {
  list-style-type: none;
}
</style>