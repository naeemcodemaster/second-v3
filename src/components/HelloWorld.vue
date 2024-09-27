<template>
  <div>
    <h2>First Class Work</h2>
    <p>Name is {{ name }}</p>
    <p>Details is {{ getDetails(' from Islamabad') }}</p>
    <p>Method output is {{ getName("Khan jan") }}</p>
    <p>Name is {{ showDetails().name }}</p>
    <p>Email is {{ showDetails().email }}</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: "Bilal",
      getDetails(value) {
        return value
      }
    }

  },
  methods:{
    getName(name){
      return name
    },
    showDetails(){
      return {
        // name:"khan",
        name:this.name,
        email:"khan@gmail.com"
        
      }
    }
  }
}
</script>