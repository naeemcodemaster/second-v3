<template>
    <div>
      <h1>Dynamic Components</h1>
      <button @click="tab='JavaComp'">Java Tab</button>
      <button @click="tab='PythonComp'">Python Tab</button>
      <component :is="tab"/>
    </div>
  </template>
  
  <script>
  import JavaComp from './JavaComp.vue';
  import PythonComp from './PythonComp.vue';
  export default {
    name:'SixteenClass',
    components:{JavaComp,PythonComp},
    data(){
        return{
            tab:'JavaComp'
        }
    }
    
  }
  </script>
