<template>
    <div>
      <h2>API Component</h2>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TwentyClass',
    data() {
      return {
        posts: [],  // To store the API data
      };
    },
    async mounted() {
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await res.json();  // Parse the JSON response
        this.posts = data;  // Store data in the component's state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  </script>
  