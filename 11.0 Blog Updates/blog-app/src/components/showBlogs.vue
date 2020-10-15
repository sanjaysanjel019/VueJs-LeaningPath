<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="searchQuery"  placeholder="Search here" />
      <div class="single-blog" v-for="(blog,item) in filteredBlogs " v-bind:key="item">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
    <!--redtext is a custom directives -->
        <article v-redText>{{blog.body | snippet}}</article> 
        </div>
      

  </div>
</template>

<script>


export default {
  name: "showBlogs",
  
  data:function(){
    return{
        blogs: [],
        searchQuery: ""
    }
  },
  methods:{

  },
  created: function(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10) ;
          
          
      })
  },
  computed: {
    filteredBlogs : function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.searchQuery);
      })
    }
  }
  
};
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin:0 auto;
}

.single-blog{
  padding: 20px;
  margin:20px 0;
  box-sizing: border-box;
  background: #ecf0f1;
}
</style>
