<!-- <template>
    <div>
      <button @click="showModal = true">Open Modal</button>
  
      <teleport to="body">
        <div v-if="showModal" class="modal">
          <p>This is a modal rendered using Teleport!</p>
          <button @click="showModal = false">Close Modal</button>
        </div>
      </teleport>
    </div>
  </template>
  
  <script>
  export default {
    name:'EighteenClass',
    data() {
      return {
        showModal: false
      };
    }
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
   -->

   <!-- second example -->

   <template>
    <div>
      <h2>App List</h2>
      <ul>
        <li v-for="app in apps" :key="app.id">
          <button @click="showModal(app)">Show Details for {{ app.name }}</button>
        </li>
      </ul>
  
      <!-- Teleport Modal -->
      <teleport to="body">
        <div v-if="selectedApp" class="modal">
          <h3>App Details</h3>
          <p><strong>ID:</strong> {{ selectedApp.id }}</p>
          <p><strong>Name:</strong> {{ selectedApp.name }}</p>
          <p><strong>Description:</strong> {{ selectedApp.description }}</p>
          <button @click="closeModal">Close Modal</button>
        </div>
      </teleport>
    </div>
  </template>
  
  <script>
  export default {
    name:'EighteenClas',
    data() {
      return {
        apps: [
          { id: 1, name: "App One", description: "Description of App One" },
          { id: 2, name: "App Two", description: "Description of App Two" },
          { id: 3, name: "App Three", description: "Description of App Three" }
        ],
        selectedApp: null,  // Holds the dynamically selected app data
      };
    },
    methods: {
      showModal(app) {
        this.selectedApp = app;  // Set the selected app to show in the modal
      },
      closeModal() {
        this.selectedApp = null;  // Close the modal by clearing the selected app
      }
    }
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  