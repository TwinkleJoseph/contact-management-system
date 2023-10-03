<template>
  <div>
    <ContactList :contacts="contacts" v-model:filter="filter" />
  </div>
</template>

<script>
import axios from 'axios';
import ContactList from './components/ContactList.vue';

export default {
  name: 'App',
  components: {
    ContactList
  },
  data() {
    return {
      contacts: [],
      filter: ''
    };
  },
   mounted() {
    // Fetch initial contacts from the API
    //http://localhost:5000/api/users
    //https://jsonplaceholder.typicode.com/users
    axios.get('http://localhost:5000/api/users').then(response => {
      this.contacts = response.data;
      console.log('contacts received '+this.contacts)
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
