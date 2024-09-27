<template>
    <div class="form-container">
      <h2>Simple Form with Multiple Hobbies in Vue 3</h2>
      
      <!-- Username Input -->
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" />
      </div>
      
      <!-- Email Input -->
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
      </div>
      
      <!-- Password Input -->
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" />
      </div>
      
      <!-- Checkbox for Agreement -->
      <div>
        <label for="agree">Agree to Terms:</label>
        <input type="checkbox" id="agree" v-model="formData.agree" />
      </div>
      
      <!-- Radio Buttons for Gender -->
      <div>
        <label>Gender:</label>
        <input type="radio" id="male" value="male" v-model="formData.gender" />
        <label for="male">Male</label>
        <input type="radio" id="female" value="female" v-model="formData.gender" />
        <label for="female">Female</label>
      </div>
  
      <!-- Multiple Checkbox for Hobbies -->
      <div>
        <label>Hobbies:</label>
        <input type="checkbox" id="hobby1" value="Reading" v-model="formData.hobbies" />
        <label for="hobby1">Reading</label>
        <input type="checkbox" id="hobby2" value="Sports" v-model="formData.hobbies" />
        <label for="hobby2">Sports</label>
        <input type="checkbox" id="hobby3" value="Music" v-model="formData.hobbies" />
        <label for="hobby3">Music</label>
        <input type="checkbox" id="hobby4" value="Traveling" v-model="formData.hobbies" />
        <label for="hobby4">Traveling</label>
      </div>
  
      <!-- Submit Button -->
      <button @click="handleSubmit">Get Values</button>
  
      <!-- Output Values -->
      <div v-if="submitted">
        <h3>Form Data:</h3>
        <p><strong>Username:</strong> {{ formData.username }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Password:</strong> {{ formData.password }}</p>
        <p><strong>Agree to Terms:</strong> {{ formData.agree ? 'Yes' : 'No' }}</p>
        <p><strong>Gender:</strong> {{ formData.gender }}</p>
        <p><strong>Hobbies:</strong> {{ formData.hobbies.join(', ') }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: '',
          agree: false,
          gender: '',
          hobbies: [] // Array to store multiple selected hobbies
        },
        submitted: false
      };
    },
    methods: {
      handleSubmit() {
        this.submitted = true; // Show the form data on submission
        console.log(this.formData); // Output form data to console for debugging
      }
    }
  }
  </script>
  
  <style>
  .form-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  label {
    margin-right: 10px;
  }
  
  input {
    display: block;
    margin: 10px 0 20px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  