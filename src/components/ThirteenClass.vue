<template>
    <div>
      <p>First Name: {{ firstName }}</p>
      <p>Last Name: {{ lastName }}</p>
      <p>Full Name: {{ fullName }}</p> <!-- Computed Property -->

      <!-- Computed properties are cached based on their reactive dependencies -->
    </div>
  </template>
  
  <script>
  export default {
    name:'ThirteenClass',
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    },
    computed: {
      fullName() {
        // Computed property that combines firstName and lastName
        return this.firstName + ' ' + this.lastName;
      }
    }
  }
  </script>
  