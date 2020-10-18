<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="searchQuery"  placeholder="Search here" />
      <div class="single-blog" v-for="(blog,item) in filteredBlogs " v-bind:key="item">
        <router-link v-bind:to="'/blog/'+blog.id"><h3>{{blog.title | to-uppercase}}</h3> </router-link>
    <!--redtext is a custom directives -->
        <article >{{blog.content | snippet}}</article> 
        </div>
      

  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';
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
      this.$http.get('https://vue-net-ninja-4c80a.firebaseio.com/posts.json').then(function(data){
          return  data.json();   
      }).then(function(data){
        var blogsArray = [];
        for (let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
        
        }
        this.blogs = blogsArray;
      })
  },
  computed: {
   
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    },
    snippet(value){
      return value.slice(0, 100) + '......';  
    }
  },
  directives: {
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color='#'+Math.random().toString().slice(2,8);
        binding;
        vnode;
      }
    }
  },
  mixins: [searchMixin]
  
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
