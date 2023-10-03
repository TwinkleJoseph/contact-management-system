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
        <p><strong>Company:</strong> {{ contact.company.name }}</p>
        <p><i class="fas fa-globe"></i> <a :href="contact.website">{{ contact.website }}</a></p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import '../styles/ContactListStyles.scss';

export default {
  props: ['contacts', 'filter'],
  computed: {
    filteredContacts() {
      if (!this.filter) return this.contacts;
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
};
</script>


