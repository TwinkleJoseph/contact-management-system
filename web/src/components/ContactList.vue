<template>
  <div>
    <h2>Contact List</h2>
    <input :value="filter" @input="$emit('update:filter', $event.target.value)" placeholder="Filter by name" />
    <div class="contact-grid">
      <div v-for="contact in filteredContacts" :key="contact.id" class="contact-card">
        <div class="contact-card-header">
          <h4>{{ contact.name }}</h4>       
        </div>
        <div class="contact-card-body">
          <p><i class="fas fa-phone"></i> {{ contact.phone }}</p>        
          <p><i class="fas fa-envelope"></i> {{ contact.email }}</p>         
          <p><strong>Company:</strong> {{ contact.company ? contact.company.name : 'N/A' }}</p>
          <p><i class="fas fa-globe"></i> <a :href="contact.website">{{ contact.website }}</a></p>
        </div>
      </div>
      <!-- Form to create a new contact -->
      <div class="contact-card create-contact">
        <h3>Create a New Contact</h3>
        <form @submit.prevent="createContact">
          <input v-model="newContact.name" placeholder="Name" required />
          <input v-model="newContact.email" type="email" placeholder="Email" required />
          <input v-model="newContact.phone" placeholder="Phone" required />
          <input v-model="newContact.website" placeholder="Website" required />
          <input v-model="newContact.companyName" placeholder="Company Name" required />
          <button type="submit">Create Contact</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/ContactListStyles.scss';
import axios from 'axios';

export default {
  props: ['contacts', 'filter'],
  data() {
    return {
      newContact: {
        name: '',
        email: '',
        phone: '',
        website: '',
        company: {
           name: '',
        }
      }
    };
  },
  computed: {
    filteredContacts() {
      if (!this.filter) return this.contacts;
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  methods: {
    createContact() {
      axios.post('http://localhost:5000/api/users', this.newContact)
        .then(response => {
          this.$emit('contact-created', response.data);
          this.resetForm();
        })
        .catch(error => {
          console.error('Error creating contact:', error);
        });
    },
    resetForm() {
      this.newContact = {
        name: '',
        email: '',
        phone: '',
        website: '',
        company: {
           name: '',
        }
      };
    }
  }
};
</script>


