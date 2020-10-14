<template>
  <div id="app">
    
    <add-blog/>   
  </div>
</template>

<script>

import addBlog from './components/addBlog'
export default {
  name: "App",
  components: {
    'add-blog':addBlog
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
