<template>
  <div id="show-blogs">
      <h1>All BLog Articles</h1>
      <!-- <div class="single-blog" v-for="(item,blog) in blogs" v-bind:key="item">{{blog}}</div> -->

  </div>
</template>

<script>


export default {
  name: "showBlogs",
  
  data:function(){
    return{
        blogs: []
    }
  },
  methods:{

  },
  created: function(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10)  
      })
  }
  
};
</script>

<style>

</style>
