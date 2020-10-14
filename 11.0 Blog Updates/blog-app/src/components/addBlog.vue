<template>
  <div id="add-blog">
  <h2>Add a new Blog</h2>
  <form>
    <label > Blog Title</label>
    <input v-model.lazy="blog.title" type="text" required/>
    <label > Blog Content</label>
    <textarea v-model.lazy="blog.content"></textarea>
    <div id="checkboxes">
      <label>Beginner</label>
      <input type="checkbox" value="beginner" v-model="blog.categories"/>

      <label>Intermediate</label>
      <input type="checkbox" value="intermediate" v-model="blog.categories"/>

      <label>Pro</label>
      <input type="checkbox" value="pro" v-model="blog.categories"/>

      <label>Expert</label>
      <input type="checkbox" value="expert" v-model="blog.categories"/>
    </div>

    <label > Author:</label>
    <select v-model="blog.author">
      <option v-for="(auth,id) in authors" v-bind:key="id">{{auth}}</option>
    </select>

  </form>

<div id="preview">
  <h3>Preview Blog</h3>
  <p>Blog Title:  {{blog.title}}</p>
  <p>Blog Content:</p>
  <p>{{blog.content}}</p>
  <p>Blog  Category: {{blog.categories}}</p>
  <p>Author: {{blog.author}}</p>
 
</div>

</div>


</template>

<script>


export default {
  name: "AddBlog",
  data:function (){
    return{
     blog:{
       title:'',
       content:'',
       categories:[],
       author:''
       

     },
     authors:['Jason Haddix','Paulo Coelho','Markus Zusak'],
    }
    
  }
};
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
