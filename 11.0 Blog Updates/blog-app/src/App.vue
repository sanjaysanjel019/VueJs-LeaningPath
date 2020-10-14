<template>
  <div id="app">
    <show-blog/>
  </div>
</template>

<script>

// import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
export default {
  name: "App",
  components: {
    // 'add-blog':addBlog,
    'show-blog':showBlogs
  },
  data:function(){
    return{

    }
  },
  methods:{

  }
  
};
</script>

<style>

</style>
