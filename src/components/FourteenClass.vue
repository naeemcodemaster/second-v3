<template>
    <div>
      <p>{{ count }}</p>
      <button v-on:click="count = count + 1">Increase</button>
      <button v-on:click="count = count - 1">Decrease</button>
    </div>
  </template>
  
  <script>
  export default {
    name:'FourteenClass',
    data() {
      return {
        count:0
      }
    },
    watch:{
        // should be same as your property name

        // case 1
        // count(currentValue){
        //     if(currentValue > 5){
        //         console.log("Greater")
        //     }
        // }


        // case 2
        count(prevValue,currentValue){
            if(currentValue > 5 && currentValue > prevValue){
                console.log("Greater")
            }
        }
    }
    
  }
  </script>
  