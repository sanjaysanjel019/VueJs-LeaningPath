<template>
  <div id="app">
    <header-blog/>
   <show-blog/>
   <!-- <show-blog/> -->
   
  </div>
</template>

<script>

// import addBlog from '. /components/addBlog';
import showBlogs from './components/showBlogs';
// import listBlogs from './components/listBlogs';
import Header from './components/Header'
export default {
  name: "App",
  components: {
    // 'add-blog':addBlog,
    'show-blog':showBlogs,
    // 'list-blog':listBlogs,
    'header-blog':Header
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
