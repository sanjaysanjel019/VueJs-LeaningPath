<template>
<div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
</div>
    
</template>
 
 <script>
 export default {
data:function(){
    return  {
        id:this.$route.params.id,
        blog:{}
    }
    },
    created(){
        this.$http.get('https://vue-net-ninja-4c80a.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
            }).then(function(data){
                this.blog = data;
            })
    } 
 }
 </script>

 <style  scoped>
 
 </style>
